import { CreatePcDriverInput } from '@/pc_driver/dto/create-pc_driver.input';
import { UpdatePcDriverInput } from '@/pc_driver/dto/update-pc_driver.input';
import { Injectable } from '@nestjs/common';

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
