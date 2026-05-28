import { logger } from "@utils/logger";
import axios from "axios";
import { ENV } from "src/config/env";

export const apiClient = axios.create({
    baseURL: ENV.API_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
apiClient.interceptors.request.use(
    (config) => {
        logger.info(`[API] ${config.method?.toUpperCase()} ${config.url}`);
        return config;
    },
    (error) => Promise.reject(error),
);

// Response interceptor
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        logger.error('[API Error]', error.response?.status, error.message);
        return Promise.reject(error);
    },
);