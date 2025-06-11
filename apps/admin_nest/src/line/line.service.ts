import { CreateLineInput } from '@/line/dto/create-line.input';
import { UpdateLineInput } from '@/line/dto/update-line.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class LineService {
  create(_createLineInput: CreateLineInput) {
    return 'This action adds a new line';
  }

  findAll() {
    return `This action returns all line`;
  }

  findOne(id: number) {
    return `This action returns a #${id.toString()} line`;
  }

  update(id: number, _updateLineInput: UpdateLineInput) {
    return `This action updates a #${id.toString()} line`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} line`;
  }
}
