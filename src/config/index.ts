import { ENV } from "./env";

console.log('[Config] Loading config/index.ts');
console.log('[Config] ENV =', JSON.stringify(ENV));
const config = {
    get apiUrl() { return ENV.API_URL; },
    get appEnv() { return ENV.APP_ENV; },
    get appName() { return ENV.APP_NAME; },
    get enableLogs() { return ENV.ENABLE_LOGS; },
};

export default config;