import { Request, Response } from "express"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const newBeer = async ( req: Request, res: Response) => {
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
  }}

const beerFeed = async (req: Request, res: Response) => {
    const beers = await prisma.beer.findMany({
      where: { published: true },
      include: { author: true }
    })
    res.json(beers)
  }

const getOneBeer = async (req: Request, res: Response) => {

  try {
    const { id } = req.params
    const beer = await prisma.beer.findUnique({
      where: { id: String(id) },
    })
    res.json(beer)
      } catch (error) {
    res.send("error")
  }
  
}

export default {
	newBeer,
  beerFeed,
  getOneBeer
  }