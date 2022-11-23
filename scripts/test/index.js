import console from "console";
import process from "process";
import testDB from "./testDB.js";
import { exec } from "child_process";

process.env.ENV = "test";

async function preTest() {
  console.log("Pre-test scripts");
  await testDB.create();
  await testDB.migrate();
}

function testScript() {
  const childProcess = exec("node ./scripts/test/jasmineTests");

  childProcess.stdout.pipe(process.stdout);

  return new Promise((resolve) => {
    childProcess.on("exit", (exitCode) => resolve(exitCode));
  });
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
