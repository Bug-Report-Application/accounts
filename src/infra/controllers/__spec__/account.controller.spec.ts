import { AccountMapper } from '../../../domain';
import { AccountRepository, AccountService } from '../../../application';
import { AccountController } from '../account.controller';
import { mockAccountsModelResponse } from '../../../mock';

describe('AccountController', () => {
  let accountController: AccountController;
  let accountService: AccountService;
  let accountRepository: AccountRepository;
  let accountMapper: AccountMapper;

  beforeEach(() => {
    accountService = new AccountService(accountRepository, accountMapper);
    accountController = new AccountController(accountService);
  });

  describe('getAll', () => {
    it('should return an array of accounts', async () => {
      jest
        .spyOn(accountService, 'getAll')
        .mockImplementationOnce(() =>
          Promise.resolve(mockAccountsModelResponse),
        );

      expect(await accountController.getAll()).toBe(mockAccountsModelResponse);
    });
  });
});
