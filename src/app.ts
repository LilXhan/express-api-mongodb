import express, { Application } from 'express';
import userRouter from './routers/user.router';
import playlistRouter from './routers/playlist.router';
import songRouter from './routers/song.router';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.config';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use('/api/v1/users', userRouter);
app.use('/api/v1/playlist', playlistRouter)
app.use('/api/v1/songs', songRouter)


const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  connectDB();
});