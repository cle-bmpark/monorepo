import { Module } from '@nestjs/common';
import { PcResolver } from './pc.resolver';
import { PcService } from './pc.service';

@Module({
  providers: [PcResolver, PcService],
})
export class PcModule {}
