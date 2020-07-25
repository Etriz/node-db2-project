exports.up = function (knex, Promise) {
  return knex.schema.createTable("cars", (tbl) => {
    tbl.string("VIN").primary().notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission");
    tbl.string("title");
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("cars");
};
