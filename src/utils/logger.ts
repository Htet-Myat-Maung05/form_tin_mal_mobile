import { ENV } from "src/config/env";


type LogLevel = 'log' | 'warn' | 'error' | 'info';

const createLogger = () => {
    const shouldLog = ENV.ENABLE_LOGS;

    const log = (level: LogLevel, ...args: unknown[]) => {
        if (!shouldLog) return;
        const prefix = `[${ENV.APP_ENV.toUpperCase()}]`;
        console[level](prefix, ...args);
    };

    return {
        log: (...args: unknown[]) => log('log', ...args),
        warn: (...args: unknown[]) => log('warn', ...args),
        error: (...args: unknown[]) => log('error', ...args),
        info: (...args: unknown[]) => log('info', ...args),
    };
};

export const logger = createLogger();