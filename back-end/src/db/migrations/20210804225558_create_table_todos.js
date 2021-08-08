exports.up = function (knex) {
  return knex.schema.createTable("todos", (table) => {
    table.increments("id").primary();
    table.string("title").notNull();
    table.string("description").notNull();
    table.boolean("check").notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("todos");
};
