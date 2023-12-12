import express from 'express';
const router = express.Router();

import { login, signUp, getUsers } from '../controllers/userController.js';

import { protect } from '../middleware/authMiddleware.js';

router.post('/register', signUp);
router.post('/login', login);
router.get('/me', protect, getUsers);

export default router;
