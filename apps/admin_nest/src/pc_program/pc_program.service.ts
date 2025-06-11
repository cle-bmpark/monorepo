import { CreatePcProgramInput } from '@/pc_program/dto/create-pc_program.input';
import { UpdatePcProgramInput } from '@/pc_program/dto/update-pc_program.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PcProgramService {
  create(_createPcProgramInput: CreatePcProgramInput) {
    return 'This action adds a new pcProgram';
  }

  findAll() {
    return `This action returns all pcProgram`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} pcProgram`;
  }

  update(id: number, _updatePcProgramInput: UpdatePcProgramInput) {
    return `This action updates a #${id.toString()} pcProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pcProgram`;
  }
}
