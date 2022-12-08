import { Knex } from "knex";
import DBUser from "../types/DBUser.js";
import { User } from "../types/User.js";
import returnColumns from "./returnColumns.js";

export default async function deleteUser(db: Knex, id: number): Promise<User> {
  const queryBuilder = db<DBUser>("users");

  const [queryResult] = await queryBuilder
    .where("id", id)
    .del()
    .returning(returnColumns);

  return {
    id: queryResult.id,
    username: queryResult.username,
    firstName: queryResult.first_name,
    lastName: queryResult.last_name,
    email: queryResult.email,
  };
}
