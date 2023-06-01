const express = require("express");
const { getMytask, newTask } = require("../controllers/task");
const isAuthenticated = require("../middlewares/auth");

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMytask);

module.exports = router;
