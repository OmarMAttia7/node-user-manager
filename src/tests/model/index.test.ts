import db from "../../db.js";
import UserManager from "../../userManager/index.js";
import createUserSuite from "./createUser.js";
describe("User Manager Model:", () => {
  const userManager = new UserManager(db);

  createUserSuite(userManager);
});
