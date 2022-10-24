import express from "express";
import {
  updateUser,
  deleteUser,
  getUser,
  getAllUsers,
} from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();
/*
// check Authentication
router.get("/checkAuthentication",verifyToken,(req,res,next) =>{
res.send("Hello user, you are logged in ")
})
// check User
router.get("/checkuser/:id",verifyUser,(req,res,next) =>{
    res.send("Hello user, you are logged in and you can delete your account  ")
    })

// check admin 
router.get("/checkadmin/:id",verifyAdmin,(req,res,next) =>{
    res.send("Hello admin, you are logged in and you can delete all accounts  ")
    })  
    
    */
//UPDATE
router.put("/:id", verifyUser, updateUser);
// //DELETE
router.delete("/:id", verifyUser, deleteUser);

// // Get
router.get("/:id", verifyUser, getUser);
// // GET ALL

router.get("/", verifyAdmin, getAllUsers);

export default router;
