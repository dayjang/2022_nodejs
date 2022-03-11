import express from "express";

const app = express();
const PORT = 4000;
const handleListening = () => console.log(`server is listing... port: ${PORT}`);
app.listen(PORT, handleListening);
