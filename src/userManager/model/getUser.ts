import { Knex } from "knex";
import DBUser from "../types/DBUser.js";
import { string as zString } from "zod";

type SelectResult =
  | {
      exists: true;
      user: DBUser;
    }
  | {
      exists: false;
    };

export default async function getUser(
  db: Knex,
  filter: string | number
): Promise<SelectResult> {
  const query: Knex.QueryBuilder<DBUser> = db<DBUser>("users");
  let queryResult: DBUser[];
  if (typeof filter === "number") {
    queryResult = await query.where("id", filter).select();
  } else {
    if (zString().email().safeParse(filter).success) {
      queryResult = await query.where("email", filter).select();
    } else {
      queryResult = await query
        .where("username", filter)
        .select();
    }
  }

  if (queryResult[0] !== undefined) {
    return {
      exists: true,
      user: queryResult[0],
    };
  }

  return {
    exists: false,
  };
}

export type { SelectResult };
