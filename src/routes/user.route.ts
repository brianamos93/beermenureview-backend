import Express from "express";
import userController from "../controllers/userController"

const router = Express.Router()

router.post("/signup", userController.signup)
router.get("/all", userController.getAllUsers)
router.get("/normal", userController.getAllNormal)

export default router