import { Injectable } from '@nestjs/common';
import * as got from 'got';
import { GotEmitter } from 'got';
import { IGotProxyService } from './got-proxy.service.interface';
import { Duplex } from 'stream';

@Injectable()
export class GotProxyService implements IGotProxyService {
    public addGotStream(
        url: string,
    ): GotEmitter & Duplex {
        return got.stream(url, { method: 'GET'});
    }
}
