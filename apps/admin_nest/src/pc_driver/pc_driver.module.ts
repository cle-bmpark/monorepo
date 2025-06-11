import { PcDriverResolver } from '@/pc_driver/pc_driver.resolver';
import { PcDriverService } from '@/pc_driver/pc_driver.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [PcDriverResolver, PcDriverService],
})
export class PcDriverModule {}
