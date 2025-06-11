import { CreateCpuStatusInput } from '@/cpu_status/dto/create-cpu_status.input';
import { UpdateCpuStatusInput } from '@/cpu_status/dto/update-cpu_status.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CpuStatusService {
  create(_createCpuStatusInput: CreateCpuStatusInput) {
    return 'This action adds a new cpuStatus';
  }

  findAll() {
    return `This action returns all cpuStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} cpuStatus`;
  }

  update(id: number, _updateCpuStatusInput: UpdateCpuStatusInput) {
    return `This action updates a #${id.toString()} cpuStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} cpuStatus`;
  }
}
