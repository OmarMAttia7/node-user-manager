import UserManager from "../../index.js";
import populateUsersTable from "../utils/populateUsersTable.js";

export default function updateUserSuite(userManager: UserManager) {
  describe("updateUser()", () => {
    beforeEach(async () => {
      await populateUsersTable(userManager);
    });

    it("updates info of the user with the provided ID", async () => {
      const testingInfo = { firstName: "Linus", lastName: "Torvald" };
      const updatedUser = await userManager.updateUser(1, {
        first_name: testingInfo.firstName,
        last_name: testingInfo.lastName,
      });
      expect(updatedUser.first_name).toEqual(testingInfo.firstName);
      expect(updatedUser.last_name).toEqual(testingInfo.lastName);
    });
  });
}
