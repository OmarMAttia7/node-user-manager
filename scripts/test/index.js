import Jasmine from "jasmine";
import console from "console";
import process from "process";
import testDB from "./testDB.js";
const jasmine = new Jasmine();

process.env.ENV = "test";

async function preTest() {
  console.log("Pre-test scripts");
  await testDB.create();
}

async function postTest() {
  console.log("Post-test scripts");
  await testDB.drop();
  process.exit(0);
}

// Load configuration file
jasmine.loadConfigFile("./spec/support/jasmine.json");

// Don't exit on completion to avoid disrupting other
jasmine.exitOnCompletion = false;

async function main() {
  await preTest();

  await jasmine.execute();

  await postTest();
}

main();