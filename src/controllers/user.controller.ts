import { Request, Response } from "express";
import { User } from "../models/user.model";

export const getUser = async(req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findOne({name: req.params.name})
    const playlists = await user!.populate('playlist');
    console.log([playlists])
    res.status(200).json({
      status: 'OK',
      data: user
    });
  } catch (error) {
    
  }
};

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await User.find({}).populate('playlists');
    res.status(200).json({
      status: 'OK',
      data: users
    });
  } catch (error) {
    
  }
};

export const store = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = req.body;
    const user = new User(data);
    await user.save();
    res.status(201).json({
      status: 'OK',
      data: user
    });
  } catch (error) {
    res.status(500).json({
      status: 'FAILED',
      data: {
        error: error
      }
    });
  };
};