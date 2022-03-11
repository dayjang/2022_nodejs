import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

const handleListening = () =>
  console.log(`server is listening... port: ${PORT}`);

const globalRouter = express.Router();
const handleHome = (req, res) => res.send("HOME🏠");
globalRouter.get("/", handleHome);
app.use("/", globalRouter);

const userRouter = express.Router();
const handleEditUser = (req, res) => res.send("Edit User!! ");
userRouter.get("/edit", handleEditUser);
app.use("/users", userRouter);

const videoRouter = express.Router();
const handleWatchVideo = (req, res) => res.send("Edit Video!!!!!");
videoRouter.get("/watch", handleWatchVideo);
app.use("/videos", videoRouter);

app.use(logger);

app.listen(PORT, handleListening);
