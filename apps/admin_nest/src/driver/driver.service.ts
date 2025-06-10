import { Injectable } from '@nestjs/common';
import { CreateDriverInput } from './dto/create-driver.input';
import { UpdateDriverInput } from './dto/update-driver.input';

@Injectable()
export class DriverService {
  create(_createDriverInput: CreateDriverInput) {
    return 'This action adds a new driver';
  }

  findAll() {
    return `This action returns all driver`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} driver`;
  }

  update(id: number, _updateDriverInput: UpdateDriverInput) {
    return `This action updates a #${id.toString()} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} driver`;
  }
}
