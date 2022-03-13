import express from "express";
import { edit, remove, logout, see } from "../controllers/videoController";
const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User!! ");
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/logout", logout);
userRouter.get("/:id", see);

export default userRouter;
