import express from "express";
import {
  createTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";
const router = express.Router();

//create new Tour
router.post("/", createTour);

//update new Tour
router.put("/:id", updateTour);

//delete Tour
router.delete("/:id", deleteTour);

//get single Tour
router.get("/:id", getSingleTour);

//get All Tour
router.get("/", getAllTour);

export default router;
