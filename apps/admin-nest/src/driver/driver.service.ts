import { CreateDriverInput } from '@/driver/dto/create-driver.input';
import { UpdateDriverInput } from '@/driver/dto/update-driver.input';
import { Driver } from '@/driver/entities/driver.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class DriverService {
  constructor(
    @InjectRepository(Driver)
    private readonly driverRepository: Repository<Driver>,
  ) {}

  create(_createDriverInput: CreateDriverInput) {
    return 'This action adds a new driver';
  }

  async findAll(): Promise<Driver[]> {
    return this.driverRepository.find();
  }

  async findOne(id: number): Promise<Driver | null> {
    return this.driverRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateDriverInput: UpdateDriverInput) {
    return `This action updates a #${id.toString()} driver`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} driver`;
  }
}
