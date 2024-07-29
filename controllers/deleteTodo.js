const Todo = require('../models/todo');

exports.deleteTodo = async (req,res) => {
    try{
      const {id} = req.params;
     await Todo.findByIdAndDelete({_id:id})
      res.status(200).json({
       message:"deleted successfully"
      })
    }
    catch(err){
        res.status(500).json({
            data:err.message,
        message:"error aa gya createTodo m"
        })
    }
}