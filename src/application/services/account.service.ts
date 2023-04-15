import { HttpException, Injectable } from '@nestjs/common';
import { AccountRepository } from '../repositories';
import {
  AccountModel,
  AccountMapper,
  NotFoundException,
  AccountFilters,
} from '../../domain';

@Injectable()
export class AccountService {
  constructor(
    private readonly _accountRepository: AccountRepository,
    private readonly _accountMapper: AccountMapper,
  ) {}

  async getById(id: number): Promise<AccountModel> {
    try {
      const result = await this._accountRepository.getById(id);
      if (!result) {
        throw new NotFoundException('Account not found in the database.');
      }
      return this._accountMapper.entityToModel(result);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }

  async getAll(filters: AccountFilters): Promise<AccountModel[]> {
    try {
      const result = await this._accountRepository.getAll(filters);
      return this._accountMapper.entitiesToModel(result);
    } catch (error) {
      throw new HttpException(error.response, error.status);
    }
  }
}
