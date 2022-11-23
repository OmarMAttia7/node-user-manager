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
    database: env.DB_DBNAME
  }
});

const testdb = knex({
  client: env.DB_DRIVER,
  connection: {
    host: env.DB_HOST,
    user: env.DB_USERNAME,
    password: env.DB_PASSWORD,
    port: env.DB_PORT,
    database: env.DB_TEST_DBNAME
  }
});


async function create() {
  await db.raw(`DROP DATABASE IF EXISTS ${env.DB_TEST_DBNAME};`);
  await db.raw(`CREATE DATABASE ${env.DB_TEST_DBNAME};`);
  console.log(`Created Database ${env.DB_TEST_DBNAME}`);
}

async function migrate() {
  await testdb.migrate.latest();
  await testdb.destroy();
}

async function drop() {
  await db.raw(`DROP DATABASE ${env.DB_TEST_DBNAME};`);
  console.log(`Dropped Database ${env.DB_TEST_DBNAME}`);
}

export default { create, drop, migrate };
