import { Request, Response } from "express"
import prisma from "../utils/client"



const signup = async (req: Request, res: Response) => {
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
}
  
const getAllUsers = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany({
			include: { beers: true }
		})
		res.json(users)
	} catch (error) {
	  res.send("error")
	}
}

  const getAllNormal = async (req: Request, res: Response) => {
	try {
		const users = await prisma.user.findMany({
			where: {
				role: "USER"
			}
		})
		res.json(users)
	} catch (error) {
	  res.send("error")
	}
}


  export default {
	signup,
	getAllUsers,
	getAllNormal
  }