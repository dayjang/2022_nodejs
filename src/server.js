import express from "express";
import morgan from "morgan";
import globalRouterTheNameIWant from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

const app = express();
const PORT = 4000;
const logger = morgan("dev");

const handleListening = () =>
  console.log(`server is listening... port: ${PORT}`);

app.set("view engine", "pug");

app.use(logger);
app.use("/", globalRouterTheNameIWant);
app.use("/users", userRouter);
app.use("/videos", videoRouter);
app.listen(PORT, handleListening);
