const express = require('express');

const router = express.Router();


const {createTodo} = require('../controllers/createTodo');
const {getTodo,getTodoById} = require ('../controllers/getTodo');
const {deleteTodo} = require('../controllers/deleteTodo')
const {updateTodo} = require('../controllers/updateTodo');
const { login, signup } = require('../controllers/auth');
 
router.post('/createTodo' ,createTodo);
router.post('/login' ,login);
router.post('/signin' ,signup);
router.post('/getTodo',getTodo);
router.get('/getTodo/:id' ,getTodoById);  
router.delete('/deleteTodo/:id' , deleteTodo);
router.put('/updateTodo/:id',updateTodo);
module.exports= router