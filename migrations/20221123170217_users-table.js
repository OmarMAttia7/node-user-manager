/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id", { primaryKey: true });
    table.string("username", 30);
    table.string("first_name", 50);
    table.string("last_name", 50);
    table.string("password_digest", 100);
    table.text("email");
    table.unique("email");
    table.unique("username");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export const down = function (knex) {
  return knex.schema.dropTable("users");
};

export default { up, down };
