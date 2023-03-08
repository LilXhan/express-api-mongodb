import { Schema, model, ObjectId } from 'mongoose';
import { IPlaylist } from './playlist.model';

interface IUser {
  name: string,
  email: string,
  password: string,
  date_born: Date,
  last_session: Date,
  updatedAt: Date,
  CreatedAt: Date,
  playlist: Array<ObjectId | IPlaylist >
}

const userSchema = new Schema<IUser>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  date_born: {type: Date, required: false},
  last_session: {type: Date, default: Date.now},
  playlist: [{type: Schema.Types.ObjectId, ref: 'Playlist'}]
}, {timestamps: true})

const User = model<IUser>('User', userSchema);

export { User, IUser };