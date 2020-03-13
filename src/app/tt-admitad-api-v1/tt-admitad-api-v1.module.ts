import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthCheckModule } from '../common/healthcheck/health-check.module';
import configuration from '../../../config/configuration';
import { ConfigModule } from '@nestjs/config';
import { entities } from './entities/entities';
import { serviceContainerModule, loggerProvider } from './tt-admitad-api-v1.providers';
import { ImageController } from './controllers/image.controller';

@Module({
    imports: [
        TypeOrmModule.forRoot(),
        TypeOrmModule.forFeature(entities),
        CommonModule,
        HealthCheckModule,
        ConfigModule.forRoot({
            load: [configuration],
        }),
    ],
    controllers: [
        ImageController,
    ],
    providers: [
        // main providers
        ...serviceContainerModule,

        loggerProvider,
    ],
    exports: [ loggerProvider ],
})
export class TtAdmitedApiV1Module { }
