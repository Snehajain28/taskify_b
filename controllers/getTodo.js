const User = require("../models/User");
const Todo = require("../models/todo");


exports.getTodo = async (req, res) => {

  try {

    const user = await User.findById({ _id: req.body.id });
    let arr = [];

    for (let i = 0; i < user.todos.length; i++) {
      const todo = await Todo.findById({ _id: user.todos[i] })
      arr.push(todo);
    }


    res.status(200).json({
      data: arr,
      message: "created successfully",
    })
  }
  catch (err) {
    res.status(500).json({
      data: err.message,
      message: "error get todo m"
    })
  }

}

exports.getTodoById = async (req, res) => {
  try {
  
    const id = req.params.id;
    const response = await Todo.findById({ _id: id })

    if (!response) {
      return res.status(404).json({
        message: "No data found with id"
      })
    }
    res.status(200).json({
      data: response,
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