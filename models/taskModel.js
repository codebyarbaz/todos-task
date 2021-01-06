const Tasks = require("../db/schemas/taskSchema");

exports.getTasks = async () => {
  try {
    return await Tasks.find().sort({ _id: -1 });
  } catch (err) {
    console.log(err);
    return null;
  }
};

exports.addTask = async (obj) => {
  try {
    return await Tasks.create(obj);
  } catch (err) {
    console.log(err);
    return null;
  }
};

exports.deleteTask = async (taskId) => {
  try {
    return await Tasks.findByIdAndDelete(taskId);
  } catch (err) {
    console.log(err);
    return null;
  }
};

exports.updateTask = async (taskId, updatedTask) => {
  try {
    return await Tasks.findOneAndUpdate({ _id: taskId }, updatedTask);
  } catch (err) {
    console.log(err);
    return null;
  }
};
