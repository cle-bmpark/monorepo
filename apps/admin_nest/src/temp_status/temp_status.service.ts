import { Injectable } from '@nestjs/common';
import { CreateTempStatusInput } from './dto/create-temp_status.input';
import { UpdateTempStatusInput } from './dto/update-temp_status.input';

@Injectable()
export class TempStatusService {
  create(_createTempStatusInput: CreateTempStatusInput) {
    return 'This action adds a new tempStatus';
  }

  findAll() {
    return `This action returns all tempStatus`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} tempStatus`;
  }

  update(id: number, _updateTempStatusInput: UpdateTempStatusInput) {
    return `This action updates a #${id.toString()} tempStatus`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} tempStatus`;
  }
}
