import { Knex } from "knex";
import createUser, { userInfo } from "./model/createUser.js";
import deleteUser from "./model/deleteUser.js";
import getUser, { SelectResult } from "./model/getUser.js";
import updateUser, { UpdateUserInfo } from "./model/updateUser.js";
import { hashPassword } from "./services/password.js";
import DBUser from "./types/DBUser.js";
import NewUserInfo from "./types/NewUserInfo.js";
import UserSchema, { User } from "./types/User.js";

class UserManager {
  #db: Knex;
  constructor(db: Knex) {
    this.#db = db;
  }

  async createUser(userInfo: NewUserInfo): Promise<DBUser> {
    UserSchema.parse(userInfo);
    const newUserInfo: userInfo = Object.create(userInfo);
    newUserInfo.password_digest = await hashPassword(userInfo.password);
    return await createUser(this.#db, newUserInfo);
  }

  async deleteUser(id: number): Promise<DBUser> {
    return await deleteUser(this.#db, id);
  }

  async getUser(searchFilter: number | string): Promise<SelectResult> {
    return await getUser(this.#db, searchFilter);
  }

  async updateUser(id: number, userInfo: UpdateUserInfo): Promise<DBUser> {
    return await updateUser(this.#db, id, userInfo);
  }
}

export default UserManager;
