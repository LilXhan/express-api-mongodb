import { Request, Response } from 'express';
import Song from '../models/song.model';


export const createSong = async(req: Request, res: Response) => {
  try {
    const data = req.body;
    const song = new Song(data);
    song.save();
    res.send(song)
  } catch (error) {
    
  }
};