import express from "express";
import userRouter from "./routes/user.route";
import beerRouter from "./routes/beer.route";
import beer2Router from "./routes/beer2.route"

const cors = require('cors')
const middleware = require('./utils/middleware')


const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

app.use("/api/v1/user", userRouter)
app.use("/api/v1/beer", beerRouter)
app.use("/api/v1/beer2", beer2Router)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)


module.exports = app