import db from "../db.js";
import dbSuite from "./dbSuite.js";
import modelSuite from "./model/index.js";

afterAll(async () => {
    await db.destroy();
})

dbSuite();
modelSuite();