import { Test } from '@nestjs/testing';
import { DI_CONSTANTS, LOGGER } from '../../src/app/tt-admitad-api-v1/di-constants';
import { LoggerMock } from './mock/logger-mock';
import { SenderService } from '../../src/app/tt-admitad-api-v1/services/sender-service/sender.service';
import { RedisMock } from './mock/redis.mock';
import { GotProxyServiceMock } from './mock/got-proxy.service.mock';
import { ISenderService } from '../../src/app/tt-admitad-api-v1/services/sender-service/sender.service.interface';
import * as httpMocks from 'node-mocks-http';

const TTL = 61;

describe('SenderService', () => {
  let senderService: ISenderService;
  const redisMock = new RedisMock();

  beforeEach(async (done) => {
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

    done();
  });

  it('Should pipe buffer to resp from got response to express resp', async (done) => {
    const resp = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    });

    await senderService.getFileAndSend('some_url', resp, null);
    resp.on('end', () => {
      expect(resp._getBuffer()).toBeInstanceOf(Buffer);
      expect(resp._getBuffer().toString()).toBe('some_data');

      done();
    });
  });

  it('Should pipe buffer to resp from got response by provided imgDb, should set Buffer to redis with ttl',
  async (done) => {
    const imgDb = {
      imageId: 1,
      type: 'string;',
      title: 'string;',
      imageUrl: 'string;',
      images: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };

    const resp = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    });

    await senderService.getFileAndSend('some_url', resp, imgDb);
    resp.on('end', async () => {
      expect(resp._getBuffer()).toBeInstanceOf(Buffer);
      expect(resp._getBuffer().toString()).toBe('some_data');
      expect(redisMock.getBuffer(imgDb.imageId.toString())).toBeInstanceOf(Buffer);
      expect(redisMock.getBuffer(imgDb.imageId.toString()).toString()).toBe('some_data');

      const promise = new Promise((resolve) => setTimeout(resolve, TTL));
      await promise;

      expect(redisMock.getBuffer(imgDb.imageId.toString())).toBe(undefined);

      done();
    });
  }, 70000);

  it('Should pipe buffer to resp from redis', async (done) => {
    const imgDb = {
      imageId: 1,
      type: 'string;',
      title: 'string;',
      imageUrl: 'string;',
      images: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };

    const resp_for_set_into_redis = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    });

    const resp = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    });

    await senderService.getFileAndSend('some_url', resp_for_set_into_redis, imgDb);
    resp_for_set_into_redis.on('end', async () => {
      expect(redisMock.getBuffer(imgDb.imageId.toString())).toBeInstanceOf(Buffer);
      expect(redisMock.getBuffer(imgDb.imageId.toString()).toString()).toBe('some_data');

      await senderService.getFileAndSend('some_url', resp, imgDb);
      resp.on('end', async () => {
        expect(resp._getBuffer()).toBeInstanceOf(Buffer);
        expect(resp._getBuffer().toString()).toBe('some_data');

        done();
      });
    });
  }, 70000);

  it('Should throw error if incorrect img url, do not cache img', async (done) => {
    const imgDb = {
      imageId: 2,
      type: 'string;',
      title: 'string;',
      imageUrl: 'some_url_not_valid',
      images: null,
      createdAt: new Date(),
      updatedAt: new Date(),
      deletedAt: null,
    };

    const resp = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter,
    });

    await senderService.getFileAndSend('some_url_not_valid', resp, imgDb);
    resp.on('end', async () => {
      expect(resp._getStatusCode()).toBe(500);
      expect(redisMock.getBuffer(imgDb.imageId.toString())).toBe(undefined);

      done();
    });
  }, 70000);
});
