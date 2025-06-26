import { DriverResolver } from '@/driver/driver.resolver';
import { DriverService } from '@/driver/driver.service';
import { Driver } from '@/driver/entities/driver.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Driver])],
  providers: [DriverResolver, DriverService],
})
export class DriverModule {}
