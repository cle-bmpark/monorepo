import { Module } from '@nestjs/common';
import { PcDriverResolver } from './pc_driver.resolver';
import { PcDriverService } from './pc_driver.service';

@Module({
  providers: [PcDriverResolver, PcDriverService],
})
export class PcDriverModule {}
