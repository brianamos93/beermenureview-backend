import Router from "express-promise-router";
import db from '../utils/db'

const router = new Router()

export default router

router.get("/", async(req, res) => {
	const data = await db.query('SELECT * FROM user')
	res.json(data.rows)
})