import { CreateTempStatusInput } from '@/temp-status/dto/create-temp-status.input';
import { UpdateTempStatusInput } from '@/temp-status/dto/update-temp-status.input';
import { TempStatus } from '@/temp-status/entities/temp-status.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TempStatusService {
  constructor(
    @InjectRepository(TempStatus)
    private readonly tempStatusRepository: Repository<TempStatus>,
  ) {}

  create(_createTempStatusInput: CreateTempStatusInput) {
    return 'This action adds a new tempStatus';
  }

  async findAll(): Promise<TempStatus[]> {
    return this.tempStatusRepository.find();
  }

  async findOne(id: number): Promise<TempStatus | null> {
    return this.tempStatusRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateTempStatusInput: UpdateTempStatusInput) {
    return `This action updates a #${id.toString()} tempStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} tempStatus`;
  }
}
