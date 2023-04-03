import AppDataSource from "../../data-source";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { IUserLogin } from "./../../interfaces/users/index";
import { User } from "../../entities/user.entity";
import { AppError } from "../../errors/AppError";

const createSessionService = async ({}: IUserLogin): Promise<string> => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneByOrFail({
    email: undefined,
  });

  if (!user) {
    throw new AppError("User or password invalid", 401);
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    subject: String(user.id),
    expiresIn: "24h",
  });

  return token;
};

export default createSessionService;
