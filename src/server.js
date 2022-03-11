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

const logger = (req, res, next) => {
  console.log(`SB is going throu middle ware..${req.method} ${req.url}`);
  next();
};

const privateMiddle = (req, res, next) => {
  const url = req.url;
  if (url === "/protected") {
    console.log("ALERT!");
    return res.send("<h2>NOT ALLOWED</h2>");
  }
  console.log("allowed, you can continue......");
  next();
};
app.use(logger);
app.use(privateMiddle);
app.get("/", handleHome);
app.get("/login", handleLogin);

app.listen(PORT, handleListening);
