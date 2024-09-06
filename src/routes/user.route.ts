import Express from "express";
import userController from "../controllers/userController"

const router = Express.Router()

router.post("/signup", userController.signup)
router.get("/users", userController.getAllUsers)

export default router