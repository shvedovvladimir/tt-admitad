import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApplicationModule } from './../src/app/app.module';
import { getConnection } from 'typeorm';
import { bootstrap } from './../src/index';
import { ValidationExceptionFilter } from '../src/app/common/filter/validation-exception.filter';
import { CommonModule } from '../src/app/common/common.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    process.env = Object.assign(process.env, {
      POSTGRESQL_DB: 'tt_admitad_db',
      POSTGRESQL_USER: 'postgres_app',
      POSTGRESQL_PASSWORD: 'postgres_password',
      POSTGRESQL_HOST: 'localhost',
      POSTGRESQL_PORT: 5432,
      POSTGRESQL_SCHEMA: 'production',
      REDIS_HOST: 'localhost',
      REDIS_PORT: 6379,
      IMAGE_API_URL: 'https://api.giphy.com/v1/gifs/random?api_key=xgcnvYuqk4vP1WQQtWPz6F1A0B4WHHdA',
      APP_PORT: 9081,
      LOG_LEVEL: 'TRACE',
    });
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ApplicationModule, CommonModule],
    })
    .compile();

    app = moduleFixture.createNestApplication();

    app.useGlobalFilters(app.select(CommonModule).get<ValidationExceptionFilter>(ValidationExceptionFilter));

    await app.init();
  });

  afterEach(async () => {
    if (app) {
      // drop database
      await getConnection();
      // close database connections
      await app.close();
    }
  });

  it('/ (GET) /api/healthcheck', () => {
    return request(app.getHttpServer())
      .get('/api/healthcheck')
      .expect(200);
  });
  it('/ (POST) /api/image', () => {
    return request(app.getHttpServer())
      .post('/api/image')
      .expect(200);
  });
  it('/ (GET) /api/image/1', () => {
    return request(app.getHttpServer())
      .get('/api/image/1')
      .expect(200);
  });
  it('/ (GET) /api/image/not_valid_id', () => {
    return request(app.getHttpServer())
      .get('/api/image/afafasf')
      .expect(400);
  });
  it('/ (GET) /api/images with out query params', async () => {
    await request(app.getHttpServer())
      .get('/api/images').expect(400);
  });
});
