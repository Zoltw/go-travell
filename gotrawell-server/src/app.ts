import express from 'express';
import fetch from 'node-fetch';
import { accessControl } from './utils/middlewares';
import userRoutes from './routes/userRoutes';
import placeRoutes from './routes/placeRoutes';

const app = express();

app.use(express.json());
app.use(accessControl);
app.use('/v1/users', userRoutes);
app.use('/v1/place', placeRoutes);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
app.get('/proxy/:url', async (req: any, res: any) => {
  const url = req.params.url;
  const response = await fetch(url);
  const body = await response.text();
  res.send(body);
});

export default app;
