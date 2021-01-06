const taskModel = require("../models/taskModel");

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await taskModel.getTasks();
    if (tasks && tasks.length) {
      return res.json({ success: true, data: tasks });
    } else {
      return res.json({ success: false, data: null });
    }
  } catch (err) {
    console.log(err);
    return res.json({ success: false, data: null });
  }
};

exports.addTask = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (name) {
      const result = await taskModel.addTask({ name });
      if (result) {
        return res.json({ success: true, msg: "Task added", data: result });
      } else {
        return res.json({ success: false, msg: "Unable to add task" });
      }
    } else {
      return res.json({ success: false, msg: "Params missing" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ success: false, msg: "Something went wrong" });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    if (taskId) {
      const result = await taskModel.deleteTask(taskId);
      if (result) {
        return res.json({ success: true, msg: "Task deleted" });
      } else {
        return res.json({ success: false, msg: "Unable to add task" });
      }
    } else {
      return res.json({ success: false, msg: "Params missing" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ success: false, msg: "Something went wrong" });
  }
};

exports.completeTask = async (req, res, next) => {
  try {
    const taskId = req.params.taskId;
    if (taskId) {
      const result = await taskModel.updateTask(taskId, {
        status: "completed",
      });

      if (result) {
        return res.json({
          success: true,
          msg: "Task updated",
        });
      } else {
        return res.json({ success: false, msg: "Unable to add task" });
      }
    } else {
      return res.json({ success: false, msg: "Params missing" });
    }
  } catch (err) {
    console.log(err);
    return res.json({ success: false, msg: "Something went wrong" });
  }
};
