import winston from 'winston';
type Level = 'info' | 'warn' | 'error' | undefined;
type Platform = 'BSC' | 'SOL' | 'BASE' | 'ETH';
declare class Logger {
    platform: Platform;
    botName: string;
    logger: winston.Logger;
    constructor(platform: Platform, botName: string);
    log(message: string, level?: Level): void;
}
export default Logger;
