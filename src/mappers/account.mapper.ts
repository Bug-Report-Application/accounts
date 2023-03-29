import { AccountDto } from '../dtos';
import { AccountEntity } from '../entities';

export class AccountMapper {
  entotyToDto(account: AccountEntity): AccountDto {
    return {
      id: account.id,
      createdAt: account.createdAt,
      updatedAt: account.updatedAt,
      name: account.name,
      email: account.email,
    };
  }

  entitiesToDto(accounts: AccountEntity[]): AccountDto[] {
    return accounts.map((account: AccountEntity) => {
      return this.entotyToDto(account);
    });
  }
}
