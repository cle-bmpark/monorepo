import { PcProgram } from '@/pc-program/entities/pc-program.entity';
import { PcProgramResolver } from '@/pc-program/pc-program.resolver';
import { PcProgramService } from '@/pc-program/pc-program.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PcProgram])],
  providers: [PcProgramResolver, PcProgramService],
})
export class PcProgramModule {}
