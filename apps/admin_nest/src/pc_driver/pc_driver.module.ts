import { PcDriver } from '@/pc_driver/entities/pc_driver.entity';
import { PcDriverResolver } from '@/pc_driver/pc_driver.resolver';
import { PcDriverService } from '@/pc_driver/pc_driver.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PcDriver])],
  providers: [PcDriverResolver, PcDriverService],
})
export class PcDriverModule {}
