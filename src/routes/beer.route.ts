import Express from "express";
import beerController from "../controllers/beerController"

const router = Express.Router()

router.post("/", beerController.newBeer)
router.get("/:id", beerController.getOneBeer)
router.get("/feed", beerController.beerFeed)

export default router