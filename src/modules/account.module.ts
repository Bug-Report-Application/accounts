import { Module } from '@nestjs/common';
import { AccountEntity } from '../entities';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccountRepository } from '../repositories';
import { AccountService } from '../services';
import { AccountMapper } from '../mappers';
import { AccountController } from '../controllers';

@Module({
  imports: [TypeOrmModule.forFeature([AccountEntity])],
  exports: [TypeOrmModule],
  controllers: [AccountController],
  providers: [AccountRepository, AccountService, AccountMapper],
})
export class AccountModule {}
