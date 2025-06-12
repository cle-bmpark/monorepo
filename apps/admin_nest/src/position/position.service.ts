import { CreatePositionInput } from '@/position/dto/create-position.input';
import { UpdatePositionInput } from '@/position/dto/update-position.input';
import { Position } from '@/position/entities/position.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PositionService {
  constructor(
    @InjectRepository(Position)
    private readonly positionRepository: Repository<Position>,
  ) {}

  create(_createPositionInput: CreatePositionInput) {
    return 'This action adds a new position';
  }

  async findAll(): Promise<Position[]> {
    return this.positionRepository.find();
  }

  async findOne(id: number): Promise<Position | null> {
    return this.positionRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updatePositionInput: UpdatePositionInput) {
    return `This action updates a #${id.toString()} position`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} position`;
  }
}
