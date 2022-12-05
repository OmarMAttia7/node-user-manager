import { Knex } from "knex";

export default async (db: Knex) => {
  await db("users").del();
};
