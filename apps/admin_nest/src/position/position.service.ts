import { CreatePositionInput } from '@/position/dto/create-position.input';
import { UpdatePositionInput } from '@/position/dto/update-position.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PositionService {
  create(_createPositionInput: CreatePositionInput) {
    return 'This action adds a new position';
  }

  findAll() {
    return `This action returns all position`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} position`;
  }

  update(id: number, _updatePositionInput: UpdatePositionInput) {
    return `This action updates a #${id.toString()} position`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} position`;
  }
}
