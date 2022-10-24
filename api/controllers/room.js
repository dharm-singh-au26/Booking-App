import Room from '../models/Room.js'
import Hotel from '../models/Hotel.js'
import { createError } from '../utils/error.js'

export const createRoom  =  async (req,res,next)=>{
     const hotelId =  req.params.hotelid;
     const newRoom =  new Room(req.body)

     try {
        const savedRoom = await newRoom.save()
        try {
            await Hotel.findByIdAndUpdate(hotelId,{$push : {rooms:savedRoom._id}})
        } catch (error) {
            next(error)
        }
        res.status(201).json(savedRoom)
     } catch (error) {
        next(error)
     }
}

export const updateRoom = async (req, res, next) => {
    try {
      const updatedRoom = await Room.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(updatedRoom);
    } catch (error) {
      next(error);
    }
  };
  
  export const deleteHotel = async (req, res, next) => {
    try {
      await Hotel.findByIdAndDelete(req.params.id);
      res.status(200).json("Hotel Deleted");
    } catch (error) {
      next(error);
    }
  };
  
  export const getHotel = async (req, res, next) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      res.status(200).json(hotel);
    } catch (error) {
      next(error);
    }
  };
  
  export const getAllHotels = async (req, res, next) => {
    try {
      const hotels = await Hotel.find();
      res.status(200).json(hotels);
    } catch (error) {
      next(error);
    }
  };
  