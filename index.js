import express from "express";
import routes from "./routes/index.js";
import dbConnect from "./db/connect.js";
import "dotenv/config";
const app = express();

app.use(express.json());
dbConnect();

app.use("/", routes);
app.listen("5000", () => {
  console.log("Listening on port 5000");
});
