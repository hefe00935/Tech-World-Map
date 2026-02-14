
const DEBUG = import.meta.env.DEV || import.meta.env.VITE_DEBUG === 'true';

export class Logger {
    private static prefix = '[WorldMonitor]';

    static log(message: string, ...args: unknown[]): void {
        if (DEBUG) {
            console.log(`${this.prefix} ${message}`, ...args);
        }
    }

    static info(message: string, ...args: unknown[]): void {
        console.info(`${this.prefix} INFO: ${message}`, ...args);
    }

    static warn(message: string, ...args: unknown[]): void {
        console.warn(`${this.prefix} WARN: ${message}`, ...args);
    }

    static error(message: string, error?: unknown, ...args: unknown[]): void {
        console.error(`${this.prefix} ERROR: ${message}`, error, ...args);
    }

    static table(data: unknown[]): void {
        if (DEBUG) {
            console.table(data);
        }
    }

    static debug(message: string, ...args: unknown[]): void {
        if (DEBUG) {
            console.debug(`${this.prefix} DEBUG: ${message}`, ...args);
        }
    }
}
