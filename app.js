const xlsx = require("xlsx");
const fs = require("fs");
const {
  getList,
  benefitCategories,
  createFile,
  ageRange,
} = require("./Code/List");
const generateCodeIndex = require("./Code/generateId");
const Structures = require("./Code/structure");
const planSheet = xlsx.readFile("./Input/Ecare/benefits.xlsx");
const benefitSheet = xlsx.readFile("./Input/Ecare/userType.xlsx");
const rate = xlsx.readFile("./Input/Ecare/rateSheet.xlsx");
const mongoose = require("mongoose");
const { ObjectId } = require("mongodb");
const conversion = 3.6725;

const replaceChar = (word) => {
  word = word.replace(" ", "");
  while (word.includes(" ")) {
    word = word.replace(" ", "");
  }
  word = word.replace("/", "");
  word = word.replace("-", "");
  return word;
};

const convertXlsx = (sheet) => {
  try {
    let result = [];
    let data = xlsx.utils.sheet_to_json(sheet);
    data.forEach((v) => {
      let clone = {};
      for (let key in v) {
        let newKey = key.includes(" ") ? replaceChar(key) : key;
        clone[newKey] = v[key];
      }
      result.push(clone);
    });

    return getList(result);
  } catch (error) {
    console.log({ err: error.message, stack: error.stack });
    process.exit(1);
  }
};

let GlobalData = convertXlsx(planSheet.Sheets[planSheet.SheetNames[0]]);
const DATA = xlsx.utils
  .sheet_to_json(planSheet.Sheets[planSheet.SheetNames[0]])
  .map((v) => {
    let obj = {};
    for (let key in v) {
      let a = key;
      if (
        key.charCodeAt(key.length - 1) == 160 ||
        key.charCodeAt(key.length - 1) == 32
      ) {
        key = key.slice(0, -1);
      }
      obj[key] = v[a];
    }
    return obj;
  });

let Benefits = xlsx.utils.sheet_to_json(
  benefitSheet.Sheets[benefitSheet.SheetNames[0]]
);
let rateSheet = xlsx.utils.sheet_to_json(rate.Sheets[rate.SheetNames[0]]);
let Ids = generateCodeIndex(GlobalData, Benefits, DATA);

