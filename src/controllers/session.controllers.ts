import { IUserLogin } from "./../interfaces/users/index";
import { Request, Response } from "express";
import createSessionService from "../services/sessions/createSession.service";

const createSessionController = async (
  request: Request,
  response: Response
) => {
  const sessionData: IUserLogin = request.body;
  const token = await createSessionService(sessionData);
  return response.json({ token });
};

export { createSessionController };
