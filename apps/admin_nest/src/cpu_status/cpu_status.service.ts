import { CreateCpuStatusInput } from '@/cpu_status/dto/create-cpu_status.input';
import { UpdateCpuStatusInput } from '@/cpu_status/dto/update-cpu_status.input';
import { CpuStatus } from '@/cpu_status/entities/cpu_status.entity';
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
