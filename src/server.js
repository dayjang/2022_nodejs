import express from "express";
import morgan from "morgan";

const app = express();
const PORT = 4000;
const logger = morgan("combined");

const handleListening = () =>
  console.log(`server is listening... port: ${PORT}`);

const handleHome = (req, res) => {
  return res.send("<h1>i still love u!</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Login Here");
};

app.use(logger);
app.get("/", handleHome);
app.get("/login", handleLogin);
app.listen(PORT, handleListening);
