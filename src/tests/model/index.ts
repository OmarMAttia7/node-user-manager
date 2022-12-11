import UserManager from "../../userManager/index.js";
import createUserSuite from "./createUser.js";
import getUserSuite from "./getUser.js";
import deleteUserSuite from "./deleteUser.js";
import resetUsersTable from "../utils/resetUsersTable.js";
import { Knex } from "knex";

function modelSuite(db: Knex) {
  describe("User Manager Model", () => {
    const userManager = new UserManager(db);

    afterEach(async () => {
      await resetUsersTable(db);
    });

    createUserSuite(userManager);
    getUserSuite(userManager);
    deleteUserSuite(userManager);
  });
}

export default modelSuite;
