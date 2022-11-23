import knex from "knex";
import config from "./config.js";
let dbName;
if (config.env === "test") {
  dbName = config.db.testDatabase;
} else {
  dbName = config.db.database;
}

const db = knex({
  client: config.db.driver,
  connection: {
    host: config.db.host,
    port: config.db.port,
    user: config.db.username,
    password: config.db.password,
    database: dbName,
  },
  pool: { min: 0, max: 10 },
});

export default db;
