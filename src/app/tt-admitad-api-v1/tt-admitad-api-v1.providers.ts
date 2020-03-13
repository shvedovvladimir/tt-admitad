import { DI_CONSTANTS, LOGGER } from './di-constants';
import { ILogger, WinstonLogger } from '../common/logger';
import { ConfigService, ConfigModule } from '@nestjs/config';
import { ILoggerConfig } from '../common/logger/logger.interface';
import { ImageService } from './services/image-service/image.service';
import { SenderService } from './services/sender-service/sender.service';
import * as IoRedis from 'ioredis';
import { IRedisConfig } from '../../../config/configuration.interface';

export const serviceContainerModule = [
    {
        provide: DI_CONSTANTS.IImageService,
        useClass: ImageService,
    },
    {
        provide: DI_CONSTANTS.ISenderService,
        useClass: SenderService,
    },
    {
        provide: DI_CONSTANTS.IRedis,
        useFactory: (config: ConfigService): IoRedis.Redis => {
            return new IoRedis(config.get<IRedisConfig>('redis'));
        },
        imports: [ConfigModule],
        inject: [ConfigService],
    },
];

export const loggerProvider = {
    provide: LOGGER,
    useFactory: (config: ConfigService): ILogger => {
        return new WinstonLogger(config.get<ILoggerConfig>('logger'));
    },
    imports: [ConfigModule],
    inject: [ConfigService],
};