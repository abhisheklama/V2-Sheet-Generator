const Enum = require("../../../enum.js");
let table = [
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 0 },
      { type: Enum.customer.max_age, value: 0 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 1 },
      { type: Enum.customer.max_age, value: 1 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 2 },
      { type: Enum.customer.max_age, value: 2 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 3 },
      { type: Enum.customer.max_age, value: 3 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 4 },
      { type: Enum.customer.max_age, value: 4 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 5 },
      { type: Enum.customer.max_age, value: 5 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 6 },
      { type: Enum.customer.max_age, value: 6 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 7 },
      { type: Enum.customer.max_age, value: 7 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 8 },
      { type: Enum.customer.max_age, value: 8 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 9 },
      { type: Enum.customer.max_age, value: 9 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 10 },
      { type: Enum.customer.max_age, value: 10 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 11 },
      { type: Enum.customer.max_age, value: 11 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 12 },
      { type: Enum.customer.max_age, value: 12 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 13 },
      { type: Enum.customer.max_age, value: 13 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 14 },
      { type: Enum.customer.max_age, value: 14 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 15 },
      { type: Enum.customer.max_age, value: 15 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 16 },
      { type: Enum.customer.max_age, value: 16 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 17 },
      { type: Enum.customer.max_age, value: 17 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 18 },
      { type: Enum.customer.max_age, value: 18 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5172, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5437, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 19 },
      { type: Enum.customer.max_age, value: 19 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5437, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 20 },
      { type: Enum.customer.max_age, value: 20 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5537, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 21 },
      { type: Enum.customer.max_age, value: 21 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5537, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 22 },
      { type: Enum.customer.max_age, value: 22 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5637, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 23 },
      { type: Enum.customer.max_age, value: 23 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5637, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 24 },
      { type: Enum.customer.max_age, value: 24 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5637, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 25 },
      { type: Enum.customer.max_age, value: 25 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4784, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 5930, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 26 },
      { type: Enum.customer.max_age, value: 26 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 4935, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6100, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 27 },
      { type: Enum.customer.max_age, value: 27 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5090, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6278, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 28 },
      { type: Enum.customer.max_age, value: 28 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5251, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6462, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 29 },
      { type: Enum.customer.max_age, value: 29 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5417, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6650, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 30 },
      { type: Enum.customer.max_age, value: 30 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5587, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 6866, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 31 },
      { type: Enum.customer.max_age, value: 31 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5783, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7090, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 32 },
      { type: Enum.customer.max_age, value: 32 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 5986, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7321, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 33 },
      { type: Enum.customer.max_age, value: 33 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6195, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7561, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 34 },
      { type: Enum.customer.max_age, value: 34 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6412, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 7809, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 35 },
      { type: Enum.customer.max_age, value: 35 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6637, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8103, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 36 },
      { type: Enum.customer.max_age, value: 36 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 6902, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8408, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 37 },
      { type: Enum.customer.max_age, value: 37 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7178, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 8725, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 38 },
      { type: Enum.customer.max_age, value: 38 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7465, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9054, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 39 },
      { type: Enum.customer.max_age, value: 39 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 7763, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9472, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 40 },
      { type: Enum.customer.max_age, value: 40 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8075, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 9830, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 41 },
      { type: Enum.customer.max_age, value: 41 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8398, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10201, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 42 },
      { type: Enum.customer.max_age, value: 42 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 8734, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10588, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 43 },
      { type: Enum.customer.max_age, value: 43 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9084, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 10989, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 44 },
      { type: Enum.customer.max_age, value: 44 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9447, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11510, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 45 },
      { type: Enum.customer.max_age, value: 45 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 9919, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 11657, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 46 },
      { type: Enum.customer.max_age, value: 46 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10414, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12234, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 47 },
      { type: Enum.customer.max_age, value: 47 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 10935, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 12838, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 48 },
      { type: Enum.customer.max_age, value: 48 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 11482, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 13473, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 49 },
      { type: Enum.customer.max_age, value: 49 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12057, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14139, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 50 },
      { type: Enum.customer.max_age, value: 50 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 12660, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 14690, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 51 },
      { type: Enum.customer.max_age, value: 51 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13293, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 15424, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 52 },
      { type: Enum.customer.max_age, value: 52 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 13959, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 16196, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 53 },
      { type: Enum.customer.max_age, value: 53 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 14657, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 17006, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 54 },
      { type: Enum.customer.max_age, value: 54 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 15390, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 17857, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 55 },
      { type: Enum.customer.max_age, value: 55 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 16160, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 18751, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 56 },
      { type: Enum.customer.max_age, value: 56 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 16969, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 19689, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 57 },
      { type: Enum.customer.max_age, value: 57 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 17818, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 20675, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 58 },
      { type: Enum.customer.max_age, value: 58 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 18710, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 21709, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 59 },
      { type: Enum.customer.max_age, value: 59 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 19646, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 22795, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 60 },
      { type: Enum.customer.max_age, value: 60 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 20628, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 24048, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 61 },
      { type: Enum.customer.max_age, value: 61 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 21764, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 25372, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 62 },
      { type: Enum.customer.max_age, value: 62 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 22961, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 26767, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 63 },
      { type: Enum.customer.max_age, value: 63 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 24224, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 28239, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 64 },
      { type: Enum.customer.max_age, value: 64 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 25556, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 29793, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 65 },
      { type: Enum.customer.max_age, value: 65 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 26962, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 31433, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 66 },
      { type: Enum.customer.max_age, value: 66 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 28446, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 33161, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 67 },
      { type: Enum.customer.max_age, value: 67 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 30010, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 34985, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 68 },
      { type: Enum.customer.max_age, value: 68 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 31661, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 36909, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 69 },
      { type: Enum.customer.max_age, value: 69 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 33402, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 38939, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 70 },
      { type: Enum.customer.max_age, value: 70 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 35239, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 41666, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 71 },
      { type: Enum.customer.max_age, value: 71 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 37706, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 44582, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 72 },
      { type: Enum.customer.max_age, value: 72 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 40345, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 47702, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 73 },
      { type: Enum.customer.max_age, value: 73 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 43170, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 51041, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 74 },
      { type: Enum.customer.max_age, value: 74 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 46191, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 54615, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 75 },
      { type: Enum.customer.max_age, value: 75 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 49425, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 58439, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 76 },
      { type: Enum.customer.max_age, value: 76 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 52886, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 62530, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 77 },
      { type: Enum.customer.max_age, value: 77 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 56588, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 66907, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 78 },
      { type: Enum.customer.max_age, value: 78 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 60549, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 71590, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 79 },
      { type: Enum.customer.max_age, value: 79 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 64787, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.female },
    ],
    price: [{ value: 76601, currency: Enum.currency.USD }],
  },
  {
    conditions: [
      { type: Enum.customer.min_age, value: 80 },
      { type: Enum.customer.max_age, value: 80 },
      { type: Enum.customer.gender, value: Enum.gender.male },
    ],
    price: [{ value: 69323, currency: Enum.currency.USD }],
  },
];
module.exports = table;
