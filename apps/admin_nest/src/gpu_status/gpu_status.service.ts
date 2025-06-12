import { CreateGpuStatusInput } from '@/gpu_status/dto/create-gpu_status.input';
import { UpdateGpuStatusInput } from '@/gpu_status/dto/update-gpu_status.input';
import { GpuStatus } from '@/gpu_status/entities/gpu_status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GpuStatusService {
  constructor(
    @InjectRepository(GpuStatus)
    private readonly gpuStatusRepository: Repository<GpuStatus>,
  ) {}

  create(_createGpuStatusInput: CreateGpuStatusInput) {
    return 'This action adds a new gpuStatus';
  }

  async findAll(): Promise<GpuStatus[]> {
    return this.gpuStatusRepository.find();
  }

  async findOne(id: number): Promise<GpuStatus | null> {
    return this.gpuStatusRepository.findOne({
      where: { id },
    });
  }
  update(id: number, _updateGpuStatusInput: UpdateGpuStatusInput) {
    return `This action updates a #${id.toString()} gpuStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} gpuStatus`;
  }
}
