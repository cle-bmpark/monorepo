import { Program } from '@/program/entities/program.entity';
import { ProgramResolver } from '@/program/program.resolver';
import { ProgramService } from '@/program/program.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Program])],
  providers: [ProgramResolver, ProgramService],
})
export class ProgramModule {}
