import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from '../../config/configuration';
import { RequestIdMiddleware } from './common/middleware/request-id-middleware';
import { TtAdmitedApiV1Module } from './tt-admitad-api-v1/tt-admitad-api-v1.module';
@Module({
    imports: [
        TtAdmitedApiV1Module,
        ConfigModule.forRoot({
            load: [configuration],
        }),
    ],
})
export class ApplicationModule implements NestModule {

    public configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
        consumer
            .apply(RequestIdMiddleware)
            .forRoutes({ path: '*', method: RequestMethod.ALL });
    }
}