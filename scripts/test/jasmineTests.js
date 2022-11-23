import Jasmine from "jasmine";

const jasmine = new Jasmine();

// Load configuration file
jasmine.loadConfigFile("./spec/support/jasmine.json");

jasmine.execute();