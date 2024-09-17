import Express from "express";
import beerController from "../controllers/beerController"

const router = Express.Router()

router.post("/", beerController.newBeer)
router.get("/:id", beerController.getOneBeer)
router.get("/published", beerController.publishedBeers)
router.get("/", beerController.getAllBeers)
router.get("/unpublished", beerController.unpublishedBeers)
router.put("/publish/:id", beerController.publishBeer)
router.delete("/:id", beerController.deleteBeer)

export default router