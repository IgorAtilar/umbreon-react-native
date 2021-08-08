// Update with your config settings.

module.exports = {
  client: "pg",
  connection: {
    // database: "SEU-BANCO-DE-DADOS",
    // user: "SEU-USUARIO",
    // password: "SUA-SENHA",
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: "knex_migrations",
    directory: "./src/db/migrations",
  },
};
