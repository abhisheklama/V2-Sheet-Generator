const fs = require("fs");
const xlsx = require("xlsx");
const { maxArrLength, singleChild, Zones } = require("./constants");

const remove = (str, n) => {
  !str && console.log("n --> ", n, str);
  let v = str;
  str = str.toString();
  if (str.includes(" ")) {
    str = str
      .split(" ")
      .map((v) => v.replace(v[0], v[0]?.toUpperCase()))
      .join("");
  }
  if (str.includes("&")) {
    str = str.split("&").join("And");
  }
  if (str.includes("-")) {
    str = str
      .split("-")
      .map((v, i) => (i == 1 ? v.replace(v[0], v[0].toUpperCase()) : v))
      .join("");
  }
  while (str.includes(",")) str = str.replace(",", "");
  while (str.includes(":")) str = str.replace(":", "");
  while (str.includes(".")) str = str.replace(".", "");
  while (str.includes("(")) str = str.replace("(", "");
  while (str.includes(")")) str = str.replace(")", "");
  while (str.includes("/")) str = str.replace("/", "Or");
  while (str.includes("+")) str = str.replace("+", "plus");
  while (str.includes("*")) str = str.replace("*", "");
  while (str.includes("\n")) str = str.replace("\n", "");
  return [str, v];
};

