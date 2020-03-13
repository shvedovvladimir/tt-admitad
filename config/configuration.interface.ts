export interface IConfiguration {
    readonly app: IAppConfiguration;
    readonly swagger: ISwaggerConfiguration;
    readonly logger: ILoggerConfiguration;
    readonly imageApiUrl: string;
    readonly redis: IRedisConfig;
}

export interface IRedisConfig {
    readonly port: number;
    readonly host: string;
}

export interface ISwaggerConfiguration {
    readonly title: string;
    readonly scheme: 'http' | 'https';
    readonly description: string;
    readonly apiVersion: string | number;
    readonly enableAuth: boolean;
    readonly guiUri: string;
    readonly jsonUri: string;
}

export interface IAppConfiguration {
    readonly port: string | number;
}

export interface ILoggerConfiguration {
    readonly level: string;
    readonly printStackTrace: boolean;
    readonly format: {
        readonly separator: string;
    };
}
