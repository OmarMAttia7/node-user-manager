import { Knex } from "knex";
import DBUser from "../types/DBUser.js";

export default async function deleteUser(
  db: Knex,
  id: number
): Promise<DBUser> {
  const queryBuilder = db<DBUser>("users");

  const [queryResult] = await queryBuilder.where("id", id).del().returning("*");

  return queryResult;
}
