import express from "express";
import cors from "cors";
import "dotenv/config";
import { json } from "stream/consumers";
const app = express();
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
