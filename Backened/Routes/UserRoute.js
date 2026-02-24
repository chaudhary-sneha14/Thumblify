import express from "express";
import { getThumbnailbyId, getUserThumbnails } from "../Controller/UserController.js";
import { auth } from "../Middleware/auth.js";


const UserRouter = express.Router()

UserRouter.get("/thumbnails",auth,getUserThumbnails);
UserRouter.get("/thumbnail/:id",auth,getThumbnailbyId);


export default UserRouter