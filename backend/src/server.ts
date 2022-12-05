import dotenv from 'dotenv';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
// Now this app is an express application
const app = express();
dotenv.config();
app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: ['http://localhost:4200'],
  })
);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL!);
    console.log('Connected  to mongodb');
  } catch (error) {
    throw error;
  }
};
mongoose.connection.on('disconnected', () => {
  console.log('mongodb disconnected');
});

mongoose.connection.on('connected', () => {
  console.log('mongodb connected');
});

// use this router  on this address
app.use('/api/foods', foodRouter);
app.use('/api/users', userRouter);

const port = 4000;
app.listen(port, () => {
  connect();
  console.log('website served on  http://localhost:' + port);
});
