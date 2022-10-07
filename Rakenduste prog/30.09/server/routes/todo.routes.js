// CRUD - create, read, update, delete

const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todo.controller')

// middleware that is specific to this router
router.use((req, res, next) => {
  const { name } = req.body


  console.log('Time: ', Date.now())
  next()
})

const getMiddleware = (req, res, next) => {
  console.log('Getting DB result for req.user')
  next()
}

router.get('/', getMiddleware, todoController.read)
router.post('/:id', todoController.create)
router.put('/:id', todoController.update)
router.delete('/:id', todoController.delete)

module.exports = router