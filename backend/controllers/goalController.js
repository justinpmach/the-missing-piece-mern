import asyncHandler from 'express-async-handler';

import Goal from '../models/goalModel.js';
import User from '../models/userModel.js';

export const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });

  res.status(200).json(goals);
});

export const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('No goal provided, please add a goal in the text field');
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });

  res.status(200).json(goal);
});

export const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedGoal);
});

export const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  await goal.deleteOne();

  res.status(200).json({ id: req.params.id });
});
