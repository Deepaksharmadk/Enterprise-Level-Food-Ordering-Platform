import express from 'express';
const router = express.Router();
import {
  createCurrentUser,
  getCurrentUser,
  updateCurrentUser,
} from '../controllers/MyUserController';
import { jwtCheck, jwtParse } from '../middleware/auth';
import { validateMyUserRequest } from '../middleware/validator';

router.get('/', jwtCheck, jwtParse, getCurrentUser);
router.post('/', jwtCheck, createCurrentUser);
router.put('/', jwtCheck, jwtParse, validateMyUserRequest, updateCurrentUser);

export default router;
