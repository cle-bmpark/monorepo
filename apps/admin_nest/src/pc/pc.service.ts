import { CreatePcInput } from '@/pc/dto/create-pc.input';
import { UpdatePcInput } from '@/pc/dto/update-pc.input';
import { Pc } from '@/pc/entities/pc.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PcService {
  constructor(
    @InjectRepository(Pc)
    private readonly pcRepository: Repository<Pc>,
  ) {} // Pc Entity 에 대한 TypeORM Repository 넣기 -> Database 작업 수행

  create(_createPcInput: CreatePcInput) {
    return 'This action adds a new pc';
  }

  async findAll(): Promise<Pc[]> {
    return this.pcRepository.find({
      relations: [
        'line',
        'position',
        'process',
        'cpuStatus',
        'gpuStatus',
        'networkStatus',
        'ramStatus',
        'storageStatus',
        'tempStatus',
        'pcDrivers',
        'pcDrivers.driver',
        'pcPrograms',
        'pcPrograms.program',
      ],
    });
  }

  async findOne(id: number): Promise<Pc | null> {
    return this.pcRepository.findOne({
      where: { id },
      relations: [
        'line',
        'position',
        'process',
        'cpuStatus',
        'gpuStatus',
        'networkStatus',
        'ramStatus',
        'storageStatus',
        'tempStatus',
        'pcDrivers',
        'pcDrivers.driver',
        'pcPrograms',
        'pcPrograms.program',
      ],
    });
  }

  update(id: number, _updatePcInput: UpdatePcInput) {
    return `This action updates a #${id.toString()} pc`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pc`;
  }
}
