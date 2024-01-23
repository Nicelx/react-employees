const express = require("express");
const router = express.Router();
const { auth } = require("../middleware/auth");
const { all } = require("../controllers/employees");

// api/employees/
router.get("/", auth, all);
router.get("/:id", auth, () => {
	console.log("get single employees");
});
router.post("/add", auth, () => {
	console.log("add employee");
});
router.post("/remove/:id", auth, () => {
	console.log("add employee");
});
router.put("/edit/:id", auth, () => {
	console.log("add employee");
});

module.exports = router;
