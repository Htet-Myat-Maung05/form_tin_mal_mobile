// src/components/Button/Button.tsx
import { useAppTheme } from '@hooks/useAppTheme';
import React from 'react';
import { Pressable, Text, ActivityIndicator } from 'react-native';
import { makeStyles } from 'src/styles/makeStyle';

const useStyles = makeStyles((theme) => ({
    base: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: theme.spacing(4),   // 16px
        paddingVertical: theme.spacing(3),   // 12px
        borderRadius: theme.borderRadius.md,
        gap: theme.spacing(2),
    },
    primary: {
        backgroundColor: theme.colors.action.primary,
    },
    primaryPressed: {
        backgroundColor: theme.colors.action.primaryPressed,
    },
    destructive: {
        backgroundColor: theme.colors.action.destructive,
    },
    outlined: {
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: theme.colors.border.default,
    },
    label: {
        fontFamily: theme.typography.fontFamily.medium,
        fontSize: theme.typography.fontSize.md,
        color: theme.colors.text.inverse,
    },
    labelOutlined: {
        color: theme.colors.text.primary,
    },
    disabled: {
        opacity: 0.5,
    },
}));

interface ButtonProps {
    label: string;
    onPress: () => void;
    variant?: 'primary' | 'destructive' | 'outlined';
    loading?: boolean;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
    label,
    onPress,
    variant = 'primary',
    loading = false,
    disabled = false,
}) => {
    const theme = useAppTheme();
    const styles = useStyles();

    return (
        <Pressable
            onPress={onPress}
            disabled={disabled || loading}
            style={({ pressed }) => [
                styles.base,
                styles[variant],
                pressed && variant === 'primary' && styles.primaryPressed,
                disabled && styles.disabled,
            ]}
        >
            {loading && (
                <ActivityIndicator
                    size="small"
                    color={
                        variant === 'outlined'
                            ? theme.colors.action.primary
                            : theme.colors.text.inverse
                    }
                />
            )}
            <Text
                style={[
                    styles.label,
                    variant === 'outlined' && styles.labelOutlined,
                ]}
            >
                {label}
            </Text>
        </Pressable>
    );
};