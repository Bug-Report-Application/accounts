import { Controller, Get } from '@nestjs/common';
import { AccountDto } from '../dtos';
import { AccountService } from '../services';

@Controller('/accounts')
export class AccountController {
  constructor(private readonly _accountService: AccountService) {}

  @Get()
  async getAll(): Promise<AccountDto[]> {
    return await this._accountService.getAll();
  }
}
