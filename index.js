  import cors from "cors"
  import express from "express";
  import path from "path";
  import dotenv from "dotenv";
  import bodyParser from "body-parser";
import emailroutes from "./routes/emailingroutes.js";


dotenv.config({ path: path.resolve("./.env") });



const app = express();
const PORT = 4000;
const allowedOrigins = [
  "http://localhost:3000",
  "https://vincentfillar.vercel.app"
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST"]
}));
app.use(bodyParser.json());

app.use(express.json());


app.use("/api",emailroutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
