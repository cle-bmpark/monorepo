import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { CpuStatusModule } from '@/cpu-status/cpu-status.module';
import { DriverModule } from '@/driver/driver.module';
import { GpuStatusModule } from '@/gpu-status/gpu-status.module';
import { LineModule } from '@/line/line.module';
import { NetworkStatusModule } from '@/network-status/network-status.module';
import { PcDriverModule } from '@/pc-driver/pc-driver.module';
import { PcProgramModule } from '@/pc-program/pc-program.module';
import { PcModule } from '@/pc/pc.module';
import { PositionModule } from '@/position/position.module';
import { ProcessModule } from '@/process/process.module';
import { ProgramModule } from '@/program/program.module';
import { RamStatusModule } from '@/ram-status/ram-status.module';
import { StorageStatusModule } from '@/storage-status/storage-status.module';
import { TempStatusModule } from '@/temp-status/temp-status.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
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
      introspection: true, // 운영환경에서 인트로스펙션 허용 (주의: GraphQL API 스키마 노출됨)
    }),

    // .env 관리
    ConfigModule.forRoot({
      envFilePath: ['.dev.env'],
      isGlobal: true,
    }),

    // PostgreSQL DB 연결
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
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
