import { DriverResolver } from '@/driver/driver.resolver';
import { DriverService } from '@/driver/driver.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [DriverResolver, DriverService],
})
export class DriverModule {}
