import UserManager from "../../userManager/index.js";
import getTestUsers from "./utils/getTestUsers.js";

export default function createUserSuite(userManager: UserManager) {
  describe("createUser()", () => {
    it("adds users to the database", async () => {
      const testUsersInfo = await getTestUsers();
      let currentId = 1;
      for (const userInfo of testUsersInfo) {
        const newUser = await userManager.createUser(userInfo);
        expect(newUser.id).toEqual(currentId);
        expect(newUser.username).toEqual(userInfo.username);
        expect(newUser.firstName).toEqual(userInfo.firstName);
        expect(newUser.email).toEqual(userInfo.email);
        expect(newUser.email).toEqual(userInfo.email);
        currentId++;
      }
    });
  });
}
