const User = require('../models/User');
const Todo = require('../models/todo');

exports.createTodo = async (req, res) => {
  try {
    const { id, title, description, stage, priority, date } = req.body;
    const todo = await Todo.create({ title, description, stage, priority, date })
    await User.findByIdAndUpdate({ _id: id }, { $push: { todos: todo._id } }, { new: true });

    res.status(200).json({
      message: "created successfully"
    })
  }
  catch (err) {
    res.status(500).json({
      data: err.message,
      message: "error aa gya createTodo m"
    })
  }
}