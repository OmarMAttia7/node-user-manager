import knex, { Knex } from "knex";

class userManager {
  #db: Knex
  constructor(dbConfig: Knex.Config) {
    this.#db = knex(dbConfig);
  }
}

export default userManager;