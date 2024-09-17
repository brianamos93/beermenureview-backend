import Express from "express";
import beer2Controller from "../controllers/beer2Controller";

const router = Express.Router()

router.get("/", beer2Controller.getAllPubBeers)
router.get("/:id", beer2Controller.getOneBeer)
router.get("/unpublished", beer2Controller.getAllUnpubBeers)
router.post("/", beer2Controller.beerPost)
router.put("/publish/:id", beer2Controller.publishBeer)
router.delete("/:id", beer2Controller.deleteBeer)
router.get("/all", beer2Controller.getAllBeers)

export default router