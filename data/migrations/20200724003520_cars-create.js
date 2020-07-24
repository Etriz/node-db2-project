exports.up = function (knex) {
  knex.schema.createTable("cars", (tbl) => {
    tbl.integer("VIN").primary().notNullable().unique();
    tbl.string("make").notNullable();
    tbl.string("model").notNullable();
    tbl.integer("mileage").notNullable();
    tbl.string("transmission");
    tbl.string("title");
  });
};

exports.down = function (knex) {
  knex.schema.dropTableIfExists("cars");
};
