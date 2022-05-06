import { createLogger, transports, format } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import path from 'path';

const { timestamp, printf, combine, colorize, label } = format;

const logFormat = (filename: string) => {
  return combine(
    timestamp(),
    label({ label: path.basename(path.basename(filename)) }),
    printf(({ timestamp, level, message, service, label }) => {
      return `[${timestamp}] [file: ${label}] ${service} ${level} : ${message}`;
    })
  );
};

const transport: DailyRotateFile = new DailyRotateFile({
  dirname: 'logs',
  filename: 'log-%DATE%.log',
  datePattern: 'YYYY-MM-DD-HH',
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

export const logger = (route: string, filename: string) => {
  const addLogger = createLogger({
    format: logFormat(filename),
    defaultMeta: {
      service: `[route: ${route}]`,
    },
    transports: [transport],
  });
  if (process.env.NODE_ENV !== 'production') {
    addLogger.add(
      new transports.Console({
        format: combine(
          colorize({
            all: true,
          })
        ),
      })
    );
  }
  return addLogger;
};
