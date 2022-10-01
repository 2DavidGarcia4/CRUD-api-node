const router = require('express').Router()
const { getUsers, getOneUser, createNewUser } = require('./users.services.js')

router.get('/users', getUsers)

router.post('/users', createNewUser)

router.get('/users/:id', getOneUser)

module.exports = router