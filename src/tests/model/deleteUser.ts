import UserManager from "../../index.js";
import populateUsersTable from "./utils/populateUsersTable.js";

export default function deleteUserSuite(userManager: UserManager) {
  describe("deleteUser()", () => {
    beforeAll(async () => {
      await populateUsersTable(userManager);
    });
    it("deletes the specified user", async () => {
      const deletedUser = await userManager.deleteUser(1);
      expect(deletedUser.id).toEqual(1);
      expect(deletedUser.username).toBeDefined();
      expect(deletedUser.email).toBeDefined();
    });
  });
}
