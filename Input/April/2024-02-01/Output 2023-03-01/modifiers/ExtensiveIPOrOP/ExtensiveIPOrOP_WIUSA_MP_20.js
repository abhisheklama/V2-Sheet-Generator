const Enum = require("../../../enum.js");
let table = [
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6049, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6333, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6333, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6433, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6433, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6533, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6533, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6533, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5595, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6853, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5771, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7053, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5953, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7261, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6141, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7475, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6334, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7695, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6534, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7948, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6762, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8210, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6999, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8480, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7244, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8760, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7497, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9050, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7759, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9393, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8070, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9750, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8392, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10119, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8727, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10505, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9076, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10981, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11399, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9818, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11833, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10211, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12285, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10620, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12755, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11045, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13364, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11597, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13603, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12176, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14277, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12785, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14983, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13424, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15726, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14096, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 16505, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14802, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 17174, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 15541, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 18033, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 16319, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 18935, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17135, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 19880, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17992, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 20875, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 18892, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 21919, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 19836, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 23016, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 20829, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 24168, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 21871, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 25376, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 22965, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 26646, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 24114, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 28111, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 25440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 29658, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 26840, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 31289, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 28316, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 33010, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 29874, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 34827, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 31517, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 36742, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 33251, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 38763, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 35080, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 40895, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 37009, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 43144, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 39045, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 45517, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 41192, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 48704, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 44076, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 52113, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 47161, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 55760, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 50462, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 59664, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 53995, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 63842, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 57775, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 68311, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 61820, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 73093, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 66147, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 78210, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 70778, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 83684, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 75733, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 89543, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 81034, currency: Enum.currency.USD }],
  },
];
module.exports = table;
