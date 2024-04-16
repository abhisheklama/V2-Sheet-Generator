const april = require("../core-index.js");
const Enum = require("../../enum.js");

let provider = [
  {
    _id: april.providers,
    title: "April International (Salama)",
    logo: "",
    colors: {},
    ageCalculationMethod: Enum.ageCalculationMethod.standard,
    exchangeRates: [
      {
        from: Enum.currency.AED,
        to: Enum.currency.USD,
        rate: 0.27214587, // For april, benefits converion rate is also same as rates converion
        type: Enum.conversionRateType.benefit,
      },
      {
        from: Enum.currency.AED,
        to: Enum.currency.USD,
        rate: 0.27214587,
        type: Enum.conversionRateType.premium,
      },
      {
        from: Enum.currency.USD,
        to: Enum.currency.AED,
        rate: 3.6745, // For april, benefits converion rate is also same as rates converion
        type: Enum.conversionRateType.benefit,
      },
      {
        from: Enum.currency.USD,
        to: Enum.currency.AED,
        rate: 3.6745,
        type: Enum.conversionRateType.premium,
      },
    ],
  },
];
module.exports = provider;
