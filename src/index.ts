import express from 'express';
import { v2 as cloudinary } from 'cloudinary';
import cors from 'cors';
import 'dotenv/config';
import mongoose from 'mongoose';

import myRestaurantRoute from './routes/MyRestaurantRoute';
import restaurantRoute from './routes/RestaurantRoute';
import orderRoute from './routes/OrderRoute';
import userRoute from './routes/MyUserRoute';
const app = express();

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log('connected to mongodb');
  })
  .catch((e) => {
    console.log(e);
  });
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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

app.use('/api/my/user', userRoute);
app.use('/api/my/restaurant', myRestaurantRoute);
app.use('/api/restaurant', restaurantRoute);
app.use('/api/order', orderRoute);

app.listen(process.env.PORT, () => {
  console.log(`server started on ${process.env.PORT}`);
});
