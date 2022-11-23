import dbm from "db-migrate";
import process from "process";

const dbMigrate = dbm.getInstance(true);

async function create() {
  return await dbMigrate.createDatabase(process.env.DB_TEST_DBNAME);
}

async function drop() {
  return await dbMigrate.dropDatabase(process.env.DB_TEST_DBNAME);
}

export default { create, drop };
