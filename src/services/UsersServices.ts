import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UsersRepository);
  }

  async findByEmail<User>(email: string) {
    const userExists = await this.usersRepository.findOne({
      email,
    });
    if (userExists) {
      return userExists;
    }
  }

  async create(email: string) {
    //Verify if user exists
    const userExists = await this.usersRepository.findOne({
      email,
    });

    //If it exists, return user
    if (userExists) {
      return userExists;
    }

    //If it doesn't exist, save it
    const user = this.usersRepository.create({
      email,
    });
    await this.usersRepository.save(user);
    return user;
  }
}

export { UsersService };
