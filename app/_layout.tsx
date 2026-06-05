import { persistor, store } from '@store/index';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

export default function RootLayout() {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <StatusBar style="light" />
                <Stack screenOptions={{ headerShown: false }} />
            </PersistGate>
        </Provider>
    );
}