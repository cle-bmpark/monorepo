import { Module } from '@nestjs/common';
import { DriverResolver } from './driver.resolver';
import { DriverService } from './driver.service';

@Module({
  providers: [DriverResolver, DriverService],
})
export class DriverModule {}
