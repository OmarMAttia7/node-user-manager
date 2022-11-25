import { Knex } from "knex";
import { hashPassword } from "../services/password.js";
import { User } from "../types/User.js";

export type userInfo = {
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
};

export default async function createUser(
  db: Knex,
  userInfo: userInfo
): Promise<User> {
  const hashedPassword = await hashPassword(userInfo.password);

  const queryResult = await db("users")
    .insert({
      username: userInfo.username,
      first_name: userInfo.firstName,
      last_name: userInfo.lastName,
      email: userInfo.email,
      password: hashedPassword,
    })
    .returning(["id", "username", "first_name", "last_name", "email"]);

  const newUser = queryResult[0];
  return {
    id: newUser.id,
    username: newUser.username,
    firstName: newUser.first_name,
    lastName: newUser.last_name,
    email: newUser.email,
  };
}
