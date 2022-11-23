import { Knex } from "knex";
import createUser, { userInfo } from "./model/createUser";

class UserManager {
  #db: Knex;
  constructor(db: Knex) {
    this.#db = db;
  }

  async createUser(userInfo: userInfo) {
    return await createUser(this.#db, userInfo);
  }
}

export default UserManager;
