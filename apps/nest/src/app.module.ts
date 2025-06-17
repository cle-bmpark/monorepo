import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { UserModule } from '@/user/user.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './schema.gql'), // 자동 생성된 스키마가 생성될 경로
      sortSchema: true, // 스키마 사전순 정렬
      playground: false, // playground 사용
      csrfPrevention: false, // CSRF 오류
      introspection: true, // 운영환경에서 인트로스펙션 허용 (주의: GraphQL API 스키마 노출됨)
    }),
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
