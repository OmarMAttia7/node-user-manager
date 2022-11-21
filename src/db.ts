import knex from "knex";
import config from "./config.js";

const db = knex({
  client: config.db.driver,
  connection: {
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
    database: config.db.database,
  },
  pool: {min: 0, max: 10}
});

export default db;