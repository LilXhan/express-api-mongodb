import { store } from "../controllers/playlist.controller";
import { Router } from "express";

const playlistRouter: Router = Router();

playlistRouter.post('', store);

export default playlistRouter