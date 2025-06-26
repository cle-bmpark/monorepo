import { CreateCpuStatusInput } from '@/cpu-status/dto/create-cpu-status.input';
import { UpdateCpuStatusInput } from '@/cpu-status/dto/update-cpu-status.input';
import { CpuStatus } from '@/cpu-status/entities/cpu-status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CpuStatusService {
  constructor(
    @InjectRepository(CpuStatus)
    private readonly cpuStatusRepository: Repository<CpuStatus>,
  ) {}

  create(_createCpuStatusInput: CreateCpuStatusInput) {
    return 'This action adds a new cpuStatus';
  }

  async findAll(): Promise<CpuStatus[]> {
    return this.cpuStatusRepository.find();
  }

  async findOne(id: number): Promise<CpuStatus | null> {
    return this.cpuStatusRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateCpuStatusInput: UpdateCpuStatusInput) {
    return `This action updates a #${id.toString()} cpuStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} cpuStatus`;
  }
}
