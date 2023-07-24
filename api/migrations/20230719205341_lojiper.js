/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.string("username", 128).notNullable().unique();
      table.string("password", 128).notNullable();
      table.string("email", 128).notNullable().unique();
      table.string("firstName", 128).notNullable();
      table.string("lastName ", 128).notNullable();
      table.string("gender", 128).notNullable();
      table.string("birthday", 128).notNullable();
    })
    .createTable("seferler", (table) => {
      table.increments("id");
      table.string("seferSirketResim", 300).notNullable();
      table.string("seferSirketi", 128).notNullable();
      table.string("seferTarihi", 128).notNullable();
      table.string("seferSuresi", 128).notNullable();
      table.string("seferSaati", 128).notNullable();
      table.string("seferUcreti", 128).notNullable();
      table.string("seferKapasitesi", 128).notNullable();
      table.string("seferKoltukDüzeni", 128).notNullable();
      table.string("seferKalkisYeri", 128).notNullable();
      table.string("seferVarisYeri", 128).notNullable();
      table.string("seferAciklama", 128).notNullable();
    })
    .createTable("koltuklar", (table) => {
      table.increments("id");
      table.string("seferId", 20).notNullable();
      table.string("koltukNo", 20).notNullable();
      table.string("UserId", 20).notNullable();
      table.string("koltukFiyati", 20).notNullable();
      table.string("cinsiyet", 20).notNullable();
    });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
