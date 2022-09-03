const express = require("express");
const { words ,rank } = require("../controller/student.controller");
const router = express.Router();
router.get("/words",words )
router.post("/rank",rank )
module.exports = router;