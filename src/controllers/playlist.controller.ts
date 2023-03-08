import { Request, Response } from "express";
import { Playlist } from "../models/playlist.model";

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const playlist = new Playlist(data);
    await playlist.save();
    // const user = await User.findOne({ _id: data.user_id });
    // user!.playlists.push(playlist._id);
    // await user!.save();
    res.status(201).json({
      status: "OK",
      data: playlist
    });
  } catch (error: any) {
    res.status(500).json({
      status: "FAILED",
      data: {
        error: error.message
      }
    });
  }
}