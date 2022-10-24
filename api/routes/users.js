import express from "express";
import { updateUser,deleteUser,getUser,getAllUsers } from "../controllers/user.js";
import { verifyToken } from "../utils/verifyToken.js";

const router = express.Router();

router.get("/checkAuthentication",verifyToken,(req,res,next) =>{
res.send("Hello user, you are logged in ")
})
//UPDATE
router.put("/:id", updateUser);
// //DELETE
router.delete("/:id", deleteUser);

// // Get
router.get("/:id", getUser);
// // GET ALL

router.get("/", getAllUsers);


export default router