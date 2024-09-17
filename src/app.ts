import express from "express";
import mountRoutes from './routes/index'

const cors = require('cors')
const middleware = require('./utils/middleware')


const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

mountRoutes(app)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app