const getList = (arr) => {
  try {
    let Global = {
      plans: [],
      coverages: [],
      coPays: [],
      pricingTables: [],
      Modifiers: [
        "benefits",
        "paymentFrequency",
        "deductible",
        "discount",
        "network",
      ],
      Networks: [],
      discount: [],
      Provider: arr[0].companyName,
      frequency: [],
      startDate: arr[0].startDate,
      endDate: arr[0].endDate,
      residency: arr[0].residency,
      filters: {
        networkType: "",
        frequency: "",
        notIncludedBenefits: [],
        addons: [],
        bundleBenefits: [],
        dependentBenefits: [],
      },
    };

    if (arr[0].networkType == "custom") Global.filters.networkType = "custom";
    else if (arr[0].NetworkDetails.includes("/"))
      Global.filters.networkType = "multiple";
    else Global.filters.networkType = "single";

    arr.forEach((v) => {
      if (v.filters == "frequency") Global.filters.frequency = "custom";
    });

    arr.forEach((v) => {
      // plans ---------------------------
      v["PlanName"] && Global.plans.push(remove(v["PlanName"]));

      // Copay -----------------------------
      if (v.copay) {
        let v1 = !v.copay.includes(" - ")
          ? ["all"]
          : v.copay.split(" - ")[1].includes(",")
          ? v.copay.split(" - ")[1].split(",")
          : v.copay.split(" - ")[1];
        let v2 = v.copay.includes(" - ")
          ? v.copay.split(" - ")[0].split("/")
          : v.copay.split("/");
        Global.coPays.push([v2, v1]);
      }

      // Discounts -------------------------------
      v.discounts &&
        Global.discount.push([
          v.discounts.split(" - ")[0],
          v.discounts.split(" - ")[1],
        ]);

      // coverages -----------------------------------------------------------
      let obj = {
        coverageName: "",
        includedCountries: [],
        excludedCountries: [],
      };
      if (v.coverages) {
        obj.coverageName = v.coverages;
        if (v.included)
          obj.includedCountries = v.included.includes(",")
            ? v.included.split(",")
            : [v.included];
        if (v.excluded)
          obj.excludedCountries = v.excluded.includes(",")
            ? v.excluded.split(",")
            : [v.excluded];
      }
      let check;
      if (Global.coverages.length > 0) {
        check = Global.coverages.find((v) => v.coverageName == v.coverages)
          ? false
          : true;
      } else {
        check = true;
      }
      v.coverages &&
        check &&
        Global.coverages.push({
          ...obj,
          coverageName: remove(obj.coverageName),
        });
      // Networks ------------------------------------------------------------------
      if (v.NetworkDetails) {
        let net = v.NetworkDetails.includes("/")
          ? v.NetworkDetails.split("/")
          : v.NetworkDetails;

        if (v.NetworkDetails.includes("/"))
          net.forEach(
            (n) =>
              !Global.Networks.find((v) => v?.includes(n)) &&
              Global.Networks.push(remove(n))
          );
        else
          !Global.Networks.find((p) => p.includes(v.NetworkDetails)) &&
            Global.Networks.push(remove(v.NetworkDetails));
      }

      // Frequency -----------------------------------------------------------------
      if (v.frequency) Global.frequency.push(v.frequency);
    });
    // Pricing Table -----------------------
    Global.plans.forEach((plan) => {
      let v = arr.find((v) => v.PlanName === plan[1]).GeographicalCoverage;
      let area = v.includes("/")
        ? v.split("/").map((v) => remove(v))
        : [remove(v)];
      Global.pricingTables.push([plan, area]);
    });

    // Not included benefits -----------------------------------
    arr.forEach((benefits) => {
      for (let key in benefits) {
        if (
          benefits[key] &&
          (benefits[key] == "N/A" ||
            benefits[key].toString().toLowerCase() == "not available")
        ) {
          let index = Global.filters.notIncludedBenefits.findIndex(
            (v) => v.plan == remove(benefits["PlanName"])[0]
          );
          if (index == -1) {
            Global.filters.notIncludedBenefits.push({
              plan: remove(benefits["PlanName"])[0],
              benefits: [remove(key)[0]],
            });
          } else {
            Global.filters.notIncludedBenefits[index].benefits.push(
              remove(key)[0]
            );
          }
        }
      }
    });

    // Addon Premiums -----------------------------------
    arr[0].addons &&
      arr.forEach(({ addons }) => {
        if (!addons) return;
        // let values = addons.split(" & ");
        // let struc = {
        //   benefitName: true,
        //   label: true,
        //   rateSheetLabel: true,
        //   type: true,
        //   flag: "",
        //   description: "",
        //   conditions: "",
        // };
        // values.forEach((value) => {
        //   let [field, fieldValue] = value.split(":");
        //   if (
        //     field != "description" &&
        //     field != "flag" &&
        //     field != "conditions" &&
        //     (!struc[field] || !(fieldValue && fieldValue.trim()))
        //   )
        //     throw new Error("Incorrect Addon feildName " + field);
        //   field = field.trim();
        //   fieldValue = fieldValue.trim();
        //   struc[field] = fieldValue;
        // });
        Global.filters.addons.push(addons);
      });

    // bundle benefits -----------------------------------
    // console.log(">>>>>", arr[0]);
    arr[0]["bundlebenefits"] &&
      arr.forEach((v) => {
        if (!v["bundlebenefits"]) return;
        let values = v["bundlebenefits"].split("/");
        Global.filters.bundleBenefits.push(...values);
      });

    // Dependent benefits -----------------------------------
    arr[0]["dependentbenefits"] &&
      arr.forEach((v) => {
        if (!v["dependentbenefits"]) return;
        let [core, dependent] = v["dependentbenefits"].split(" - ");
        Global.filters.dependentBenefits.push({ core, dependent });
      });

    return Global;
  } catch (error) {
    console.log({ err: error.message, stack: error.stack });
    process.exit(1);
  }
};

// benefits Categories ------------------------------------------------------

// const benefitCategories = (data, Ids) => {
//   try {
//     let arr = [];
//     let index;

//     const check = (value) => {
//       let bool = arr[index].includedBenefits.findIndex(
//         (v) => v.userType === value
//       );
//       return bool != -1 ? [true, bool] : [false, false];
//     };

