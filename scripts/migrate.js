import knex from "knex";
import dotenv from "dotenv";

dotenv.config();
const env = process.env;

const db = knex({
  client: env.DB_DRIVER,
  connection: {
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    database: env.DB_DBNAME,
  },
});

db.migrate
  .latest()
  .then(() => {
    console.log("Ran all migrations successfully.");
    db.destroy();
  })
  .catch((e) => {
    console.log("Failed to run migrations.");
    console.log(e);
  });
