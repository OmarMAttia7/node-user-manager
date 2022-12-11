import { readFile } from "fs/promises";
import { dirname, resolve } from "path";
import { fileURLToPath } from "url";
import NewUserInfo from "../../../userManager/types/NewUserInfo.js";

export default async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url));
  const jsonFile = await readFile(resolve(__dirname, "./testUsersInfo.json"));
  const data = JSON.parse(jsonFile.toString());
  return data as NewUserInfo[];
};
