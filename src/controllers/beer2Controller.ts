import { Request, Response } from "express"
import prisma from "../utils/client"

const getAllPubBeers = async (req: Request, res: Response) => {
	try {
		const beers = await prisma.beer.findMany({
			where: {
				published: true
			},
			include: { author: true }
		})
		res.json(beers)
	} catch (error) {
	  res.send("error")
	}
}

const getAllBeers = async (req: Request, res: Response) => {
	try {
		const beers = await prisma.beer.findMany({
			include: { author: true }
		})
		res.json(beers)
	} catch (error) {
	  res.send("error")
	}
}

const getAllUnpubBeers = async (req: Request, res: Response) => {
	try {
		const beers = await prisma.beer.findMany({
			where: {
				published: false
			},
			include: { author: true }
		})
		res.json(beers)
	} catch (error) {
	  res.send("error")
	}
}

const beerPost = async (req: Request, res: Response) => {
	const { name, description, origin, abv, ibu, authorId } = req.body
	
	try {
		const result = await prisma.beer.create({
			data: {
				name, description, origin, abv, ibu, authorId,
			},
		})
		res.json(result)
	} catch (error) {
		res.send("error")
	}
}

const publishBeer = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const beer = await prisma.beer.update({
			where: { id: String(id) },
			data: { published: true },
		})
		res.json(beer)
	} catch (error) {
		res.send("error")
	}
}

const getOneBeer = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const beer = await prisma.beer.findUnique({
			where: { id: String(id) },
			include: { author: true }
		})
		res.json(beer)
	} catch (error) {
		res.send("error")
	}
}

const deleteBeer = async (req: Request, res: Response) => {
	try {
		const { id } = req.params
		const beer = await prisma.beer.delete({
			where: {
				id: String(id)
			},
		})
		res.json(beer)
	} catch (error) {
		res.send("error")
	}
}

export default {
	getAllPubBeers,
	getAllUnpubBeers,
	beerPost,
	publishBeer,
	getOneBeer,
	deleteBeer,
	getAllBeers
}