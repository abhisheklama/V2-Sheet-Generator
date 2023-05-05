const { ObjectId } = require("mongodb");
const generateCodeIndex = (data, benefits, DATA) => {
  try {
    let struc = {
      providers: new ObjectId(),
      plans: "",
      pricingTables: "",
      coverages: "",
      modifiers: "",
    };

    for (const key in struc) {
      let value = {};
      if (key === "providers" || key === "core") continue;
      data[key]?.forEach((v, i) => {
        if (key == "coverages") {
          value[v.coverageName] = new ObjectId();
          return;
        }
        if (key == "pricingTables") {
          let temp = {};
          v[1].forEach((cc) => {
            temp[cc] = new ObjectId();
          });
          value[v[0]] = temp;
          return;
        }

        value[v] = new ObjectId();
      });
      if (key == "modifiers") {
        let obj = {};
        data["Modifiers"].forEach((v) => {
          if (v == "deductible") {
            obj[v] = new ObjectId();
          }
          if (v == "benefits") {
            let b = {};
            benefits.forEach((k) => {
              if (k.userType == "type") return;
              b[k.benefits] = new ObjectId();
            });
            obj[v] = b;
            return;
          }
          if (v == "discount") {
            let b = {};
            DATA.forEach((v) => {
              if (v.discounts) b[v.discounts] = new ObjectId();
            });
            obj[v] = b;
            return;
          }
          let b = {};
          let name =
            v == "paymentFrequency"
              ? "frequency"
              : v == "network"
              ? "Networks"
              : false;
          if (!name) return;
          data[name].forEach((v1) => {
            if (Array.isArray(v1)) v1 = v1[0];
            b[v1] = new ObjectId();
          });
          obj[v] = b;
        });
        value = obj;
      }
      struc[key] = value;
    }

    let check = DATA[0].extra == "Healthy Connect Module";
    if (check)
      struc.modifiers.benefits["Healthy Connect Module"] = new ObjectId();

    return struc;
  } catch (error) {
    console.log({ err: error.message, stack: error.stack });
    process.exit(1);
  }
};

module.exports = generateCodeIndex;
