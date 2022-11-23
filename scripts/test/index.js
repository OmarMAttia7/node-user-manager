import console from "console";
import process from "process";
import testDB from "./testDB.js";
import { execSync } from "child_process";

process.env.ENV = "test";

async function preTest() {
  console.log("Pre-test scripts");
  await testDB.create();
}

async function testScript() {
  execSync("node ./scripts/test/jasmineTests", {stdio: "inherit"});
}

async function postTest() {
  console.log("Post-test scripts");
  await testDB.drop();
  process.exit(0);
}

async function main() {
  await preTest();

  await testScript();

  await postTest();
}

main();