import { CreatePcProgramInput } from '@/pc-program/dto/create-pc-program.input';
import { UpdatePcProgramInput } from '@/pc-program/dto/update-pc-program.input';
import { PcProgram } from '@/pc-program/entities/pc-program.entity';
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
