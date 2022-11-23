import dotenv from "dotenv";
dotenv.config();

const envVarNames = [
  "ENV",
  "DB_HOST",
  "DB_PORT",
  "DB_USERNAME",
  "DB_PASSWORD",
  "DB_DBNAME",
  "DB_DRIVER",
];

const validateEnvVars = (envVarNames: string[]): void => {
  envVarNames.forEach((envVar) => {
    if (process.env[envVar] === undefined) {
      throw new Error("Invalid environment variables");
    }
  });
};

validateEnvVars(envVarNames);

const config = {
  env: process.env.ENV,
  db: {
    host: process.env.DB_HOST as string,
    driver: process.env.DB_DRIVER as string,
    port: Number(process.env.DB_PORT) as number,
    username: process.env.DB_USERNAME as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DBNAME as string,
  },
};

export default config;
