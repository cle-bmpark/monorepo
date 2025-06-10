import { Injectable } from '@nestjs/common';
import { CreatePcDriverInput } from './dto/create-pc_driver.input';
import { UpdatePcDriverInput } from './dto/update-pc_driver.input';

@Injectable()
export class PcDriverService {
  create(_createPcDriverInput: CreatePcDriverInput) {
    return 'This action adds a new pcDriver';
  }

  findAll() {
    return `This action returns all pcDriver`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} pcDriver`;
  }

  update(id: number, _updatePcDriverInput: UpdatePcDriverInput) {
    return `This action updates a #${id.toString()} pcDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pcDriver`;
  }
}
