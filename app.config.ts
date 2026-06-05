import { ExpoConfig, ConfigContext } from 'expo/config';

const ENV_CONFIG = {
    development: {
        appName: 'FormTinMal DEV',
        bundleId: 'com.yourcompany.formtinmal.dev',
        androidPackage: 'com.yourcompany.formtinmal.dev',
        icon: './assets/icon.png',
        adaptiveIcon: './assets/android-icon-foreground.png',
    },
    staging: {
        appName: 'FormTinMal UAT',
        bundleId: 'com.yourcompany.formtinmal.staging',
        androidPackage: 'com.yourcompany.formtinmal.staging',
        icon: './assets/icon.png',
        adaptiveIcon: './assets/android-icon-foreground.png',
    },
    production: {
        appName: 'FormTinMal',
        bundleId: 'com.yourcompany.formtinmal',
        androidPackage: 'com.yourcompany.formtinmal',
        icon: './assets/icon.png',
        adaptiveIcon: './assets/android-icon-foreground.png',
    },
};

export default ({ config }: ConfigContext): ExpoConfig => {
    const appEnv = (process.env.EXPO_PUBLIC_APP_ENV ?? 'development') as keyof typeof ENV_CONFIG;
    const envConfig = ENV_CONFIG[appEnv] ?? ENV_CONFIG.development;

    return {
        ...config,
        name: envConfig.appName,
        slug: 'form-tin-mal',
        version: '1.0.0',
        orientation: 'portrait',
        icon: envConfig.icon,
        userInterfaceStyle: 'automatic',
        ios: {
            supportsTablet: false,
            bundleIdentifier: envConfig.bundleId,
        },
        android: {
            adaptiveIcon: {
                foregroundImage: envConfig.adaptiveIcon,
                backgroundColor: '#ffffff',
            },
            package: envConfig.androidPackage,
        },
        // plugins: ['expo-router'],
        // experiments: {
        //     typedRoutes: true,
        // },
        extra: {
            appEnv,
            eas: {
                projectId: 'YOUR_EAS_PROJECT_ID',
            },
        },
        plugins: [
            'expo-router',
            'expo-status-bar',
            'expo-localization',
        ]
    };
};
