import { Schema, model, ObjectId } from 'mongoose';

interface IPlaylist {
  _id: ObjectId,
  name: string,
  user_id: ObjectId,
  songs: Array<ObjectId>
};

const playlistSchema = new Schema<IPlaylist>({
  name: {type: String, required: true},
  user_id: {type: Schema.Types.ObjectId, ref: 'User'},
  songs: [{type: Schema.Types.ObjectId, ref: 'Song'}]
});

const Playlist = model<IPlaylist>('Playlist', playlistSchema);

export { Playlist, IPlaylist };