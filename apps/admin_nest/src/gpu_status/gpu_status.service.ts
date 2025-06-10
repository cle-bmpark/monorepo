import { Injectable } from '@nestjs/common';
import { CreateGpuStatusInput } from './dto/create-gpu_status.input';
import { UpdateGpuStatusInput } from './dto/update-gpu_status.input';

@Injectable()
export class GpuStatusService {
  create(_createGpuStatusInput: CreateGpuStatusInput) {
    return 'This action adds a new gpuStatus';
  }

  findAll() {
    return `This action returns all gpuStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} gpuStatus`;
  }

  update(id: number, _updateGpuStatusInput: UpdateGpuStatusInput) {
    return `This action updates a #${id.toString()} gpuStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} gpuStatus`;
  }
}
