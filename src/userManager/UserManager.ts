import { Knex } from "knex";
import createUser, { userInfo } from "./model/createUser.js";
import { User } from "./types/User.js";

class UserManager {
  #db: Knex;
  constructor(db: Knex) {
    this.#db = db;
  }

  async createUser(userInfo: userInfo): Promise<User> {
    return await createUser(this.#db, userInfo);
  }

  deleteUser(arg0: number): Promise<User> {
    throw new Error("Method not implemented.");
  }
}

export default UserManager;
