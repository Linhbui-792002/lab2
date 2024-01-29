import express from "express";
import * as dotenv from "dotenv";
import { productRouter } from "./routes/index.js";
dotenv.config();
import connect from "./database.js";

const app = express();
app.use(express.json());

app.use("/products", productRouter);

const port = process.env.PORT_NUMBER || 8080;

app.listen(port, async () => {
  await connect();
  console.log(`server is runing on : http://localhost:${port}`);
});
