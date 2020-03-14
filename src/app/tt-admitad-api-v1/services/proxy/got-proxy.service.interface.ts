import { GotEmitter } from 'got';
import { Duplex } from 'stream';

export interface IGotProxyService {
    addGotStream(
        url: string,
    ): GotEmitter & Duplex ;
}
