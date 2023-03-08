import { createSong } from "../controllers/song.controller";
import { Router } from "express";

const songRouter: Router = Router();

songRouter.post('', createSong)

export default songRouter;