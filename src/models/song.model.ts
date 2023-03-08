import { Schema, model } from 'mongoose';

interface ISong {
  name: string,
  artist: string,
  album: string,
  year: number,
  genre: string,
  duration: number,
};

const songSchema = new Schema<ISong>({
  name: {type: String, required: true},
  artist: {type: String, required: true},
  album: {type: String, required: true},
  year: {type: Number, required: true},
  genre: {type: String, required: true},
  duration: {type: Number, required: true},
});

const Song = model<ISong>('Song', songSchema);

export default Song;