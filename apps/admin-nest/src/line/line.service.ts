import { CreateLineInput } from '@/line/dto/create-line.input';
import { UpdateLineInput } from '@/line/dto/update-line.input';
import { Line } from '@/line/entities/line.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LineService {
  constructor(
    @InjectRepository(Line)
    private readonly lineRepository: Repository<Line>,
  ) {}

  create(_createLineInput: CreateLineInput) {
    return 'This action adds a new line';
  }

  async findAll(): Promise<Line[]> {
    return this.lineRepository.find();
  }

  async findOne(id: number): Promise<Line | null> {
    return this.lineRepository.findOne({
      where: { id },
    });
  }

  update(id: number, _updateLineInput: UpdateLineInput) {
    return `This action updates a #${id.toString()} line`;
  }

  remove(id: number) {
    return `This action removes a #${id.toString()} line`;
  }
}
