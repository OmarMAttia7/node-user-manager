import { Knex } from "knex";
import DBUser from "../types/DBUser.js";
import { string as zString } from "zod";
import { User } from "../types/User.js";
import returnColumns from "./returnColumns.js";

type SelectResult =
  | {
      exists: true;
      user: User;
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
  const selectProperties = returnColumns;
  if (typeof filter === "number") {
    queryResult = await query.where("id", filter).select(selectProperties);
  } else {
    if (zString().email().safeParse(filter).success) {
      queryResult = await query.where("email", filter).select(selectProperties);
      
    } else {
      queryResult = await query
        .where("username", filter)
        .select(selectProperties);
    }
  }

  const user = queryResult[0];
  if (queryResult[0] !== undefined) {
    return {
      exists: true,
      user: {
        id: user.id,
        username: user.username,
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
      },
    };
  }

  return {
    exists: false,
  };
}

export type { SelectResult };
