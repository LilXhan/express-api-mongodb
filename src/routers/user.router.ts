import { Router } from "express";
import { store, getAllUsers, getUser } from "../controllers/user.controller";

const userRouter: Router = Router();

userRouter.post('', store);
userRouter.get('', getAllUsers);
userRouter.get('/:name', getUser);

export default userRouter;