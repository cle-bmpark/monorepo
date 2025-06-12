import { CreateTempStatusInput } from '@/temp_status/dto/create-temp_status.input';
import { UpdateTempStatusInput } from '@/temp_status/dto/update-temp_status.input';
import { TempStatus } from '@/temp_status/entities/temp_status.entity';
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
