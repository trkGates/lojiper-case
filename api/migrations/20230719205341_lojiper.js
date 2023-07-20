/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("username", 128).notNullable().unique();
    table.string("password", 128).notNullable();
    table.string("email", 128).notNullable().unique(); 
    table.string("firstName", 128).notNullable();
    table.string("lastName ", 128).notNullable();
    table.string("gender", 128).notNullable();
    table.string("birthday", 128).notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
