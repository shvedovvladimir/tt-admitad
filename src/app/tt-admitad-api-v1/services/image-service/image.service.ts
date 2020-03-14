import { Injectable, Inject } from '@nestjs/common';
import { LOGGER, DI_CONSTANTS } from '../../di-constants';
import { ILogger } from '../../../common/logger';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { IImageService, IImage, IResponseFromApi, IImageDb } from './image.service.interface';
import { ImageEntity } from '../../entities/typeorm/image.entity';
import * as got from 'got';
import { ConfigService } from '@nestjs/config';
import { NotFoundError } from '../../errors/not-found.error';

@Injectable()
export class ImageService implements IImageService {
    private readonly _loggerPrefix: string = `${ImageService.name}`;

    constructor(
        private readonly _configService: ConfigService,
        @InjectRepository(ImageEntity)
        protected readonly _imageRepository: Repository<ImageEntity>,
        @Inject(LOGGER)
        private readonly _logger: ILogger,
    ) {}

    public async saveAndGetImage(): Promise<IImageDb> {
        this._logger.debug(this._loggerPrefix, `Try save image to db and send it to client`);

        const url = this._configService.get('imageApiUrl');
        const method = 'GET';

        try {

            const response: got.Response<IResponseFromApi> = await got(url, { method , json: true }) ;
            const imgData = response.body.data;

            const imgBd = await this._imageRepository.save(
                this._imageRepository.create({
                    type: imgData.type,
                    title: imgData.title,
                    imageUrl: imgData.image_url,
                    images: imgData.images,
                }),
            );

            return imgBd;

        } catch (err) {
            this._logger.error(
                this._loggerPrefix,
                `Got error while proxy to url: ${url}`,
                err.message,
                'code',
                err.code,
            );

            throw err;
        }
    }

    public async getImageById(id: number): Promise<IImageDb> {
        this._logger.debug(this._loggerPrefix, `Try get image by id: ${id}`);

        try {

            const imgData = await this._imageRepository.createQueryBuilder()
                .where('"image_id" = :id', {id})
                .andWhere('deleted_at IS NULL')
                .getOne();

            if (!imgData) {
                throw new NotFoundError({details: `image with id: ${id} not found`});
            }

            return imgData;

        } catch (err) {
            this._logger.error(
                this._loggerPrefix,
                `Got error while getting image by id: ${id}`,
                err.message,
                'code',
                err.code,
            );

            throw err;
        }
    }

    public async getImages(limit: number, offset: number, dataFrom?: Date, dataTo?: Date): Promise<IImageDb[]> {
        this._logger.debug(this._loggerPrefix, `Try get images limit:${limit}, offset: ${offset}`);

        try {

            let query = await this._imageRepository.createQueryBuilder()
                .andWhere('deleted_at IS NULL')
                .orderBy('created_at')
                .limit(limit)
                .offset(offset);

            if (dataFrom && dataTo) {
                query = query.where(' created_at BETWEEN :dataFrom AND :dataTo', {dataTo, dataFrom});
            }

            return query.getMany();

        } catch (err) {
            this._logger.error(
                this._loggerPrefix,
                `Got error while getting images list`,
                err.message,
                'code',
                err.code,
            );

            throw err;
        }
    }
}
