import express from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorMiddleware.js';
import mongoose from 'mongoose';
import userRoutes from './routes/userRoutes.js';
import goalRoutes from './routes/goalRoutes.js';
import cors from 'cors';

dotenv.config();
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type'],
  })
);

app.get('/', (req, res) => {
  console.log('request: ', req);
  return res.status(200).send('Hello World!');
});

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

// app.get('/users', async (req, res) => {
//   try {
//     const users = await User.find({});
//     return res.status(200).json({
//       count: users.length,
//       data: users,
//     });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).send({ message: error.message });
//   }
// });

mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(process.env.PORT, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch(err => {
    console.log('Error: ', err);
  });
