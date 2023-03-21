import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";

import { verifyAdmin, verifyUser } from "../utils/verifyToken.js";
const router = express.Router();

//create new User
router.post("/", createUser);

//update new User
router.put("/:id", updateUser);

//delete User
router.delete("/:id", deleteUser);

//get single User
router.get("/:id", getSingleUser);

//get All User
router.get("/", getAllUser);

export default router;
