import { Knex } from "knex";

export default async (db: Knex) => {
  await db("users").del();
  await db.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1;");
};
