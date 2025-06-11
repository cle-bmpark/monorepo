import { PcProgramResolver } from '@/pc_program/pc_program.resolver';
import { PcProgramService } from '@/pc_program/pc_program.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PcProgramResolver, PcProgramService],
})
export class PcProgramModule {}
