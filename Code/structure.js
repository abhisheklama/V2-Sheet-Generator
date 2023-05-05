class Structures {
  pricing_table = {
    fromAge: "",
    toAge: "",
    gender: "",
    residency: "",
    price: [
      {
        value: "",
        currency: "",
      },
    ],
  };

  //Pricing plan Structure -
  pricing_plan = {
    _id: "",
    plan: "",
    annualLimit: [{ currency: "", value: "" }],
    startDate: "",
    endDate: "",
    includedResidence: "",
    excludedResidence: "",
    coverage: [],
    baseAnnualPremium: "",
  };

  plan_structure = {
    _id: "",
    tmpPath: "",
    provider: "",
    title: "",
    notes: "",
    benefitCategories: [],
    pricingTables: [],
    modifiers: [],
  };

  benefitCategories_structure = {
    categoryTitle: "",
    includedBenefits: [],
    userType: {
      userType: "",
      benefitTypes: [],
    },
  };

  coverage_structure = {
    _id: "",
    title: "",
    internalTitle: "",
    includedCountries: [],
    excludedCountries: [],
    notes: "",
  };

  modifiers_structure = {
    _id: "",
    plans: [],
    title: "",
    label: "",
    type: "",
    assignmentType: "",
    includedBenefits: [],
    isOptional: "",
    description: "",
    addonCost: {},
    premiumMod: "",
    conditions: [],
    hasOptions: false,
  };

  options_structure = {
    id: "",
    label: "",
    description: "",
    conditions: [
      {
        type: "",
        value: [],
      },
    ],
  };
}

module.exports = new Structures();
