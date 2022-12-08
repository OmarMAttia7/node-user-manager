import UserManager from "../../index.js";
import getTestUsers from "../model/utils/getTestUsers.js";

export default async function populateUsersTable(userManager: UserManager) {
  const testUsers = await getTestUsers();
  for (const user of testUsers) {
    await userManager.createUser(user);
  }
}
