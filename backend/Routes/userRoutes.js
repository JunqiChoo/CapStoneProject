const express = require("express");
const router = express.Router();
require('dotenv').config();

//defined the logic from the controller
const {createEntry} = require("../Controllers/entryController");
const {getEntry} = require("../Controllers/entryController");
const {getAllEntries} = require("../Controllers/entryController");
const {deleteEntry} = require("../Controllers/entryController");


//Entries
router.route("/createEntry").post(createEntry);
router.route("/GetEntry/:id").get(getEntry);
router.route("/GetAllEntries").get(getAllEntries);
router.route("/DeleteEntry/:id").delete(deleteEntry);



module.exports = router;
