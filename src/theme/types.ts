import { typography } from "./typography";

export type ThemeMode = 'light' | 'dark' | 'system';

export interface AppTheme {
    mode: 'light' | 'dark';
    colors: {
        background: {
            primary: string;
            secondary: string;
            tertiary: string;
        };
        surface: {
            default: string;
            elevated: string;
            overlay: string;
        };
        text: {
            primary: string;
            secondary: string;
            disabled: string;
            inverse: string;
        };
        border: {
            default: string;
            focused: string;
        };
        action: {
            primary: string;
            primaryPressed: string;
            destructive: string;
        };
    };
    typography: typeof typography;
    spacing: (multiplier: number) => number;
    borderRadius: {
        sm: number;
        md: number;
        lg: number;
        full: number;
    };
}