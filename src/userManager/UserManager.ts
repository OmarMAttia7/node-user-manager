import { Knex } from "knex";

class UserManager {
  #db: Knex
  constructor(db: Knex) {
    this.#db = db;
  }
}

export default UserManager;