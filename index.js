  import express from "express";
  import cors from "cors";
  import routes from "./routes.js";
  import path from "path";
  import dotenv from "dotenv";

import emailroutes from "./routes/emailingroutes.js";


dotenv.config({ path: path.resolve("./.env") });



const app = express();
const PORT = 4000;

app.use(express.json());

app.use("/api",emailroutes)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
