const { getAllUsers, newUser, findUserById } = require('./users.controllers.js')

const getUsers = (req, res) => res.status(200).json(getAllUsers())

const getOneUser = (req, res) => {
  const { id } = req.params, user = findUserById(id)

  if(user) res.status(201).json(user)
  else res.status(400).json({message: 'Invalid ID'})
}

const createNewUser = (req, res) => {
  const body = req.body

  if(!body.first_name) return res.status(400).json({message: 'Invalid first name'})
  if(!body.last_name) return res.status(400).json({message: 'Invalid last name'})
  if(!body.email) return res.status(400).json({message: 'Invalid email'})
  if(!body.email) return res.status(400).json({message: 'Invalid password'})
  if(!body.email) return res.status(400).json({message: 'Invalid birthday'})

  res.status(201).json(newUser(body))
}

module.exports = { getUsers, getOneUser, createNewUser }