import { Injectable } from '@nestjs/common';
import { CreateProcessInput } from './dto/create-process.input';
import { UpdateProcessInput } from './dto/update-process.input';

@Injectable()
export class ProcessService {
  create(_createProcessInput: CreateProcessInput) {
    return 'This action adds a new process';
  }

  findAll() {
    return `This action returns all process`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} process`;
  }

  update(id: number, _updateProcessInput: UpdateProcessInput) {
    return `This action updates a #${id.toString()} process`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} process`;
  }
}
