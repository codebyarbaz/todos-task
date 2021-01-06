const express = require("express");

const router = express.Router();

const taskController = require("../controllers/taskController");

router.get("/", taskController.getTasks);

router.post("/", taskController.addTask);

router.put("/:taskId", taskController.completeTask);

router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
