const uuid = require('uuid')

const usersDB = [
  {
    id: '7f1d5a2d-6d50-43e8-9ce5-b8ceee3c7941',
    first_name: 'David',
    last_name: 'Garcia',
    email: 'david@gmail.com',
    password: 'ñsldkfqwepo',
    birthday: '2004/01/09'
  }
]

const getAllUsers = () => usersDB

const newUser = (body) => usersDB.push({
  id: uuid.v4(),
  ...body
})

const findUserById = (id) => usersDB.find(f=> f.id==id)

module.exports = { getAllUsers, newUser, findUserById }