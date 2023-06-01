const Task = require("../models/task.js");

const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    await Task.create({
      title,
      description,
      user: req.user
    });

    res.status(201).json({
      success: true,
      message: "Task is created"
    });
  } catch (error) {
    next(error);
  }
};

const getMytask = async (req, res, next) => {
  try {
    const userid = req.user._id;
    const tasks = await Task.find({ user: userid });
    res.status(200).json({ success: true, tasks });
  } catch (error) {
    next(error);
  }
};

module.exports = { newTask, getMytask };
