import express from "express";
import { trending, search } from "../controllers/videoController";
import { login, join } from "../controllers/userController";
const globalRouter = express.Router();
const handleHome = (req, res) => res.send("HOME🏠");
globalRouter.get("/", trending);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

export default globalRouter;
