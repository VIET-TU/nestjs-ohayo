import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  //   userRepository: UserRepository;
  //   constructor(userRepository: UserRepository) {
  //     this.userRepository = userRepository;
  //   }
  createUser(user: any): any {
    user.createdAt = new Date();
    user.id = 1;
    user.updatedAt = new Date();
    return UserDto.plainToInstance(user);
  }
}
