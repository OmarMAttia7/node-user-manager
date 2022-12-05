import UserManager from "../../index.js";
import { User } from "../../userManager/types/User.js";

export default function getUserSuite(userManager: UserManager) {
  describe("getUser()", () => {
    const testUserInfo = {
      email: "derpfish@example.com",
      firstName: "Derpy",
      lastName: "Fish",
      password: "thederpiestofishes888",
      username: "derpfish123",
    };

    function matchUserInfo(user: User) {
      expect(user.id).toEqual(1);
      expect(user.username).toEqual(testUserInfo.username);
      expect(user.email).toEqual(testUserInfo.email);
    }

    beforeAll(async () => {
      await userManager.createUser(testUserInfo);
    });

    it("returns a user by id", async () => {
      const user = await userManager.getUser(1);
      matchUserInfo(user);
    });

    it("returns a user by username", async () => {
      const user = await userManager.getUser(testUserInfo.username);
      matchUserInfo(user);
    });

    it("returns a user by email", async () => {
      const user = await userManager.getUser(testUserInfo.email);
      matchUserInfo(user);
    });
  });
}
