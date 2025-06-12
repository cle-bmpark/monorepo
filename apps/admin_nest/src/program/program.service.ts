import { CreateProgramInput } from '@/program/dto/create-program.input';
import { UpdateProgramInput } from '@/program/dto/update-program.input';
import { Program } from '@/program/entities/program.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProgramService {
  constructor(
    @InjectRepository(Program)
    private readonly programRepository: Repository<Program>,
  ) {}

  create(_createProgramInput: CreateProgramInput) {
    return 'This action adds a new program';
  }

  async findAll(): Promise<Program[]> {
    return this.programRepository.find();
  }

  async findOne(id: number): Promise<Program | null> {
    return this.programRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateProgramInput: UpdateProgramInput) {
    return `This action updates a #${id.toString()} program`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} program`;
  }
}
