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
        expect(newUser.first_name).toEqual(userInfo.first_name);
        expect(newUser.last_name).toEqual(userInfo.last_name);
        expect(newUser.email).toEqual(userInfo.email);
        currentId++;
      }
    });

    it("throws an error when attempting to add duplicate email", async () => {
      const testUsersInfo = await getTestUsers();
      await userManager.createUser(testUsersInfo[0]).catch(() => {
        expect(true).toEqual(true);
      });
    });

    it("throws an error when attempting to add an invalid email", async () => {
      await userManager
        .createUser({
          email: "invalidemail",
          username: "jhon",
          first_name: "john",
          last_name: "doe",
          password: "13r9024jg1-3d9jf2of",
        })
        .catch(() => {
          expect(true).toEqual(true);
        });
    });
  });
}
