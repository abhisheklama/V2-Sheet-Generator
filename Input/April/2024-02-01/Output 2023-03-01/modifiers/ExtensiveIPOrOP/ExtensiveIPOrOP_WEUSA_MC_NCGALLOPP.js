const Enum = require("../../../enum.js");
let table = [
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2854, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3151, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3151, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3251, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3251, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3351, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3351, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3351, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2716, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3571, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2801, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3670, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2890, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3770, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2981, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3874, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3075, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3981, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4104, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3283, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4231, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3398, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4362, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3517, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4498, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3640, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4640, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3768, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4805, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3918, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4979, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4075, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5159, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4238, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5346, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4407, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5614, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4583, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5816, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4766, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6027, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4957, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6246, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5155, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6474, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5361, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6770, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5629, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6682, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5911, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7008, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6206, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7350, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6516, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7710, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6842, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8089, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7185, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8337, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7545, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8754, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7922, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9192, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8318, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9651, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8734, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10134, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9171, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10642, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9630, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10111, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11730, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10616, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12317, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11147, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12934, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11705, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13645, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12348, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14395, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13027, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15187, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13744, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 16022, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14500, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 16903, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 15297, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 17832, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 16138, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 18813, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17025, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 19848, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17962, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 20940, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 18950, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 22091, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 19992, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 23637, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 21391, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 25293, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 22889, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 27062, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 24491, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 28958, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 26206, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 30985, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 28040, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 33152, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 30002, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 35473, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 32102, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 37956, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 34349, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 40612, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 36753, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 43455, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 39326, currency: Enum.currency.USD }],
  },
];
module.exports = table;