if (process.argv[2] == "-all") {
  async function main() {
    try {
      mongoose
        .connect(
          "mongodb+srv://shreyavisions:gB5TEzmzXYI5VZoW@cluster0.ckkml.mongodb.net/test"
        )
        .then((res) => console.log("db connected"));
      const { Schema } = mongoose;
      const schema = Schema({
        _id: Schema.Types.ObjectId,
        title: String,
        icon: String,
      });
      let benefitsModel = mongoose.model("BenefitType", schema);
      let benefitCore = await benefitsModel.find();
      let modifierModel = mongoose.model("ModifierType", schema);
      let modifierCore = await modifierModel.find();

      // fs.mkdirSync("/Output", (err) => {
      //   if (err) throw new Error(err);
      //   console.log("Output created!");
      // });

      fs.appendFile(
        `Output/core-index.js`,
        `module.exports = ${JSON.stringify(Ids)}`,
        function (err) {
          try {
            if (err) throw err;
            console.log(`${folder}/${fileName} Created!`);
          } catch (error) {
            console.log(`error: ${error.message}`);
          }
        }
      );
      // ---------------------------------------

      // ----------------------- Index ---------------------------
      function createIndex() {
        const data = `
        const Provider = require('./provider/index');
        const Plans = require('./plans/index');
        const PricingTables = require('./PricingTable/index');
        const Coverages = require('./coverage/index');
        const Modifiers = require('./modifiers/index');
        let data = [
          // Provider data
          {
            model: "Provider",
            modelPath: "models/provider-model.js",
            documents: Provider,
          },

          // Plans
          {
            model: "Plan",
            modelPath: "models/plan-model.js",
            documents: Plans,
          },

          // Pricing Tables
          {
            model: "PricingTable",
            modelPath: "models/pricing-table-model.js",
            documents: PricingTables,
          },

          // Coverage information
          {
            model: "Coverage",
            modelPath: "models/coverage-model.js",
            documents: Coverages,
          },

          {
            // Plan modifiers
            model: "Modifier",
            modelPath: "models/modifier-model.js",
            documents: Modifiers,
          },
        ];

        module.exports = data`;
        fs.appendFile(`Output/index.js`, data, function (err) {
          try {
            if (err) throw err;
            console.log(`index Created!`);
          } catch (error) {
            console.log(`error: ${error.message}`);
          }
        });
      }

      createIndex();

      // ----------------------- Provider -------------------------
      function createProvider() {
        let str = [
          {
            _id: Ids.providers,
            title: DATA[0].companyName,
            logo: "",
            colors: {},
          },
        ];
        createFile("provider", "index", str);
      }

      createProvider();

      // --------------------------------- Coverage File ---------------------------------------------------
      function coverage() {
        const { coverage_structure } = Structures;

        let coverage_data = GlobalData.coverages.map((v) => {
          let clone = {
            _id: Ids.coverages[v.coverageName],
            title: v.coverageName,
            internalTitle: v.coverageName,
            includedCountries: v.includedCountries,
            excludedCountries: v.excludedCountries,
            notes: "",
          };

          return clone;
        });
        createFile("coverage", "index", coverage_data);
      }
      // coverage();

      // ----------------------------------------------------------------------------------------------------

      // ----------------------------------- Plans file -----------------------------------------------------

      function plan() {
        const benefitTypes = benefitCategories(
          Benefits,
          Ids,
          benefitCore,
          check
        );
        let modifiersId = [];
        for (let key in Ids.modifiers) {
          for (let v in Ids.modifiers[key]) {
            modifiersId.push(Ids.modifiers[key][v]);
          }
        }
        let Plans = GlobalData.plans.map((plan) => {
          let tableIds = [];
          for (const key in Ids.pricingTables[plan]) {
            tableIds.push(Ids.pricingTables[plan][key]);
          }
          let clone = {
            _id: Ids.plans[plan],
            tmpPath: "",
            provider: Ids.providers,
            title: plan,
            notes: "",
            benefitCategories: benefitTypes,
            pricingTables: tableIds,
            modifiers: modifiersId,
          };

          return clone;
        });

        createFile("plans", "index", Plans);
      }

      // plan();
      // -----------------------------------------------------------------------------------------------------

      // ----------------------------------Pricing Table -----------------------------------------------------
      // table();
      // console.log("GlobalData.frequency[0]", GlobalData.frequency[0]);
      function table() {
        let pricingArr = [];
        let UAE = [
          ["AE-DU", "AE-AZ", "AE-AJ", "AE-FU", "AE-SH", "AE-RK", "AE-UQ"],
          [],
        ];
        let NE = [
          ["AE-AJ", "AE-FU", "AE-SH", "AE-RK", "AE-UQ"],
          ["AE-DU", "AE-AZ"],
        ];
        let Dubai = [
          ["AE-DU"],
          ["AE-AZ", "AE-AJ", "AE-FU", "AE-SH", "AE-RK", "AE-UQ"],
        ];
        let AbuDhabi = [
          ["AE-AZ"],
          ["AE-DU", "AE-AJ", "AE-FU", "AE-SH", "AE-RK", "AE-UQ"],
        ];

        for (const key in Ids.pricingTables) {
          // console.log(key, DATA);
          let plan = Ids.pricingTables[key];
          let planValue = DATA.find((p) => p.PlanName === key)["Annual Limit"];

          for (let v in plan) {
            let pricing = rateSheet.filter((n) => {
              // console.log({
              //   name: [n.planName, key, n.planName == key],
              //   cov: [n.coverage, v, n.coverage == v],
              //   copay: [
              //     n.copay,
              //     GlobalData.coPays[0][0],
              //     n.copay == GlobalData.coPays[0][0],
              //   ],
              //   fre: [
              //     n.frequency,
              //     GlobalData.frequency[0],
              //     n.frequency == GlobalData.frequency[0],
              //   ],
              // });
              // throw new Error();
              if (DATA[0].planCopay == "single") {
                return (
                  n.planName == key &&
                  n.coverage == v &&
                  // n.copay == GlobalData.coPays[0][0] &&
                  n.frequency == GlobalData.frequency[0]
                );
              }
              return (
                n.planName == key &&
                n.coverage == v &&
                n.copay == GlobalData.coPays[0][0] &&
                n.frequency == GlobalData.frequency[0]
              );
            });
            // createFile("console", "table", pricing);
            let table = pricing.map((t) => {
              let str = {
                fromAge: t.ageStart,
                toAge: t.ageEnd,
                gender: t.gender,
                residency: DATA[0].residency,
                network: t.network,
                price: [
                  {
                    value: (t.rates / conversion).toFixed(2),
                    currency: t.currency,
                  },
                ],
              };
              if (t.married === 0) {
                str.isMarried = true;
              }
              if (t.married === 1) {
                str.isMarried = false;
              }
              return { ...str };
            });
            let res = GlobalData.coverages.find((vv) => vv.coverageName == v);
            let check =
              planValue.toString().includes("AED") ||
              planValue.toString().includes("USD")
                ? true
                : false;

            let clone = {
              _id: plan[v],
              plan: Ids.plans[key],
              annualLimit: [
                {
                  currency: check ? planValue.split(" ")[0] : "USD",
                  value: check
                    ? Number(planValue.split(" ")[1].split(",").join(""))
                    : planValue,
                },
              ],
              startDate: new Date(GlobalData.startDate).toISOString(),
              endDate: GlobalData.endDate
                ? new Date(GlobalData.endDate).toISOString()
                : "",
              includedResidence:
                DATA[0].residency == "UAE"
                  ? UAE[0]
                  : DATA[0].residency == "NE"
                  ? NE[0]
                  : DATA[0].residency == "Dubai"
                  ? Dubai[0]
                  : AbuDhabi[0],
              excludedResidence:
                DATA[0].residency == "UAE"
                  ? UAE[1]
                  : DATA[0].residency == "NE"
                  ? NE[1]
                  : DATA[0].residency == "Dubai"
                  ? Dubai[1]
                  : AbuDhabi[1],
              coverage: [Ids.coverages[v]],
              baseAnnualPremium: [...table],
            };
            pricingArr.push({ ...clone });
          }
        }
        // console.log(pricingArr);
        createFile("PricingTable", "index", pricingArr);
      }
      // -----------------------------------------------------------------------------------------------------

      // -------------------------------- Modifiers file -----------------------------------------------------
      function modifiers() {
        let benefitsKeys = DATA[0];
        let modifiers = {};
        for (let key in benefitsKeys) {
          if (
            key == "PlanName" ||
            key == "Annual Limit" ||
            key == "Network Details" ||
            key == "Geographical Coverage" ||
            key == "GeographicalCoverage"
          )
            continue;
          if (key == "Modes of Payment" || key == "Semi Annual Surcharge")
            break;
          if (
            key.charCodeAt(key.length - 1) == 160 ||
            key.charCodeAt(key.length - 1) == 32
          ) {
            key = key.slice(0, -1);
          }
          DATA.forEach((d) => {
            let { PlanName } = d;
            if (modifiers.length == 0)
              modifiers[key] = [{ plans: [PlanName], value: d[key] }];
            else if (modifiers[key]) {
              if (modifiers[key][modifiers[key].length - 1].value == d[key]) {
                let index = modifiers[key].findIndex((v) => v.value == d[key]);
                modifiers[key][index].plans.push(PlanName);
              } else modifiers[key].push({ plans: [PlanName], value: d[key] });
            } else {
              modifiers[key] = [{ plans: [PlanName], value: d[key] }];
            }
          });
        }
        // console.log(modifiers);
        // throw new Error();

        let newArr = [];
        let planIds = [];
        for (let key in Ids.plans) {
          planIds.push(Ids.plans[key]);
        }
        GlobalData.Modifiers.forEach((key) => {
          // console.log("keys -- ", key);
          // benefits --------------------------------------------
          if (key == "benefits") {
            for (const key in modifiers) {
              if (
                key.charCodeAt(key.length - 1) == 160 ||
                key.charCodeAt(key.length - 1) == 32
              ) {
                key = key.slice(0, -1);
              }
              !benefitCore.find((v) => check(v.title, key)) &&
                console.log("k ", key);

              let str = {
                _id: Ids.modifiers.benefits[key],
                plans: [...planIds],
                title: key,
                label: key,
                type: modifierCore.find((v) => v.title == "Benefit")._id,
                assignmentType: "PER_PLAN",
                includedBenefits: [
                  benefitCore.find((v) => check(v.title, key))._id,
                ],
                isOptional: false,
                description: "",
                addonCost: {},
                premiumMod: "",
                conditions: [],
                hasOptions: true,
              };
              // throw new Error();
              str.description =
                modifiers[key].length > 1
                  ? ""
                  : modifiers[key][0].value.toString().includes(" $ ")
                  ? ""
                  : modifiers[key][0].value.toString().includes("$copay")
                  ? ""
                  : modifiers[key][0].value;
              str.isOptional = false;
              str.hasOptions = modifiers[key].length > 1;

              if (modifiers[key].length > 1) {
                str.options = [];
                let count = 1;
                modifiers[key].forEach((m) => {
                  let cc = {
                    id: "option-" + count,
                    label: m.value,
                    description: m.value,
                    conditions: [
                      {
                        type: "PLAN_EQUALS_TO",
                        value: [
                          ...m.plans.reduce((acc, v) => {
                            return [...acc, Ids.plans[v]];
                          }, []),
                        ],
                      },
                    ],
                  };
                  str.options.push(cc);
                  count++;
                });
              }
              if (modifiers[key][0].value.toString().includes(" $ ")) {
                str.options = [];
                let count = 1;
                GlobalData.coPays.forEach((v) => {
                  let text = modifiers[key][0].value;
                  v.forEach((co, i) => {
                    if (i == 0) return;
                    if (i == 1) {
                      text = text.replace("$", co + "%");
                      return;
                    }
                    text = text.replace("$", co);
                  });
                  let cc = {
                    id: "option-" + count,
                    label: text,
                    description: text,
                    conditions: [
                      {
                        type: "DEDUCTIBLE_EQUALS_TO",
                        value: [Ids.modifiers["deductible"][v[0]]],
                      },
                    ],
                  };
                  str.options.push(cc);
                  count++;
                });
              }
              if (modifiers[key][0].value.toString().includes("$copay")) {
                str.options = [];
                let count = 1;
                GlobalData.coPays.forEach((v) => {
                  let cc = {
                    id: "option-" + count,
                    label: v[0],
                    description: v[0],
                    conditions: [
                      {
                        type: "DEDUCTIBLE_EQUALS_TO",
                        value: [Ids.modifiers["deductible"][v[0]]],
                      },
                    ],
                  };
                  str.options.push(cc);
                  count++;
                });
              }
              newArr.push(str);
            }
          }
          if (key == "discount") {
            GlobalData[key].forEach((v1, index) => {
              let str = {
                _id: Ids.modifiers.discount[v1],
                plans: [...planIds],
                title: key,
                label: key,
                type: modifierCore.find((v) => v.title == "Benefit")._id,
                assignmentType: "PER_PLAN",
                includedBenefits: [
                  benefitCore.find((v) => check(v.title, key))._id,
                ],
                isOptional: false,
                description: "",
                addonCost: {},
                premiumMod: "",
                conditions: [],
                hasOptions: true,
              };
              newArr.push(str);
            });
          }

          // deductible -----------------------------------------
          if (key == "deductible") {
            GlobalData["plans"].forEach((plan, pI) => {
              let str = {
                _id: Ids.modifiers[key],
                plans: [Ids["plans"][plan]],
                title: "coPays",
                label: "coPays",
                type: modifierCore.find((v) => v.title == "Deductible")._id,
                assignmentType: "PER_PLAN",
                includedBenefits: [],
                isOptional: false,
                description: "",
                addonCost: {},
                premiumMod: "",
                conditions: [],
                hasOptions: true,
                options: [],
              };

              // console.log("in -- ", key);
              GlobalData["coPays"].forEach((v1, index) => {
                let [copay] = v1;
                let count = 1;
                let copayArr = [];
                let clone = {
                  id: "option-" + (index + 1),
                  label: copay,
                  premiumMod: {
                    type: "conditional-override",
                    conditionalPrices: [],
                  },
                  conditions: [],
                };
                GlobalData["pricingTables"].forEach((plan) => {
                  let [planName, coverage] = plan;
                  coverage.forEach((cc) => {
                    GlobalData["frequency"].forEach((fr) => {
                      let pricing = rateSheet.filter((n) => {
                        // if (n.copay == "Nil") return false;
                        return (
                          n.planName == plan &&
                          n.coverage == cc &&
                          n.copay == copay &&
                          n.frequency == fr
                        );
                      });
                      let table = pricing.map((t) => {
                        let str = {
                          conditions: [
                            {
                              type: "CUSTOMER_MIN_AGE",
                              value: t.ageStart,
                            },
                            {
                              type: "CUSTOMER_MAX_AGE",
                              value: t.ageEnd,
                            },
                            {
                              type: "CUSTOMER_GENDER",
                              value: t.gender,
                            },
                            {
                              type: "CUSTOMER_COVERAGE",
                              value: cc,
                            },
                            {
                              type: "CUSTOMER_NETWORK",
                              value: t.network,
                            },
                          ],
                          price: [
                            {
                              value: (t.rates / conversion).toFixed(2),
                              currency: t.currency,
                            },
                          ],
                        };
                        return { ...str };
                      });

                      clone.premiumMod.conditionalPrices = table;
                    });
                  });
                });
              });
              // let str = {
              //   _id: Ids.modifiers[key][v1[0]],
              //   plans: [...planIds],
              //   title: v1[0],
              //   label: v1[0],
              //   type: modifierCore.find((v) => v.title == "Deductible")._id,
              //   assignmentType: "PER_PLAN",
              //   includedBenefits: [],
              //   isOptional: false,
              //   description: "",
              //   addonCost: {},
              //   premiumMod: "",
              //   conditions: [],
              //   hasOptions: true,
              //   options: copayArr,
              // };
              newArr.push({ ...str });
            });
          }
          let name =
            key == "paymentFrequency"
              ? "frequency"
              : key == "network"
              ? "Networks"
              : false;
          // console.log(GlobalData[name]);
          if (!name) return false;
          // if (!(GlobalData[name].length > 1)) return;
          GlobalData[name].forEach((v1, index) => {
            // paymentFrequency -----------------------------------
            if (key == "paymentFrequency") {
              if (index == 0) {
                let str = {
                  _id: Ids.modifiers[key][v1],
                  plans: [...planIds],
                  title: "Payment Frequency Modifier",
                  label: "Additional Surcharges",
                  type: modifierCore.find((v) => v.title == "Payment frequency")
                    ._id,
                  assignmentType: "PER_PLAN",
                  includedBenefits: [
                    // benefitCore.find((v) => check(v.title, key))._id,
                  ],
                  isOptional: false,
                  description: "",
                  addonCost: {},
                  premiumMod: "",
                  conditions: [],
                  hasOptions: true,
                  // options: pricingArr,
                };
                newArr.push({ ...str });
                return;
              }

              let pricingArr = [];

              for (const key1 in Ids.pricingTables) {
                // console.log(key);
                let plan = Ids.pricingTables[key1];
                for (let v in plan) {
                  let pricing = rateSheet.filter(
                    (n) =>
                      n.planName == key1 &&
                      n.coverage == v &&
                      n.copay == GlobalData.coPays[0][0] &&
                      n.frequency == GlobalData.frequency[index]
                  );
                  // createFile("console", "table", pricing);
                  let table = pricing.map((t) => {
                    let str = {
                      conditions: [
                        {
                          type: "CUSTOMER_MIN_AGE",
                          value: t.ageStart,
                        },
                        {
                          type: "CUSTOMER_MAX_AGE",
                          value: t.ageEnd,
                        },
                        {
                          type: "CUSTOMER_GENDER",
                          value: t.gender,
                        },
                        {
                          type: "CUSTOMER_COVERAGE",
                          value: v,
                        },
                        {
                          type: "CUSTOMER_NETWORK",
                          value: t.network,
                        },
                      ],
                      price: [
                        {
                          value: (t.rates / conversion).toFixed(2),
                          currency: "USD",
                        },
                      ],
                    };
                    return { ...str };
                  });
                  let clone = {
                    id: key1 + " " + v,
                    label: key1 + " " + v,
                    premiumMod: {
                      type: "conditional-override",
                      conditionalPrices: table,
                    },
                  };
                  // console.log(clone);
                  pricingArr.push({ ...clone });
                }
              }

              let str = {
                _id: Ids.modifiers[key][v1],
                plans: [...planIds],
                title: v1 + " " + name,
                label: v1 + " " + name,
                type: modifierCore.find((v) => v.title == "Payment frequency")
                  ._id,
                assignmentType: "PER_PLAN",
                includedBenefits: [
                  // benefitCore.find((v) => check(v.title, key))._id,
                ],
                isOptional: false,
                description: "",
                addonCost: {},
                premiumMod: "",
                conditions: [],
                hasOptions: true,
                options: pricingArr,
              };
              newArr.push({ ...str });
            }

            if (key == "network") {
              let str = {
                _id: Ids.modifiers[key][v1],
                plans: [
                  ...planIds.filter((id) => {
                    let planId;
                    for (let key in Ids.plans) {
                      if (Ids.plans[key] == id) planId = key;
                    }
                    return DATA.find(
                      (p) =>
                        planId == p["PlanName"] && p["Network Details"] == v1
                    );
                  }),
                ],
                title: v1,
                label: v1,
                type: modifierCore.find((v) => v.title == "Network")._id,
                assignmentType: "PER_PLAN",
                includedBenefits: [],
                isOptional: false,
                description: "",
                addonCost: {},
                premiumMod: "",
                conditions: [],
                hasOptions: false,
              };
              newArr.push({ ...str });
            }
          });
        });
        // custom code here ----------------------------------
        // extra ---------------------------------------------
        if (DATA[0].extra) {
          let extraArr = [];
          DATA.forEach((v) => {
            v.extra && extraArr.push(v.extra);
          });

          extraArr.forEach((v1) => {
            // set code here for extra benefits
            if (v1 === "Healthy Connect Module") {
              let copayArr = [];
              GlobalData["coPays"].forEach((copays, index) => {
                let [copay] = copays;
                let count = 1;
                GlobalData["pricingTables"].forEach((plan) => {
                  let [planName, coverage] = plan;
                  coverage.forEach((cc) => {
                    GlobalData["frequency"].forEach((fr) => {
                      let pricing = rateSheet.filter((n) => {
                        if (!n.healthy || n.healthy == 0) return false;
                        return (
                          n.planName == planName &&
                          n.coverage == cc &&
                          n.copay == copay &&
                          n.frequency == fr
                        );
                      });
                      let table = pricing.map((t) => {
                        let str = {
                          conditions: [
                            {
                              type: "CUSTOMER_MIN_AGE",
                              value: t.ageStart,
                            },
                            {
                              type: "CUSTOMER_MAX_AGE",
                              value: t.ageEnd,
                            },
                            {
                              type: "CUSTOMER_GENDER",
                              value: t.gender,
                            },
                            {
                              type: "CUSTOMER_COVERAGE",
                              value: cc,
                            },
                            {
                              type: "CUSTOMER_NETWORK",
                              value: t.network,
                            },
                          ],
                          price: [
                            {
                              value: (t.healthy / conversion).toFixed(2),
                              currency: "USD",
                            },
                          ],
                        };
                        return { ...str };
                      });
                      let clone = {
                        id: "option-" + count,
                        label: "option-" + count,
                        premiumMod: {
                          type: "conditional-override",
                          conditionalPrices: table,
                        },
                        conditions: [
                          {
                            type: "PLAN_EQUALS_TO",
                            value: [Ids.plans[planName]],
                          },
                          {
                            type: "DEDUCTIBLE_EQUALS_TO",
                            value: [Ids.modifiers["deductible"][copay]],
                          },
                          {
                            type: "FREQUENCY_EQUALS_TO",
                            value: [Ids.modifiers["paymentFrequency"][fr]],
                          },
                        ],
                      };
                      copayArr.push({ ...clone });
                      count++;
                    });
                  });
                });
              });
              let str = {
                _id: Ids.modifiers["benefits"][v1],
                plans: [...planIds],
                title: v1,
                label: v1,
                type: "",
                assignmentType: "PER_CUSTOMER",
                includedBenefits: [],
                isOptional: false,
                description: "",
                addonCost: {},
                premiumMod: "",
                conditions: [],
                hasOptions: true,
                options: copayArr,
              };
              newArr.push({ ...str });
            }
            if (v1 === "Mother & Baby Module") {
              let copayArr = [];
              GlobalData["coPays"].forEach((copays, index) => {
                let [copay] = copays;
                let count = 1;
                GlobalData["pricingTables"].forEach((plan) => {
                  let [planName, coverage] = plan;
                  coverage.forEach((cc) => {
                    GlobalData["frequency"].forEach((fr) => {
                      let pricing = rateSheet.filter((n) => {
                        if (!n.mother || n.mother == 0) return false;
                        return (
                          n.planName == planName &&
                          n.coverage == cc &&
                          n.copay == copay &&
                          n.frequency == fr
                        );
                      });
                      let table = pricing.map((t) => {
                        let str = {
                          conditions: [
                            {
                              type: "CUSTOMER_MIN_AGE",
                              value: t.ageStart,
                            },
                            {
                              type: "CUSTOMER_MAX_AGE",
                              value: t.ageEnd,
                            },
                            {
                              type: "CUSTOMER_GENDER",
                              value: t.gender,
                            },
                            {
                              type: "CUSTOMER_COVERAGE",
                              value: cc,
                            },
                            {
                              type: "CUSTOMER_NETWORK",
                              value: t.network,
                            },
                          ],
                          price: [
                            {
                              value: (t.mother / conversion).toFixed(2),
                              currency: "USD",
                            },
                          ],
                        };
                        return { ...str };
                      });
                      let clone = {
                        id: "option-" + count,
                        label: "option-" + count,
                        premiumMod: {
                          type: "conditional-override",
                          conditionalPrices: table,
                        },
                        conditions: [
                          {
                            type: "PLAN_EQUALS_TO",
                            value: [Ids.plans[planName]],
                          },
                          {
                            type: "DEDUCTIBLE_EQUALS_TO",
                            value: [Ids.modifiers["deductible"][copay]],
                          },
                          {
                            type: "FREQUENCY_EQUALS_TO",
                            value: [Ids.modifiers["paymentFrequency"][fr]],
                          },
                        ],
                      };
                      copayArr.push({ ...clone });
                      count++;
                    });
                  });
                });
              });

              let index = newArr.findIndex(
                (v) =>
                  v.title == "Maternity (Consultations, Scans and Delivery)"
              );
              newArr[index].hasOptions = true;
              newArr[index].options = copayArr;
            }
          });
        }

        createFile("modifiers", "index", newArr);
      }

      // ---------------------------------------

      coverage();
      plan();
      table();
      modifiers();
    } catch (error) {
      console.log({ err: error.message, stack: error.stack });
    }
  }
  main();
}
if (process.argv[2] == "-global") {
  console.log(Ids);
  console.log("-------------------------");
  console.log(GlobalData);
}

