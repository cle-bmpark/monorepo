import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { CpuStatusModule } from '@/cpu_status/cpu_status.module';
import { DriverModule } from '@/driver/driver.module';
import { GpuStatusModule } from '@/gpu_status/gpu_status.module';
import { LineModule } from '@/line/line.module';
import { NetworkStatusModule } from '@/network_status/network_status.module';
import { PcModule } from '@/pc/pc.module';
import { PcDriverModule } from '@/pc_driver/pc_driver.module';
import { PcProgramModule } from '@/pc_program/pc_program.module';
import { PositionModule } from '@/position/position.module';
import { ProcessModule } from '@/process/process.module';
import { ProgramModule } from '@/program/program.module';
import { RamStatusModule } from '@/ram_status/ram_status.module';
import { StorageStatusModule } from '@/storage_status/storage_status.module';
import { TempStatusModule } from '@/temp_status/temp_status.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './schema.gql'), // 자동 생성된 스키마가 생성될 경로
      sortSchema: true, // 스키마 사전순 정렬
      playground: true,
      csrfPrevention: false,
    }),

    // PostgreSQL DB 연결
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-d14h9j3uibrs73aets30-a.oregon-postgres.render.com',
      port: 5432,
      username: 'monitoring_admin_db_user',
      password: 'EVeXmxaq2gJpbyDtaK6T65fXxVm1jfV8', // .env 파일 관리 필요
      database: 'monitoring_admin_db',
      entities: [__dirname + '/**/*.entity.{ts,js}'],
      // synchronize: true, // 개발 시 true (운영 환경에서는 false 권장)
      logging: 'all',
      ssl: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    PcModule,
    LineModule,
    PositionModule,
    ProcessModule,
    CpuStatusModule,
    DriverModule,
    GpuStatusModule,
    NetworkStatusModule,
    PcDriverModule,
    PcProgramModule,
    ProgramModule,
    RamStatusModule,
    StorageStatusModule,
    TempStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
