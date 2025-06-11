import { PcResolver } from '@/pc/pc.resolver';
import { PcService } from '@/pc/pc.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PcResolver, PcService],
})
export class PcModule {}
