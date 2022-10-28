import express from "express";
// import Hotel from "../models/Hotel.js";
import {
  createHotel,
  updateHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
  countByType
} from "../controllers/hotel.js";
import { verifyAdmin } from "../utils/verifyToken.js";

// import {createError} from '../utils/error.js'
const router = express.Router();

// CREATE
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
// //DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

// // Get
router.get("/find/:id", getHotel);
// // GET ALL

router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/CountByType", countByType);
export default router;
