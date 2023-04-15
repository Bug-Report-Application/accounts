import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

const typeOrmOptions: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: +process.env.POSTGRES_PORT,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [path.join(`${process.cwd()}`, 'dist', '**', '*.entity{.js,.ts}')],
  migrations: [
    path.join(`${process.cwd()}`, 'dist', '**', 'migrations', '*{.js,.ts}'),
  ],
  migrationsRun: true,
};

export { typeOrmOptions };
