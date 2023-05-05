const fs = require("fs");
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
    };
    arr.forEach((v) => {
      // plans ---------------------------
      v["PlanName"] && Global.plans.push(v["PlanName"]);

      // Copay -----------------------------
      v.copay &&
        Global.coPays.push(
          v.copay.includes("/") ? v.copay.split("/") : v.copay
        );

      // Discounts -------------------------------
      v.discounts && Global.discount.push(v.discounts);

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
      v.coverages && check && Global.coverages.push(obj);

      // Networks ------------------------------------------------------------------
      if (v.NetworkDetails) {
        let net = v.NetworkDetails.includes("/")
          ? v.NetworkDetails.split("/")
          : v.NetworkDetails;

        if (v.NetworkDetails.includes("/"))
          net.forEach(
            (n) => !Global.Networks.includes(n) && Global.Networks.push(n)
          );
        else
          !Global.Networks.includes(v.NetworkDetails) &&
            Global.Networks.push(v.NetworkDetails);
      }

      // Frequency -----------------------------------------------------------------
      if (v.frequency) Global.frequency.push(v.frequency);
    });
    // Pricing Table -----------------------
    Global.plans.forEach((plan) => {
      let v = arr.find((v) => v.PlanName === plan).GeographicalCoverage;
      let area = v.includes("/") ? v.split("/ ") : [v];
      Global.pricingTables.push([plan, area]);
    });

    return Global;
  } catch (error) {
    console.log({ err: error.message, stack: error.stack });
    process.exit(1);
  }
};

// benefits Categories ------------------------------------------------------

const benefitCategories = (data, Ids, benefitCore, checkId) => {
  try {
    let arr = [];
    let index;

    const check = (value) => {
      let bool = arr[index].includedBenefits.findIndex(
        (v) => v.userType === value
      );
      return bool != -1 ? [true, bool] : [false, false];
    };

    data.forEach((v) => {
      if (v.userType === "type") {
        let obj = { categoryTitle: v.benefits, includedBenefits: [] };
        arr.push(obj);
        if (!index && index != 0) index = 0;
        else index++;
      } else {
        if (arr[index].includedBenefits.length == 0) {
          let struc = {
            userType: v.userType,
            benefitTypes: [
              benefitCore.find((n) => checkId(n.title, v.benefits))?._id,
            ],
          };
          arr[index].includedBenefits.push(struc);
        } else if (check(v.userType)[0]) {
          arr[index].includedBenefits[check(v.userType)[1]].benefitTypes.push(
            benefitCore.find((n) => checkId(n.title, v.benefits))?._id
          );
        } else {
          let struc = {
            userType: v.userType,
            benefitTypes: [
              benefitCore.find((n) => checkId(n.title, v.benefits))?._id,
            ],
          };
          arr[index].includedBenefits.push(struc);
        }
      }
    });

    return arr;
  } catch (err) {
    console.log({ err: err.message, err: err.stack });
  }
};
// ------------------------------------------------------------------------------

const createFile = (folder, fileName, data) => {
  // data.forEach((element) => {
  //   console.log(element.annualLimit);
  // });
  // return false;

  if (!fs.existsSync(`Output/${folder}`)) fs.mkdirSync(`Output/${folder}`);
  fs.appendFile(
    `Output/${folder}/${fileName}.js`,
    `module.exports = ${JSON.stringify(data)}`,
    function (err) {
      try {
        if (err) throw err;
        console.log(`${folder}/${fileName} Created!`);
      } catch (error) {
        console.log(`error: ${error.message}`);
      }
    }
  );
};

const ageRange = (arr) => {
  let range = [];

  arr.forEach((v, index) => {
    if (range.length === 0) {
      range.push([0, null, v.rate]);
    }
    if (v.rate != range[range.length - 1][2]) {
      range[range.length - 1].splice(1, 1, index - 1);
      range.push([v.age, null, v.rate]);
    }
    if (index == arr.length - 1) {
      range[range.length - 1].splice(1, 1, index);
    }
  });

  return range;
};

module.exports = { getList, benefitCategories, createFile, ageRange };
