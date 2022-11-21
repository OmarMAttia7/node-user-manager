import db from "../db.js";
describe("Database Connection", () => {
  it("connects to database successfully.", async () => {
    const testMessage = "connected";
    const query = await db.raw("SELECT ?::text as message", testMessage);

    expect(query.rows[0].message).toEqual(testMessage);
  });
});

export {};
