import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

type Level = 'info' | 'warn' | 'error' | undefined

type Platform = 'BSC' | 'SOL' | 'BASE' | 'ETH'

class Logger {
  platform: Platform
  botName: string
  logger: winston.Logger

  constructor(platform: Platform, botName: string) {
    this.platform = platform
    this.botName = botName

    this.logger = winston.createLogger({
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
          format: `DD/MM/YYYY HH:mm:ss`,
        }),
        winston.format.printf(({ timestamp, level, message }) => {
          return `[${this.platform}-${this.botName}] [${timestamp}] [${level}]: ${message}`
        }),
      ),
      transports: [
        new winston.transports.Console(),
        new DailyRotateFile({
          filename: `logs/${this.platform}/${this.botName}/%DATE%.log`,
          datePattern: 'YYYY/MM/DD',
          format: winston.format.combine(winston.format.uncolorize()),
        }),
      ],
    })
  }

  log(message: string, level: Level = 'info'): void {
    this.logger.log({
      message,
      level,
    })
  }
}

export default Logger
