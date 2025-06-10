import { Injectable } from '@nestjs/common';
import { CreateRamStatusInput } from './dto/create-ram_status.input';
import { UpdateRamStatusInput } from './dto/update-ram_status.input';

@Injectable()
export class RamStatusService {
  create(_createRamStatusInput: CreateRamStatusInput) {
    return 'This action adds a new ramStatus';
  }

  findAll() {
    return `This action returns all ramStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} ramStatus`;
  }

  update(id: number, _updateRamStatusInput: UpdateRamStatusInput) {
    return `This action updates a #${id.toString()} ramStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} ramStatus`;
  }
}
