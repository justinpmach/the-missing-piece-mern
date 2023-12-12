import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

export const signUp = asyncHandler(async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400).json({ message: 'User already exists' });
  }

  if (password !== confirmPassword) {
    res.status(400).json({ message: `Passwords don't match` });
  }

  // hash password
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = await User.create({
    email,
    password: hashedPassword,
    firstName,
    lastName,
  });

  if (user) {
    res.json({
      _id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid User Data');
  }
  // const token = jwt.sign(
  //   { email: result.email, id: result._id },
  //   process.env.REACT_APP_JWT_SIGN_SECRET,
  //   { expiresIn: '1h' }
  // );
});

export const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const existingUser = await User.findOne({ email });

  if (!existingUser) {
    res.status(404).json({ message: 'User does not exist' });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    existingUser.password
  );

  // if (!isPassCorrect) {
  //   return res.status(400).json({ message: 'Invalid credentials' });
  // }

  if (existingUser && isPasswordCorrect) {
    res.json({
      _id: existingUser.id,
      name: `${existingUser.firstName} ${existingUser.lastName}`,
      email: existingUser.email,
      token: generateToken(existingUser._id),
    });
  } else {
    res.status(400);
    throw new Error('Invalid email or password');
  }
  // const token = jwt.sign(
  //   { email: existingUser.email, id: existingUser._id },
  //   process.env.REACT_APP_JWT_SIGN_SECRET,
  //   { expiresIn: '1h' }
  // );
});

export const getUsers = asyncHandler(async (req, res) => {
  const { _id, firstName, lastName, email } = await User.findById(req.user._id);

  res.status(200).json({
    id: _id,
    name: `${firstName} ${lastName}`,
    email,
  });
});

// Generate JWT
const generateToken = id => {
  return jwt.sign({ id }, process.env.JWT_SIGN_SECRET, {
    expiresIn: '1h',
  });
};
