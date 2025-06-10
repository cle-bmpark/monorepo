import { Module } from '@nestjs/common';
import { PcProgramResolver } from './pc_program.resolver';
import { PcProgramService } from './pc_program.service';

@Module({
  providers: [PcProgramResolver, PcProgramService],
})
export class PcProgramModule {}
