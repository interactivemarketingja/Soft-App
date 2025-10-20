class Logger {
    static log(message: string): void {
        console.log(`[LOG] ${new Date().toISOString()}: ${message}`);
    }

    static error(message: string): void {
        console.error(`[ERROR] ${new Date().toISOString()}: ${message}`);
    }

    static warn(message: string): void {
        console.warn(`[WARN] ${new Date().toISOString()}: ${message}`);
    }

    static info(message: string): void {
        console.info(`[INFO] ${new Date().toISOString()}: ${message}`);
    }
}

export default Logger;