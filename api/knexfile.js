module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./api/dev.sqlite3",
    },
    migrations: {
      directory: "./migrations", // knex migrate:make lojiper       npx knex migrate:latest
    },
    seeds: {
      directory: "./seeds", // knex seed:make lojiper             npx knex seed:run
    },
    useNullAsDefault: true,
  },
};
