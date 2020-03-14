import { Injectable } from '@nestjs/common';
import { GotEmitter } from 'got';
import { Duplex } from 'stream';
import { IGotProxyService } from '../../../src/app/tt-admitad-api-v1/services/proxy/got-proxy.service.interface';

@Injectable()
export class GotProxyServiceMock implements IGotProxyService {
    public addGotStream(
        url: string,
    ): GotEmitter & Duplex {
        let data = null;

        const gotStream = new Duplex();

        gotStream.write = (chunk, enc) => {
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

        return gotStream;
    }
}
