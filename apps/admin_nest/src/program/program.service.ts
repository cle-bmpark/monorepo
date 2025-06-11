import { CreateProgramInput } from '@/program/dto/create-program.input';
import { UpdateProgramInput } from '@/program/dto/update-program.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProgramService {
  create(_createProgramInput: CreateProgramInput) {
    return 'This action adds a new program';
  }

  findAll() {
    return `This action returns all program`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} program`;
  }

  update(id: number, _updateProgramInput: UpdateProgramInput) {
    return `This action updates a #${id.toString()} program`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} program`;
  }
}
