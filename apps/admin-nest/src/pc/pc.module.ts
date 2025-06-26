import { Pc } from '@/pc/entities/pc.entity';
import { PcResolver } from '@/pc/pc.resolver';
import { PcService } from '@/pc/pc.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Pc])],
  providers: [PcResolver, PcService],
})
export class PcModule {}
