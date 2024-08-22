import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
const app = express();
mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((e) => {
    console.log(e);
  });
app.use(express.json());
app.use(cors());
app.get("/test", (req: express.Request, res: express.Response) => {
  res.json({
    message: "hello world",
  });
});
app.listen(7000, () => {
  console.log("server started on localhost:7000");
});
