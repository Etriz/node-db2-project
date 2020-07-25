exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("cars")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("cars").insert([
        { VIN: "1HGBH41JXMN109186", make: "Ford", model: "Mustang", mileage: 10000 },
        { VIN: "5YJSA1DG9DFP14705", make: "Chevy", model: "Corvette", mileage: 12000 },
      ]);
    });
};
