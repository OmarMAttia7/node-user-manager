import Jasmine from "jasmine";
import console from "console";
import process from "process";
const jasmine = new Jasmine();

async function beforeTest() {
  console.log("pre-test process");
}

async function afterTest() {
  console.log("post-test process");
  process.exit(0);
}

// Load configuration file
jasmine.loadConfigFile("./spec/support/jasmine.json");

// Don't exit on completion to avoid disrupting other
jasmine.exitOnCompletion = false;

async function main() {
  await beforeTest();

  await jasmine.execute();

  await afterTest();
}

main();