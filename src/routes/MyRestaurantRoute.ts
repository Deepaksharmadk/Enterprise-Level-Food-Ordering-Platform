import express from 'express';
import multer from 'multer';
import {
  updateOrderStatus,
  getMyRestaurantOrders,
  getMyRestaurant,
  createMyRestaurant,
  updateMyRestaurant,
} from '../controllers/MyRestaurantController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyRestaurantRequest } from '../middleware/validator';
const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024, //5mb
  },
});

router.get('/order', jwtCheck, jwtParse, getMyRestaurantOrders);

router.patch('/order/:orderId/status', jwtCheck, jwtParse, updateOrderStatus);

router.get('/', jwtCheck, jwtParse, getMyRestaurant);

router.post(
  '/',
  upload.single('imageFile'),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  createMyRestaurant,
);

router.put(
  '/',
  upload.single('imageFile'),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  updateMyRestaurant,
);

export default router;
