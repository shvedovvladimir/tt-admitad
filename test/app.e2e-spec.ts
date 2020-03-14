import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { ApplicationModule } from './../src/app/app.module';
import { getConnection } from 'typeorm';
import { ValidationExceptionFilter } from '../src/app/common/filter/validation-exception.filter';
import { CommonModule } from '../src/app/common/common.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let connect = null;

  beforeAll(async (done) => {
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

    connect = await getConnection();

    done();
  });

  afterAll(async () => {
    if (app) {
      await app.close();
    }
  });

  it('/ (GET) /api/healthcheck should get status 200', async (done) => {
    await request(app.getHttpServer())
      .get('/api/healthcheck')
      .expect(200);

    done();
  });

  it('/ (POST) /api/image should get status 200 and body instanceof buffer', async (done) => {
    const res = await request(app.getHttpServer())
      .post('/api/image')
      .expect(200);

    expect(res.body instanceof Buffer).toBe(true);

    done();
  }, 30000);

  it('/ (GET) /api/image/some_valid_number should get status 200 and body instanceof buffer', async (done) => {
    const someImg = await connect.createQueryBuilder()
      .from('production.image_data')
      .andWhere('deleted_at IS NULL')
      .limit(1)
      .getRawOne();

    const res = await request(app.getHttpServer())
      .get(`/api/image/${someImg.image_id}`)
      .expect(200);

    expect(res.body).toBeInstanceOf(Buffer);

    done();
  }, 30000);

  it('/ (GET) /api/image/not_valid_id should get status 400', async (done) => {
    await request(app.getHttpServer())
      .get('/api/image/afafasf')
      .expect(400);

    done();
  });

  it('/ (GET) /api/images with out query params should get status 400', async (done) => {
    await request(app.getHttpServer())
      .get('/api/images').expect(400);

    done();
  });

  it('/ (GET) /api/images should get status 200 and resp array ot img info with length 1', async (done) => {
    const res = await request(app.getHttpServer())
      .get('/api/images?limit=1&offset=0').expect(200);

    expect(res).toHaveProperty('body');
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toBeInstanceOf(Array);
    expect(res.body.result.length).toBe(1);

    done();
  });

  it('/ (GET) /api/images should get status 200 and resp array ot img info with length 0', async (done) => {
    const res = await request(app.getHttpServer())
      .get('/api/images?limit=1&offset=0&dateFrom=2014-02-27T10%3A00%3A00&dateTo=2014-02-27T10%3A00%3A00')
      .expect(200);

    expect(res).toHaveProperty('body');
    expect(res.body).toHaveProperty('result');
    expect(res.body.result).toBeInstanceOf(Array);
    expect(res.body.result.length).toBe(0);

    done();
  });
});
