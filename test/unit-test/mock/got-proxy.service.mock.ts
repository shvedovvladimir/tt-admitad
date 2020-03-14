import { Injectable } from '@nestjs/common';
import * as got from 'got';
import { Duplex } from 'stream';
import { IGotProxyService } from '../../../src/app/tt-admitad-api-v1/services/proxy/got-proxy.service.interface';
import * as nock from 'nock';
import { GotEmitter } from 'got';



@Injectable()
export class GotProxyServiceMock implements IGotProxyService {
    public addGotStream(
        url: string,
    ): GotEmitter & Duplex {
        nock(`https://some_url`)
            .get('/')
            .reply(200, Buffer.from('some_data'));

        nock(`https://some_url_not_valid`)
            .get('/')
            .reply(500, {'error': 'internal error'});

        return got.stream(`https://${url}`, { method: 'GET'});
    }
}
