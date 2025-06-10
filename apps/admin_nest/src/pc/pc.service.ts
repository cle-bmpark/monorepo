import { Injectable } from '@nestjs/common';
import { CreatePcInput } from './dto/create-pc.input';
import { UpdatePcInput } from './dto/update-pc.input';

@Injectable()
export class PcService {
  create(_createPcInput: CreatePcInput) {
    return 'This action adds a new pc';
  }

  findAll() {
    return `This action returns all pc`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} pc`;
  }

  update(id: number, _updatePcInput: UpdatePcInput) {
    return `This action updates a #${id.toString()} pc`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pc`;
  }
}
