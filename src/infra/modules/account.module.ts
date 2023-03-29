import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AccountRepository, AccountService } from '../../application';
import { AccountController } from '../controllers';
import { AccountMapper } from '../../domain/mappers';
import { AccountEntity } from '../../database/entities/account.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  exports: [TypeOrmModule],
  controllers: [AccountController],
  providers: [AccountRepository, AccountService, AccountMapper],
})
export class AccountModule {}
