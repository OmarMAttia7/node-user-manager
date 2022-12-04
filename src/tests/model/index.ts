import db from "../../db.js";
import UserManager from "../../userManager/index.js";
import createUserSuite from "./createUser.js";

function modelSuite() {
  describe("User Manager Model:", () => {
    const userManager = new UserManager(db);

    createUserSuite(userManager);
  });
}

export default modelSuite;
