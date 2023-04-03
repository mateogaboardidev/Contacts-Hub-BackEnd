import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controllers/users.controllers";
import {
  userSerializer,
  userUpdateSerializer,
} from "../serializers/user.serializers";
import ensureDataIsValidMiddleware from "../middlewares/ensureDataIsValid.middleware";
import ensureAuthMiddleware from "../middlewares/ensureAuthToken.middleware";

const userRoutes = Router();

userRoutes.post(
  "",
  ensureDataIsValidMiddleware(userSerializer),
  createUserController
);
userRoutes.get("", ensureAuthMiddleware, listUserController);
userRoutes.patch(
  "/id",
  ensureAuthMiddleware,
  ensureDataIsValidMiddleware(userUpdateSerializer),
  updateUserController
);
userRoutes.delete("/id", ensureAuthMiddleware, deleteUserController);

export default userRoutes;
