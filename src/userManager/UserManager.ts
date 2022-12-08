import { Knex } from "knex";
import createUser, { userInfo } from "./model/createUser.js";
import deleteUser from "./model/deleteUser.js";
import getUser, { SelectResult } from "./model/getUser.js";
import { User } from "./types/User.js";

class UserManager {
  #db: Knex;
  constructor(db: Knex) {
    this.#db = db;
  }

  async createUser(userInfo: userInfo): Promise<User> {
    return await createUser(this.#db, userInfo);
  }

  async deleteUser(id: number): Promise<User> {
    return await deleteUser(this.#db, id);
  }

  async getUser(searchFilter: number | string): Promise<SelectResult> {
    return await getUser(this.#db, searchFilter);
  }
}

export default UserManager;
