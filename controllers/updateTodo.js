const Todo = require('../models/todo');

exports.updateTodo = async (req,res) => {
    try{
      const {id} = req.params;
      const {title,description} = req.body;
      const response = await Todo.findByIdAndUpdate({_id:id},{title,description,updatedAt:Date.now()})
      res.status(200).json({
        data:response,
        message:"created successfully"
        
      })
    }
    catch(err){
        res.status(500).json({
            data:err.message,
        message:"error aa gya createTodo m"
        })
    }
}