export type AppEnvironment = 'development' | 'staging' | 'production';

interface EnvConfig {
    APP_ENV: AppEnvironment;
    API_URL: string;
    APP_NAME: string;
    ENABLE_LOGS: boolean;
}

// process.env undefined ဖြစ်မှာကို fallback နဲ့ ကာကွယ်တယ်
const getEnv = (key: string, fallback: string): string => {
    try {
        const value = process.env[key];
        return value !== undefined && value !== '' ? value : fallback;
    } catch {
        return fallback;
    }
};

const rawEnv = getEnv('EXPO_PUBLIC_APP_ENV', 'development');

const validEnvs: AppEnvironment[] = ['development', 'staging', 'production'];
const appEnv: AppEnvironment = validEnvs.includes(rawEnv as AppEnvironment)
    ? (rawEnv as AppEnvironment)
    : 'development';

export const ENV: EnvConfig = {
    APP_ENV: appEnv,
    API_URL: getEnv('EXPO_PUBLIC_API_URL', 'http://10.0.2.2:8000/api'),
    APP_NAME: getEnv('EXPO_PUBLIC_APP_NAME', 'FormTinMal'),
    ENABLE_LOGS: getEnv('EXPO_PUBLIC_ENABLE_LOGS', 'true') === 'true',
};

export const isDev = ENV.APP_ENV === 'development';
export const isStaging = ENV.APP_ENV === 'staging';
export const isProd = ENV.APP_ENV === 'production';