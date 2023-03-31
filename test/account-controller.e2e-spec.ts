import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/infra/modules/app.module';
import { AccountService } from '../src/application';
import { mockAccountsModelResponse } from '../src/mock';

describe('AccountController (e2e)', () => {
  let app: INestApplication;
  const mockAccountService = {
    getAll: jest.fn().mockResolvedValue(mockAccountsModelResponse),
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AccountService)
      .useValue(mockAccountService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('requests', () => {
    it('@Get() /accounts ', async () => {
      const response = await request(app.getHttpServer()).get('/accounts');
      expect(response.body).toEqual(mockAccountsModelResponse);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
