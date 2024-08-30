import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';
import MyUserRoute from './routes/MyuserRoutes';
const app = express();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((e) => {
    console.log(e);
  });
app.use(express.json());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);
app.get('/helth', (req: express.Request, res: express.Response) => {
  res.json({
    message: 'helth is good',
  });
});

app.use('/api/my/user', MyUserRoute);
app.listen(process.env.PORT, () => {
  console.log('server started on localhost:7000');
});
