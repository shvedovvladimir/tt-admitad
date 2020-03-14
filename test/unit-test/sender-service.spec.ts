import { Test } from '@nestjs/testing';
import { DI_CONSTANTS, LOGGER } from '../../src/app/tt-admitad-api-v1/di-constants';
import { LoggerMock } from './mock/logger-mock';
import { SenderService } from '../../src/app/tt-admitad-api-v1/services/sender-service/sender.service';
import { RedisMock } from './mock/redis.mock';
import { GotProxyServiceMock } from './mock/got-proxy.service.mock';

describe('SenderService', () => {
  let senderService = null;
  const redisMock = new RedisMock();

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        providers: [
            SenderService,
            { provide: LOGGER, useValue: new LoggerMock() },
            {
              provide: DI_CONSTANTS.IRedis,
              useValue: redisMock,
            },
            { provide: DI_CONSTANTS.IGotProxyService, useValue: new GotProxyServiceMock() },
        ],
      }).compile();

    senderService = module
      .get<SenderService>(SenderService);

    redisMock.cache = new Map();
  });

  describe('mobile push notifications handle function flow', () => {
    it('should send success false result to notifications service if not found any tokens', async () => {
      
    });
  });
});