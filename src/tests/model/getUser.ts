import UserManager from "../../index.js";
import { SelectResult } from "../../userManager/model/getUser.js";
import DBUser from "../../userManager/types/DBUser.js";
import NewUserInfo from "../../userManager/types/NewUserInfo.js";

export default function getUserSuite(userManager: UserManager) {
  describe("getUser()", () => {
    const testUserInfo: NewUserInfo = {
      email: "derpfish@example.com",
      first_name: "Derpy",
      last_name: "Fish",
      password: "thederpiestofishes888",
      username: "derpfish123",
    };

    function matchUserInfo(result: SelectResult) {
      let user: DBUser;
      if (result.exists) {
        user = result.user;
        expect(user.id).toEqual(1);
        expect(user.username).toEqual(testUserInfo.username);
        expect(user.email).toEqual(testUserInfo.email);
      }
    }

    beforeEach(async () => {
      await userManager.createUser(testUserInfo);
    });

    it("returns a user by id", async () => {
      const result = await userManager.getUser(1);
      expect(result.exists).toEqual(true);
      matchUserInfo(result);
    });

    it("returns a user by username", async () => {
      const result = await userManager.getUser(testUserInfo.username);
      expect(result.exists).toEqual(true);
      matchUserInfo(result);
    });

    it("returns a user by email", async () => {
      const result = await userManager.getUser(testUserInfo.email);
      expect(result.exists).toEqual(true);
      matchUserInfo(result);
    });
  });
}
