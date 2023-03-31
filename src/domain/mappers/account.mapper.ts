import { AccountEntity } from '../../database';
import { AccountModel } from '../models';

export class AccountMapper {
  entotyToDto(account: AccountEntity): AccountModel {
    return {
      id: account.id,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      name: account.name,
      email: account.email,
    };
  }

  entitiesToDto(accounts: AccountEntity[]): AccountModel[] {
    return accounts.map((account: AccountEntity) => {
      return this.entotyToDto(account);
    });
  }
}
