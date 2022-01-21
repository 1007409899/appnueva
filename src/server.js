import express from "express";
const app = express();
import dotend from "dotenv";
import ConectarBD from "./database.js";
import cors from 'cors';
import router from "./routes/auth.js";
/* import { signUp } from "./controllers/Auth.controller"; */
/* import authRoutes from "./routes/auth.Routes"; */


app.use("/api/auth", router);
/* 

app.post("/auth", signUp); */
app.use(express.json());

app.use(cors());
dotend.config();
app.get("/", (req, res) => {

    res.send("Hello World!");

});

app.listen(process.env.PORT, async() => {
    await ConectarBD();
    console.log("Server is running on port 4000");

});