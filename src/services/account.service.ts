import { HttpException, Injectable } from '@nestjs/common';
import { AccountRepository } from '../repositories';
import { AccountDto } from '../dtos';
import { AccountMapper } from '../mappers';

@Injectable()
export class AccountService {
  constructor(
    private readonly _accountRepository: AccountRepository,
    private readonly _accountMapper: AccountMapper,
  ) {}

  async getAll(): Promise<AccountDto[]> {
    try {
      const result = await this._accountRepository.getAll();
      return this._accountMapper.entitiesToDto(result);
    } catch (error) {
      throw new HttpException(error.response, error.statusCode);
    }
  }
}
