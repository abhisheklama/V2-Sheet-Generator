const Enum = require("../../../enum.js");
let table = [
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4800, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5056, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5056, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5156, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5156, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5256, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5256, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5256, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4440, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5537, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4580, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5696, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4724, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5860, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4873, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6029, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5026, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6205, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5185, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6406, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5366, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6613, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5554, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6827, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5748, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7050, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5949, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7280, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6157, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7551, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6403, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7834, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6659, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8129, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6926, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8435, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7203, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8828, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7492, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9159, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7791, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9504, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8103, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9862, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8427, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10235, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8765, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10720, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9203, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10827, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9663, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11361, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10146, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11921, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10653, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12511, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11186, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13130, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11746, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13628, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12333, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14310, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12950, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15026, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13598, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15777, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14278, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 16566, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14992, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 17394, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 15741, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 18264, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 16529, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 19178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17356, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 20138, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 18224, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 21145, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 19136, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 22309, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 20189, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 23535, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 21299, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 24830, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 22470, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 26195, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 23706, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 27636, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 25010, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 29157, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 26386, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 30761, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 27838, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 32452, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 29369, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 34238, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 30984, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 36121, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 32688, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 38649, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 34976, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 41354, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 37424, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 44249, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 40044, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 47346, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 42847, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 50660, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 45846, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 54206, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 49055, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 58000, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 52488, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 62059, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 56162, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 66404, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 60094, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 71053, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 64301, currency: Enum.currency.USD }],
  },
];
module.exports = table;
