import { FindOptionsOrder } from 'typeorm';
import { AccountEntity } from '../../database';

export enum AccountType {
  ADMIN = 'admin',
  TESTER = 'tester',
  DEVELOPER = 'developer',
}

export interface AccountFilters {
  order?: FindOptionsOrder<AccountEntity>;
  offset?: number;
  limit?: number;
}
