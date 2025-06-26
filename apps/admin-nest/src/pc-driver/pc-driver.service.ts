import { CreatePcDriverInput } from '@/pc-driver/dto/create-pc-driver.input';
import { UpdatePcDriverInput } from '@/pc-driver/dto/update-pc-driver.input';
import { PcDriver } from '@/pc-driver/entities/pc-driver.entity';
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
