import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";

const deleteUserService = async (userId: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id: userId,
  });

  if (findUser) {
    const deletedUser = userRepository.softRemove(findUser);

    return deletedUser;
  }
};

export default deleteUserService;
