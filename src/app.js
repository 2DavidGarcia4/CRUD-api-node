const express = require('express')
const app = express()
const usersRouters = require('./users/users.routers.js')

app.use(express.json())

app.get('/', (req, res)=> {
  res.send("hola")
})

app.use('/', usersRouters)

app.listen(5000, ()=> {
  console.log('Server runing on port 5000')
})