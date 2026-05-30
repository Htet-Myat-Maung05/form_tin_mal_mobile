// App.tsx
import { Button } from '@components/buttons/theme-button';
import { useAppTheme } from '@hooks/useAppTheme';
import { persistor, store } from '@store/index';
import { toggleTheme } from '@store/slices/themeSlice';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ENV } from 'src/config/env';

export default function App() {
  console.log(ENV.API_URL);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootLayout />
      </PersistGate>
    </Provider>
  );
}

// App.tsx
function RootLayout() {
  const theme = useAppTheme();
  const dispatch = useDispatch();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background.primary,
      alignItems: 'center',
      justifyContent: 'center',
      gap: theme.spacing(4),
    },
  });

  return (
    <View style={styles.container}>
      <StatusBar style={theme.mode === 'dark' ? 'light' : 'dark'} />
      <Button
        label={`Switch to ${theme.mode === 'dark' ? 'light' : 'dark'} mode`}
        onPress={() => dispatch(toggleTheme())}
      />
    </View>
  );
}