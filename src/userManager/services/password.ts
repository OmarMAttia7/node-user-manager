import argon2 from "argon2";

async function hashPassword(password: string): Promise<string> {
  return await argon2.hash(password, { type: argon2.argon2i });
}

export { hashPassword };
