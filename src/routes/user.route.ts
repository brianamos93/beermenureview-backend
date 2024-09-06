import Express from "express";
import userController from "../controllers/userController"

const router = Express.Router()

router.post("/signup", userController.signup)
router.get("/all", userController.getAllUsers)

export default router