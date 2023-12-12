import express from 'express';
const router = express.Router();

import { signIn, signUp, getUsers } from '../controllers/userController.js';

import { protect } from '../middleware/authMiddleware.js';

router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.get('/me', protect, getUsers);

export default router;
