const express = require('express')
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const multer  = require('multer')
const cors  = require('cors')

const HTTP_PORT = 3030
const PUBLIC_PATH = 'public'

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(errorhandler())
app.use(cors())
app.use(express.static(PUBLIC_PATH))

app.get('/',(req,res,next)=>{
  res.status(200).send(`Hello, world`)
})

app.get('/exec',(req,res,next)=>{
  const shell = require('shelljs')
  shell.exec('echo Executing, shellJS')
  shell.exec('echo Hello, hello')
  shell.exec('echo good bye')

  res.status(200).send(`Done`)
})

app.use((req,res)=>{
  res.status(404)
})

app.listen(HTTP_PORT,()=>{
  console.log(`Server running on port ${HTTP_PORT}`)
})
