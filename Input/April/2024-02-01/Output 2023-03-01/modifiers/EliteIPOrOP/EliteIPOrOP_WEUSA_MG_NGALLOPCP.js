const Enum = require("../../../enum.js");
let table = [
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2354.84, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2355, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2557, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2557, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2657, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2657, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2757, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2757, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2757, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 2957, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2246, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3035, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2316, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3115, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2389, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3199, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2464, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3285, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2542, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3384, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2631, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3484, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2723, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3589, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2818, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3699, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 2916, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3811, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3018, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 3944, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3138, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4081, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3263, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4226, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3393, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4374, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3528, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4604, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3669, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4766, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3816, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 4936, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 3969, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5111, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4128, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5293, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4293, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5531, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4508, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5380, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4733, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5642, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4970, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5916, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5218, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6204, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5479, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6507, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5753, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6676, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6041, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7009, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6343, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7359, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6660, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7727, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6993, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8114, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7343, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8520, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7710, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8945, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8095, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9392, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8500, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9862, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8925, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10356, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9372, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10925, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9887, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11526, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10431, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12160, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11005, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12829, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11610, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13535, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12249, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14280, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12923, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15065, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13633, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15893, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14383, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 16768, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 15174, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 17690, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 16009, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 18928, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17129, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 20252, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 18328, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 21670, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 19611, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 23187, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 20983, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 24809, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 22452, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 26546, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 24024, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 28405, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 25706, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 30393, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 27505, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 32521, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 29430, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 34796, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 31490, currency: Enum.currency.USD }],
  },
];
module.exports = table;
