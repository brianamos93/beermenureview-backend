import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/signup`, async (req, res) => {
  const { name, email } = req.body


  const result = await prisma.user.create({
    data: {
      name,
      email,
    },
  })
  res.json(result)
})

app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany()
  res.json(users)
})

app.post('/user', async (req, res) => {
  const result = await prisma.user.create({
    data: { ...req.body },
  })
  res.json(result)
})

app.get('/beer/feed', async (req, res) => {
  const beers = await prisma.beer.findMany({
    where: { published: true },
    include: { author: true }
  })
  res.json(beers)
})

app.get(`/beer/:id`, async (req, res) => {
  const { id } = req.params
  const beer = await prisma.beer.findUnique({
    where: { id: String(id) },
  })
  res.json(beer)
})

app.post(`/beer`, async ( req, res) => {
  const { name, description, origin, abv, ibu, authorId } = req.body
  const result = await prisma.beer.create({
    data: {
      name,
      description,
      origin,
      abv,
      ibu,
      published: false,
      author: { connect: { id: authorId}},
    }
  })
  res.json(result)
})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)