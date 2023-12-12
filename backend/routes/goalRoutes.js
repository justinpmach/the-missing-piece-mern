import express from 'express';
const router = express.Router();

import {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController.js';

import { protect } from '../middleware/authMiddleware.js';

router.route('/').get(protect, getGoals).post(protect, setGoal);
router.route('/:id').delete(protect, deleteGoal).put(protect, updateGoal);

export default router;
