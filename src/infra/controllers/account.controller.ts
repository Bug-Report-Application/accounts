import { Controller, Get, Param, Query } from '@nestjs/common';
import { AccountService } from '../../application';
import { AccountFilters, AccountModel } from '../../domain';

@Controller('/accounts')
export class AccountController {
  constructor(private readonly _accountService: AccountService) {}

  @Get(':id')
  async getById(@Param('id') id: number): Promise<AccountModel> {
    return await this._accountService.getById(id);
  }

  @Get()
  async getAll(@Query() filters: AccountFilters): Promise<AccountModel[]> {
    return await this._accountService.getAll(filters);
  }
}
