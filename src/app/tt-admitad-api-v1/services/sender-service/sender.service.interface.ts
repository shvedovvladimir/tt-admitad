import { Response as IResponse } from 'express';
import { IImageDb } from '../image-service/image.service.interface';

export interface ISenderService {
    getFileAndSend(url: string, response: IResponse, imageDb: IImageDb): Promise<any>;
}
