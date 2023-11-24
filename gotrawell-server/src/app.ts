import express from "express";
import fetch from "node-fetch";
import { accessControl } from "./utils/middlewares";
import userRoutes from "./routes/userRoutes";

const app = express();

app.use(express.json());
app.use(accessControl);
app.use("/users", userRoutes);

app.get('/proxy/:url', async (req: any, res: any) => {
  const url = req.params.url;
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});

export default app;


