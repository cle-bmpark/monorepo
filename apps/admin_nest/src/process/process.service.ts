import { CreateProcessInput } from '@/process/dto/create-process.input';
import { UpdateProcessInput } from '@/process/dto/update-process.input';
import { Process } from '@/process/entities/process.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(Process)
    private readonly processRepository: Repository<Process>,
  ) {}

  create(_createProcessInput: CreateProcessInput) {
    return 'This action adds a new process';
  }

  async findAll(): Promise<Process[]> {
    return this.processRepository.find();
  }

  async findOne(id: number): Promise<Process | null> {
    return this.processRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateProcessInput: UpdateProcessInput) {
    return `This action updates a #${id.toString()} process`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} process`;
  }
}
