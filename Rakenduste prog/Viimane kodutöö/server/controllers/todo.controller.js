
const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  title: String,
  date: Date,
  importance: Number,
  completed: Date
})

const Todo = mongoose.model('Todo', todoSchema)

exports.create = async (req, res) => {

  const {title, date, importance, completed } = req.body

  const todo = await Todo.create({title:  title, date: date, importance: importance, completed: completed},)

  res.send(todo)
}

exports.read = async (req, res) => {
  const todos = await Todo.find({})
  res.send(todos)
}

exports.update = async (req, res) => {
  // Täiendada ise, otsida mongoosejs.com dokumentatsioonist (nt findOneAndReplace)
  const { title, date, importance, completed  } = req.bod

  const todo = await Todo.findByIdAndUpdate({_id: id}, {title:  title, date: date, importance: importance, completed: completed})

  res.send(todo)


}

exports.delete = async(req, res) => {
  // Täiendada ise, otsida mongoosejs.com dokumentatsioonist

  const { id } = req.params

  const todo = await Todo.deleteOne({ id: id })

  res.send(todo)

}