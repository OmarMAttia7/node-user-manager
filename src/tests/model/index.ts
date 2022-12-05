import db from "../../db.js";
import UserManager from "../../userManager/index.js";
import createUserSuite from "./createUser.js";
import resetUsersTable from "./resetUsersTable.js";

function modelSuite() {
  describe("User Manager Model", () => {
    const userManager = new UserManager(db);
    afterEach(async () => {
      await resetUsersTable(db);
    });
    createUserSuite(userManager);
  });
}

export default modelSuite;
