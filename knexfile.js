import dotenv from "dotenv";
dotenv.config();
const env = process.env;
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {

  development: {
    client: env.DB_DRIVER,
    connection: {
      database: env.DB_DBNAME,
      user:     env.DB_USERNAME,
      password: env.DB_PASSWORD,
      port: env.DB_PORT,
      host: env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  },

  production: {
    client: env.DB_DRIVER,
    connection: {
      database: env.DB_TEST_DBNAME,
      user:     env.DB_USERNAME,
      password: env.DB_PASSWORD,
      port: env.DB_PORT,
      host: env.DB_HOST
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
  }

};
