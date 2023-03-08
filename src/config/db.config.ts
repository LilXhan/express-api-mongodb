import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoURL = process.env.MONGO_URL!;

const connectDB = async () => {
  try {
    await connect(mongoURL);
    console.log('Database connected...')
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  };
};

export default connectDB