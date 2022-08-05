import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
import mongoose from "mongoose";
require("dotenv").config();
const morgan = require("morgan");

const app = express();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

const port = process.env.PORT || 8000;

readdirSync("./routes").map((s) => app.use("/api", require(`./routes/${s}`)));

app.listen(port, () => console.log(`Server is running on port ${port}`));
