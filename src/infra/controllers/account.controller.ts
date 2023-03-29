import { Controller, Get } from '@nestjs/common';
import { AccountService } from '../../application';
import { AccountModel } from '../../domain';

@Controller('/accounts')
export class AccountController {
  constructor(private readonly _accountService: AccountService) {}

  @Get()
  async getAll(): Promise<AccountModel[]> {
    return await this._accountService.getAll();
  }
}
