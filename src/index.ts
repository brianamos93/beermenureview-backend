import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.post(`/signup`, async (req, res) => {
  const { name, email } = req.body

  try {
    const result = await prisma.user.create({
      data: {
        name,
        email,
      },
    })
    res.json(result)
  } catch (error) {
    res.send("error")
  }

})

app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    res.send("error")
  }

})


app.get('/beer/feed', async (req, res) => {
  const beers = await prisma.beer.findMany({
    where: { published: true },
    include: { author: true }
  })
  res.json(beers)
})

app.get(`/beer/:id`, async (req, res) => {

  try {
    const { id } = req.params
    const beer = await prisma.beer.findUnique({
      where: { id: String(id) },
    })
    res.json(beer)
  } catch (error) {
    res.send("error")
  }

})

app.post(`/beer`, async ( req, res) => {
  const { name, description, origin, abv, ibu, authorId } = req.body

  try {
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
  } catch (error) {
    res.send("error")
  }

})

app.listen(3000, () =>
  console.log('REST API server ready at: http://localhost:3000'),
)