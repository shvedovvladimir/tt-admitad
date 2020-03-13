import { Injectable, Inject } from '@nestjs/common';
import { LOGGER, DI_CONSTANTS } from '../../di-constants';
import { ILogger } from '../../../common/logger';
import { Response as IResponse } from 'express';
import { ISenderService } from './sender.service.interface';
import * as got from 'got';
import { Writable, Readable } from 'stream';
import * as IoRedis from 'ioredis';
import { IImageDb } from '../image-service/image.service.interface';

const REDIS_EX_TIME_IN_SECOND = 60;

@Injectable()
export class SenderService implements ISenderService {
    private readonly _loggerPrefix: string = `${SenderService.name}`;

    constructor(
        @Inject(LOGGER)
        private readonly _logger: ILogger,
        @Inject(DI_CONSTANTS.IRedis)
        private readonly _redis: IoRedis.Redis,
    ) {}

    public async getFileAndSend(url: string, response: IResponse, imageDb: IImageDb): Promise<any> {
        this._logger.debug(this._loggerPrefix, `Try send file from url: ${url}`);
        response.setHeader('Content-Type', `image/${imageDb.type}`);
        let data = null;

        try {
            const cached = await this._redis.getBuffer(imageDb.imageId.toString());
            if (cached) {
                this._logger.debug(this._loggerPrefix, `Get image from cache`);
                const readStream = new Readable();
                readStream.push(cached);
                readStream.push(null);

                readStream.pipe(response);
            } else {
                const writeStream = new Writable();
                writeStream.write = (chunk, enc) => {
                    const buffer = (Buffer.isBuffer(chunk)) ?
                    chunk :  // already is Buffer use it
                    new Buffer(chunk, enc);  // string, convert

                // concat to the buffer already there
                    if (!data) {
                        data = buffer;
                    } else {
                        data = Buffer.concat([data, buffer]);
                    }

                    return true;
                };
                const gotStream = got.stream(url, { method: 'GET'});
                gotStream.on('error', (err, body, res) => {
                    this._onError(err, url);
                    response.sendStatus(res.statusCode);
                });
                gotStream.on('end', () => {
                    // I think this is a bad idea for caching a file in Redis, but I don't know what else =/
                    this._redis.setBuffer(imageDb.imageId.toString(), data, 'ex', REDIS_EX_TIME_IN_SECOND);
                });

                gotStream.pipe(writeStream);
                await gotStream.pipe(response);

                return null;
            }
        } catch (err) {
            this._onError(err, url);

            throw err;
        }
    }

    private _onError(err: any , url: string): void {
        this._logger.error(this._loggerPrefix, `Got error while sending file from url: ${url}`, err.message);
    }
}
