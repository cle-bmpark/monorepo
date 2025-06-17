import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  create(_createUserInput: CreateUserInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} user`;
  }

  update(id: number, _updateUserInput: UpdateUserInput) {
    return `This action updates a #${id.toString()} user`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} user`;
  }
}
