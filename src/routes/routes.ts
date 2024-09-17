import { Router, Request, Response } from "express";
import pool from "../utils/db";

 const router = Router();

 interface User {
   id: string;
   name: string;
   email: boolean;
   createdAt: Date;
   role: string;
   beers: string;
 }

router.get("/", (req: Request, res: Response) => {
  res.send("test")
})