import { Knex } from "knex";
import DBUser from "../types/DBUser.js";

type UpdateUserInfo = {
  first_name?: string;
  username?: string;
  last_name?: string;
  email?: string;
  password?: string;
};

export default async function updateUser(
  db: Knex,
  id: number,
  userInfo: UpdateUserInfo
): Promise<DBUser> {
  const queryBuilder = db<DBUser>("users");
  const [queryResult] = await queryBuilder
    .where("id", id)
    .update(userInfo)
    .returning("*");

  return queryResult;
}

export type { UpdateUserInfo };
