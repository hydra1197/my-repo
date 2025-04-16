"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = __importDefault(require("winston"));
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
class Logger {
    constructor(platform, botName) {
        this.platform = platform;
        this.botName = botName;
        this.logger = winston_1.default.createLogger({
            format: winston_1.default.format.combine(winston_1.default.format.colorize(), winston_1.default.format.timestamp({
                format: `DD/MM/YYYY HH:mm:ss`,
            }), winston_1.default.format.printf(({ timestamp, level, message }) => {
                return `[${this.platform}-${this.botName}] [${timestamp}] [${level}]: ${message}`;
            })),
            transports: [
                new winston_1.default.transports.Console(),
                new winston_daily_rotate_file_1.default({
                    filename: `logs/${this.platform}/${this.botName}/%DATE%.log`,
                    datePattern: 'YYYY/MM/DD',
                    format: winston_1.default.format.combine(winston_1.default.format.uncolorize()),
                }),
            ],
        });
    }
    log(message, level = 'info') {
        this.logger.log({
            message,
            level,
        });
    }
}
exports.default = Logger;
