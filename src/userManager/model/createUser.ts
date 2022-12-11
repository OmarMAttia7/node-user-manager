import { Knex } from "knex";
import DBUser from "../types/DBUser.js";

export type userInfo = {
  username: string;
  first_name: string;
  last_name: string;
  password_digest: string;
  email: string;
};

export default async function createUser(
  db: Knex,
  userInfo: userInfo
): Promise<DBUser> {

  const [queryResult] = await db<DBUser>("users")
    .insert(userInfo)
    .returning("*");

  return queryResult;
}
