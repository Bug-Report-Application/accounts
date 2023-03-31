import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../../database';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly _accountRepository: Repository<AccountEntity>,
  ) {}

  getAll(): Promise<AccountEntity[]> {
    return this._accountRepository.find();
  }
}
