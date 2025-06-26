import { PcDriver } from '@/pc-driver/entities/pc-driver.entity';
import { PcDriverResolver } from '@/pc-driver/pc-driver.resolver';
import { PcDriverService } from '@/pc-driver/pc-driver.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PcDriver])],
  providers: [PcDriverResolver, PcDriverService],
})
export class PcDriverModule {}