//     data.forEach((v) => {
//       if (v.userType === "type") {
//         let obj = { categoryTitle: v.benefits[1], includedBenefits: [] };
//         arr.push(obj);
//         if (!index && index != 0) index = 0;
//         else index++;
//       } else {
//         if (arr[index].includedBenefits.length == 0) {
//           let struc = {
//             userType: v.userType,
//             benefitTypes: [
//               `-.-`,
//             ],
//           };
//           arr[index].includedBenefits.push(struc);
//         } else if (check(v.userType)[0]) {
//           arr[index].includedBenefits[check(v.userType)[1]].benefitTypes.push(
//             `-.-`
//           );
//         } else {
//           let struc = {
//             userType: v.userType,
//             benefitTypes: [
//               `-.-`,
//             ],
//           };
//           arr[index].includedBenefits.push(struc);
//         }
//       }
//     });

//     return arr;
//   } catch (err) {
//     console.log({ err: err.message, err: err.stack });
//   }
// };
// ------------------------------------------------------------------------------

const createFile = (
  folder,
  fileName,
  data,
  provider,
  core = false,
  Enum = false,
  comment = false,
  addUp = false
) => {
  try {
    data = JSON.stringify(data);
    data = data.replace(/"-/g, "");
    data = data.replace(/-"/g, "");
    data = data.replace(/\n/g, "");

    let str = `${addUp ? addUp : ""}
      const ${provider} = require("../core-index.js")
      ${Enum ? "const Enum = require('../../enum.js')" : ""}
    ${core ? 'const core = require("../../core");' : ""}
    ${comment ? `// ${comment}` : ""}
    let ${folder} = ${data} ;
    module.exports = ${folder} ;`;

    if (!fs.existsSync(`Output/${folder}`)) fs.mkdirSync(`Output/${folder}`);
    fs.appendFileSync(`Output/${folder}/${fileName}.js`, str);
    console.log(`${folder}/${fileName} Created!`);
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
};

const readFile = (folderName, filename, n = 0, loc = "./Input") => {
  const Sheet = xlsx.readFileSync(`${loc}/${folderName}/${filename}.xlsx`);
  if (typeof n == "string") {
    let sheetname = n;
    n = Sheet.SheetNames.indexOf(sheetname);
    if (n == -1) {
      n = Sheet.SheetNames.findIndex((v) => sheetname.includes(v));
      // console.log(">>", `-${sheetname}-`, n);
    }
  }
  // console.log("Sheet.SheetNames --> ", Sheet.SheetNames, typeof n);
  return xlsx.utils.sheet_to_json(Sheet.Sheets[Sheet.SheetNames[n]]);
};

const splittingFile = (arr, key, folder, num) => {
  if (!fs.existsSync(`Output/${folder}`)) fs.mkdirSync(`Output/${folder}`);
  if (!fs.existsSync(`Output/${folder}/${key}`))
    fs.mkdirSync(`Output/${folder}/${key}`);
  // let count = Math.ceil(arr.length / maxArrLength);
  // for (let i = 1; i <= count; i++) {
  let count;
  let data = `
    const Enum = require("../../../enum.js");
    let table = ${JSON.stringify(arr)};
    module.exports = table;
    `;
  data = data.replace(/"-/g, "");
  data = data.replace(/-"/g, "");
  fs.appendFileSync(`Output/${folder}/${key}/${key}_${num}.js`, data);
  // }
  return count || 1;
};

const generateShortCode = (str) => {
  if (str.includes("nil")) return "Nil";
  if (str.includes("10%")) return "10";
  if (str.includes("20%")) return "20";
  let shortStr = "";
  for (let i = 0; i < str.length; i++) {
    let code = str[i].charCodeAt(0);
    if (code >= 65 && code <= 90) shortStr += str[i];
  }
  return shortStr;
};

const groupingCollection = (arr, col) => {
  // [ageStart,ageEnd,rates]
  let range = [[arr[0].ageStart, arr[0].ageStart, arr[0][col]]];

  arr.forEach((v, i) => {
    if (i == 0) return;
    let currentItem = range[range.length - 1]; // current item of ranage Arr
    if (currentItem[2] == v[col]) {
      if (i == arr.length - 1) currentItem[1] = v.ageEnd;
      return;
    }
    currentItem[1] = v.ageStart - 1;
    range.push([v.ageStart, v.ageEnd, v[col]]);
  });

  return range;
};

const fetchAddons = (
  benefit,
  addonName,
  folderName,
  provider,
  num,
  conversion
) => {
  let info = readFile(folderName, "addons", addonName);
  let addonRates = info[0]?.sheetName
    ? readFile(folderName, `addons${num}`, info[0].sheetName)
    : [];
  // createFile(
  //   "Addons",
  //   addonName.includes(" ") ? addonName.split(" ")[0] : addonName,
  //   info
  // );
  // createFile(
  //   "Addons",
  //   (addonName.includes(" ") ? addonName.split(" ")[0] : addonName) + "_rates",
  //   addonRates
  // );
  if (info.find((v) => v.default?.toLowerCase == "true")) {
  } else {
    num = num ? parseInt(num) + 1 : 1;
    let Addons = [];
    info.forEach((v, i) => {
      let obj = {
        id:
          benefit.label == "Maternity (Consultations, Scans and Delivery)"
            ? v.label
            : "option-" + (i + 1),
        label: v.label,
        description: v.description,
      };
      if (v.plan) {
        let p_ = benefit.plans.filter((p) =>
          v.plan.includes(",")
            ? v.plan
                .split(",")
                .map((v) => remove(v)[0])
                .includes(p.split(".")[2].replace("-", ""))
            : p.split(".")[2].replace("-", "") == remove(v.plan)[0]
        );
        // console.log(">>", benefit.plans, p_, v.plan);
        obj.conditions = [
          {
            type: "-Enum.conditions.plans-",
            value: [...p_],
          },
        ];
      }
      let Enums = {
        planName: "-Enum.conditions.plans-",
        ageStart: "-Enum.customer.min_age-",
        ageEnd: "-Enum.customer.max_age-",
        gender: "-Enum.customer.gender-",
        married: "-Enum.customer.maritalStatus-",
        network: "-Enum.conditions.modifier-",
        coverages: "-Enum.conditions.coverage-",
        coverage: "-Enum.conditions.coverage-",
        frequency: "-Enum.conditions.modifier-",
        copay: "-Enum.conditions.deductible-",
      };
      if (addonRates.length > 0)
        obj.addonCost = {
          type: v.type,
          conditionalPrices: addonRates
            .filter((r) => r.flag == v.flag && r.currency == "USD")
            .map((rate) => {
              let mutliCurrency = addonRates.filter((v) => {
                if (
                  v.currency == "USD" ||
                  !v.currency ||
                  Object.keys(v).length != Object.keys(rate).length
                )
                  return false;
                let bool = true;
                for (let f in rate) {
                  if (f == "rates" || f == "currency") continue;
                  if (rate[f] != v[f]) {
                    bool = false;
                    break;
                  }
                }
                return bool;
              });
              if (mutliCurrency.length == 0 || mutliCurrency.length > 3) {
                console.log("rate >>", rate, mutliCurrency);
                throw `error with mutliCurrency addon`;
              }
              let res = {
                conditions: [],
                price: [
                  {
                    value: rate.rates / conversion,
                    currency: "-Enum.currency.USD-",
                  },
                ],
              };
              mutliCurrency.map((v) => {
                res.price.push({
                  value: v.rates / conversion,
                  currency: `-Enum.currency.${v.currency}-`,
                });
              });
              for (let col in rate) {
                if (rate[col] !== 0 && !rate[col]) continue;
                let con = { type: Enums[col], value: [] };
                if (col == "ageStart" || col == "ageEnd") con.value = rate[col];
                else if (col == "gender")
                  con.value = `-Enum.gender.${rate[col].toLowerCase()}-`;
                else if (col == "copay" || col == "networkss")
                  con.value = [rate[col]];
                else if (col == "married") {
                  if (rate[col] == 0)
                    con.value = "-Enum.maritalStatus.married-";
                  else con.value = "-Enum.maritalStatus.single-";
                } else if (
                  col == "planName" ||
                  col == "coverages" ||
                  col == "coverage"
                )
                  con.value = `-${provider}.${
                    col == "planName" ? "plans" : "coverages"
                  }${num}.${remove(rate[col])[0]}-`;
                else if (col == "singleChild")
                  con = singleChild[`_${rate[col]}`];
                // else if (col == "frequency") {
                //   if (rate[col] == "Annually")
                //     con.value = ["annual-payment-surcharge"];
                //   else if (rate[col] == "Quarterly")
                //     con.value = ["quarterly-payment-surcharge"];
                // } 
                else continue;
                res.conditions.push(con);
              }
              return res;
            }),
        };
      if (addonRates.length > 0 && obj.addonCost.conditionalPrices.length == 0)
        delete obj.addonCost;
      Addons.push(obj);
    });
    benefit.options = Addons;
    benefit.isOptional = true;
    benefit.hasOptions = true;
    if (
      [
        "Maternity (Consultations, Scans and Delivery)",
        "Dental",
        "Out-patient benefits",
      ].includes(benefit.label.trim())
    );
    benefit.assignmentType = "PER_CUSTOMER";

    if (benefit.label == "Out-patient Consultations") {
      benefit.title = "Out-patient Addon";
    }
    if (benefit.label == "Maternity (Consultations, Scans and Delivery)") {
      benefit.conditions = [
        ...benefit.conditions,
        { type: "-Enum.customer.min_age-", value: 19 },
        { type: "-Enum.customer.max_age-", value: 46 },
        {
          type: "-Enum.customer.maritalStatus-",
          value: "-Enum.maritalStatus.married-",
        },
        { type: "-Enum.customer.gender-", value: "-Enum.gender.female-" },
      ];
      benefit.options = benefit.options.map((opt) => {
        opt.conditions = [
          ...opt.conditions,
          { type: "-Enum.customer.min_age-", value: 19 },
          { type: "-Enum.customer.max_age-", value: 46 },
          {
            type: "-Enum.customer.maritalStatus-",
            value: "-Enum.maritalStatus.married-",
          },
          { type: "-Enum.customer.gender-", value: "-Enum.gender.female-" },
        ];
        return opt;
      });
    }

    return benefit;
  }
};

const extractAddon = (arr, addon, search = "") => {
  const Enum = {
    network: "-Enum.conditions.modifier-",
    coverage: "-Enum.conditions.coverage-",
    planName: "-Enum.conditions.plans-",
    gender: "-Enum.customer.gender-",
    ageStart: "-Enum.customer.min_age-",
    ageEnd: "-Enum.customer.max_age-",
    curreny: "-Enum.currency.USD-",
  };
  let includedRates = [];
  arr = arr.filter((v) => v[addon]);
  let rates = arr.reduce((acc, v) => {
    if (v[addon] && !includedRates.includes(v[addon])) {
      includedRates.push(v[addon]);
      return [...acc, v];
    }
    return acc;
  }, []);
  if (rates.length == 0) throw new Error("Addon not found");
  let fields = [];
  let sheetLabels = Object.keys(Enum);
  if (arr.find((v) => v.married)) {
    Enum.married = "-Enum.customer.maritalStatus-";
  }
  for (let key in sheetLabels) {
    if (rates[0][key] != rates[1][key]) fields.push(key);
  }
  return rates.map((v) => {
    let conditions = fields.map((f) => {
      return { type: Enum[f], value: v[f] };
    });
    return {
      conditions,
      price: [{ value: v[addon], currency: Enum.curreny }],
    };
  });
};

const getResidency = (zone) => {
  let codes = Zones.find((v) => v[0] == zone);
  return [codes[1], []];
};

module.exports = {
  getList,
  createFile,
  remove,
  splittingFile,
  generateShortCode,
  groupingCollection,
  extractAddon,
  readFile,
  fetchAddons,
  getResidency,
};
