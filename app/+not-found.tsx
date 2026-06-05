import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function NotFoundScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Page not found</Text>
            <Link href="/" style={styles.link}>
                Go home
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        color: '#000',
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 12,
    },
    link: {
        color: '#228BE6',
        fontSize: 16,
    },
});
