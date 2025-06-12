import { CreatePcProgramInput } from '@/pc_program/dto/create-pc_program.input';
import { UpdatePcProgramInput } from '@/pc_program/dto/update-pc_program.input';
import { PcProgram } from '@/pc_program/entities/pc_program.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PcProgramService {
  constructor(
    @InjectRepository(PcProgram)
    private readonly pcProgramRepository: Repository<PcProgram>,
  ) {}

  create(_createPcProgramInput: CreatePcProgramInput) {
    return 'This action adds a new pcProgram';
  }

  async findAll(): Promise<PcProgram[]> {
    return this.pcProgramRepository.find({
      relations: ['program'],
    });
  }

  async findOne(id: number): Promise<PcProgram | null> {
    return this.pcProgramRepository.findOne({
      where: { id },
      relations: ['program'],
    });
  }

  update(id: number, _updatePcProgramInput: UpdatePcProgramInput) {
    return `This action updates a #${id.toString()} pcProgram`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pcProgram`;
  }
}
