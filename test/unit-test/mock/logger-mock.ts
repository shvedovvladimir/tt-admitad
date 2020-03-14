import { ILogger } from '../../../src/app/common/logger';

export class LoggerMock implements ILogger {
    public config: any = { };

    public log(...args: any[]): void {
        return;
    }
    public trace(message: any, ...args: any[]): void {
        return;
    }
    public debug(message: any, ...args: any[]): void {
        return;
    }
    public info(message: any, ...args: any[]): void {
        return;
    }
    public warn(message: any, ...args: any[]): void {
        return;
    }
    public error(message: any, ...args: any[]): void {
        return;
    }
    public fatal(message: any, ...args: any[]): void {
        return;
    }
    public replaceConsole(): void {
        return;
    }
    public returnConsoleBack(): void {
        return;
    }
}