function check(v1, v2) {
  let arr = [
    ["Optical", "Optical Benefits"],
    ["Wellness", "Wellness & Health Screening"],
    ["Claims Handling", "Claims Handling"],
    ["Diagnostics & Test", "Diagnostics & Test"],
    ["Oncology", "Oncology"],
    ["Organ Transplant", "Organ Transplant"],
    ["Out-patient benefits", "Out-patient benefits"],
    ["Out-patient Specialists", "Out-patient Specialists"],
    ["Out-patient Medicines", "Out-patient Medicines"],
    ["Vaccination", "Vaccination"],
    ["Physiotherapy", "Physiotherapy"],
    ["Maternity Waiting Period", "Maternity Waiting Period"],
    ["Complications of Pregnancy", "Complications of Pregnancy"],
    ["New Born Cover", "New Born Cover"],
    ["Dental", "Dental"],
    ["Dental Waiting Period", "Dental Waiting Period"],
    ["Alternative Medicines", "Alternative Medicines"],
    ["Emergency Evacuation", "Emergency Evacuation"],
    ["Virtual / Tele Doctor", "Virtual / Tele Doctor"],
    ["Other Services", "Other Services"],
    ["Member Web Portal", "Member Web Portal"],
    ["Mobile Application", "Mobile Application"],
    ["Accommodation Type", "Accommodation Type"],
    ["Surgeries & Anesthesia", "Surgeries & Anesthesia"],
    ["Pre-existing & Chronic Conditions (PEC)", "Chronic Condition Cover"],
    ["Routine Delivery", "Maternity (Consultations, Scans and Delivery)"],
    ["Out-patient General Practioner", "Out-patient Consultations"],
    [
      "In-patient (Hospitalization & Surgery)",
      "In-patient (Hospitalization & Surgery)",
    ],
    ["Pre-existing Condition Cover", "Pre-existing Condition Cover"],
    ["Mental Health Benefit", "Mental Health Benefit"],
    ["Scans & Diagnostic Tests", "Scans & Diagnostic Tests"],
  ];

  let res = false;

  arr.forEach((v) => {
    let [b1, b2] = v;
    if (b1 == v1 && b2 == v2) res = true;
  });

  return res;
}
// modifiers();
// console.log(pricingArr);

// ------------------------------------------------------------------------------------------------------

// const age = ageRange(rateSheet);

// console.log(age);

// console.log(GlobalData);
// console.log("-------------------------------------------");
// console.log(Ids);

// result.forEach((v, index) => {
//   result[index].id = new ObjectId();
// });

// function generateTable(prices, gender, residency, bool) {
//   let clone = [...structure];
//   clone = clone.map((v, i) => {
//     v.price[0].value = prices[i];
//     if (gender) v.gender = gender;
//     if (residency) v.residency = residency;
//     return v;
//   });
//   console.log(clone);
// };

// console.log(result);
