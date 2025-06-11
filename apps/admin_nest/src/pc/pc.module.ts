import { PcResolver } from '@/pc/pc.resolver';
import { PcService } from '@/pc/pc.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Pc } from './entities/pc.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Pc])],
  providers: [PcResolver, PcService],
})
export class PcModule {}
