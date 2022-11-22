import { Knex } from "knex";

export default async function addUser(db: Knex) {
  db("users").insert()
};