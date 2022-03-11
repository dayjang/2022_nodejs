import express from "express";

const app = express();
const PORT = 4000;
const handleListening = () =>
  console.log(`server is listening... port: ${PORT}`);
const handleHome = () => console.log("a user is trying to go to HOME 🏠");

app.get("/", handleHome);
app.listen(PORT, handleListening);
