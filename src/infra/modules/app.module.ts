import * as path from 'path';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AccountModule } from './account.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [
        path.join(`${process.cwd()}`, 'dist', '**', '*.entity{.js,.ts}'),
      ],
      migrations: [
        path.join(`${process.cwd()}`, 'dist', '**', 'migrations', '*{.js,.ts}'),
      ],
      migrationsRun: true,
    }),
    AccountModule,
  ],
})
export class AppModule {}
