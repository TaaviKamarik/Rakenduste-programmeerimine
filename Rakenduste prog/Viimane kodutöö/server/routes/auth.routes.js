
// CRUD - create, read, update, delete
const jwt = require('jsonwebtoken');
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')
const { body, validationResult } = require('express-validator');


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {

    if (err) return res.sendStatus(403)

    req.user = user
    console.log(user)

    next()
  })
}

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})

router.post('/signup', body('email').isEmail(), body('password').isLength({ min: 5 }), authController.signup)
router.post('/login', authController.login)
router.get('/protectedRoute', authenticateToken, authController.protected)

module.exports = router