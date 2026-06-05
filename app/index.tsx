import { useEffect, useRef } from 'react';
import { View, Image, StyleSheet, Animated } from 'react-native';
import { router } from 'expo-router';

export default function SplashScreen() {
    const opacity = useRef(new Animated.Value(0)).current;
    const scale = useRef(new Animated.Value(0.85)).current;

    useEffect(() => {
        Animated.parallel([
            Animated.timing(opacity, { toValue: 1, duration: 600, useNativeDriver: true }),
            Animated.timing(scale, { toValue: 1, duration: 600, useNativeDriver: true }),
        ]).start();

        const timer = setTimeout(() => {
            // router.replace('/(auth)/login');
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <Animated.View style={{ opacity, transform: [{ scale }] }}>
                <Image
                    source={require('../assets/splash.png')}
                    style={styles.logo}
                    resizeMode="contain"
                />
                <Animated.Text style={styles.brand}>
                    form tin mal
                </Animated.Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center',
    },
    brand: {
        color: '#000',
        fontSize: 22,
        fontWeight: '500',
        letterSpacing: 1,
        textAlign: 'center',
        marginTop: 16,
    },
});