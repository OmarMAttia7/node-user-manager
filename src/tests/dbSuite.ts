import { Knex } from "knex";

export default (db: Knex) => {
  describe("Database Connection", () => {
    it("connects to database successfully.", async () => {
      const testMessage = "connected";
      const query = await db.raw("SELECT ?::text as message", testMessage);

      expect(query.rows[0].message).toEqual(testMessage);
    });

    it("has a users table", async () => {
      const query = await db("users").select();
      expect(query).toBeInstanceOf(Array);
    });
  });
};
