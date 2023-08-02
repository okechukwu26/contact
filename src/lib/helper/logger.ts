import * as winston from 'winston'

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
}
const level = () => {
  const env = process.env.NODE_ENV || 'Development'
  const isDev = env === 'Development'
  return isDev ? 'debug' : 'warn'
}
const colors = {
  error: 'red',
  warn: 'yellow',
  http: 'white',
  info: 'green',
  debug: 'blue',
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
  winston.format.colorize({ all: true }),
  winston.format.simple(),
  winston.format.printf(
    (info) => `${info.timestamp} ${info.level}: ${info.message}`,
  ),
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({
    filename: 'src/logs/error.log',
    level: 'error',
  }),
  new winston.transports.File({ filename: 'src/logs/all.log' }),
]
export const logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports,
})
