const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signup.controller')

router.use((req, res, next) => {
    const { username, password } = req.body
    console.log('Time: ', Date.now())
    next();
})

const getMiddleware = (req, res, next) => {
    console.log('Getting DB result for req.user')
    next()
  }


  router.get('/',getMiddleware, signupController.read)
router.post('/', signupController.create)


module.exports = router