import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AccountEntity } from '../../database';
import { AccountFilters } from '../../domain';

@Injectable()
export class AccountRepository {
  constructor(
    @InjectRepository(AccountEntity)
    private readonly _accountRepository: Repository<AccountEntity>,
  ) {}

  async getById(id: number): Promise<AccountEntity> {
    return await this._accountRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getAll(filters: AccountFilters): Promise<AccountEntity[]> {
    return await this._accountRepository.find({
      order: filters.order,
      skip: filters.offset,
      take: filters.limit,
    });
  }
}
