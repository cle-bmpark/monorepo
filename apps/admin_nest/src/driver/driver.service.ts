import { CreateDriverInput } from '@/driver/dto/create-driver.input';
import { UpdateDriverInput } from '@/driver/dto/update-driver.input';
import { Injectable } from '@nestjs/common';

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
