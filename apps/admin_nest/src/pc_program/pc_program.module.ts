import { PcProgram } from '@/pc_program/entities/pc_program.entity';
import { PcProgramResolver } from '@/pc_program/pc_program.resolver';
import { PcProgramService } from '@/pc_program/pc_program.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PcProgram])],
  providers: [PcProgramResolver, PcProgramService],
})
export class PcProgramModule {}
