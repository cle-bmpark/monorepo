import { CreatePcDriverInput } from '@/pc_driver/dto/create-pc_driver.input';
import { UpdatePcDriverInput } from '@/pc_driver/dto/update-pc_driver.input';
import { PcDriver } from '@/pc_driver/entities/pc_driver.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PcDriverService {
  constructor(
    @InjectRepository(PcDriver)
    private readonly pcDriverRepository: Repository<PcDriver>,
  ) {}

  create(_createPcDriverInput: CreatePcDriverInput) {
    return 'This action adds a new pcDriver';
  }

  async findAll(): Promise<PcDriver[]> {
    return this.pcDriverRepository.find({
      relations: ['driver'],
    });
  }

  async findOne(id: number): Promise<PcDriver | null> {
    return this.pcDriverRepository.findOne({
      where: { id },
      relations: ['driver'],
    });
  }

  update(id: number, _updatePcDriverInput: UpdatePcDriverInput) {
    return `This action updates a #${id.toString()} pcDriver`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} pcDriver`;
  }
}
