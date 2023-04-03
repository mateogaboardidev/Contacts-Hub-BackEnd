import createUserService from "../services/users/createUser.service";
import listUserService from "../services/users/listUser.service";
import updateUserService from "../services/users/updateUser.service";
import deleteUserService from "../services/users/deleteUser.service";
import { IUserRequest, IUserUpdate } from "./../interfaces/users/index";
import { Request, Response } from "express";

const createUserController = async (request: Request, response: Response) => {
  const userData: IUserRequest = request.body;
  const newUser = await createUserService(userData);
  return response.status(201).json(newUser);
};

const listUserController = async (request: Request, response: Response) => {
  const users = await listUserService();
  return response.json(users);
};

const updateUserController = async (request: Request, response: Response) => {
  const userData: IUserUpdate = request.body;
  const userId = request.params.id;
  const updatedUser = await updateUserService(userData, userId);
  return response.json(updatedUser);
};

const deleteUserController = async (request: Request, response: Response) => {
  const userId = request.params.id;
  const deleteUser = await deleteUserService(userId);
  return response.json(deleteUser);
};

export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
};
