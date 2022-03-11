import express from "express";

const app = express();
const PORT = 4000;

const handleListening = () =>
  console.log(`server is listening... port: ${PORT}`);

const handleHome = (req, res) => {
  return res.send("<h1>i still love u!</h1>");
};

const handleLogin = (req, res) => {
  return res.send("Login Here");
};

const middleWare = (req, res, next) => {
  console.log(`SB is going throu middle ware.. ${req.url}`);
  // return res.send("MIDDEL WARE ? ");
  next();
};

app.get("/", middleWare, handleHome);
app.get("/login", handleLogin);

app.listen(PORT, handleListening);
