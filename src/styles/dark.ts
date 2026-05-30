import { palette } from "@theme/colors";
import { typography } from "@theme/typography";
import { AppTheme } from "@theme/types";

const BASE_SPACING = 4;

export const darkTheme: AppTheme = {
    mode: 'dark',
    colors: {
        background: {
            primary: '#0D0D0D',
            secondary: '#1A1A1A',
            tertiary: '#252525',
        },
        surface: {
            default: '#1A1A1A',
            elevated: '#2C2C2C',
            overlay: 'rgba(0,0,0,0.65)',
        },
        text: {
            primary: palette.neutral[50],
            secondary: palette.neutral[300],
            disabled: palette.neutral[500],
            inverse: palette.neutral[900],
        },
        border: {
            default: '#333333',
            focused: palette.blue[400],
        },
        action: {
            primary: palette.blue[400],
            primaryPressed: palette.blue[500],
            destructive: palette.red[400],
        },
    },
    typography,
    spacing: (n) => n * BASE_SPACING,
    borderRadius: { sm: 4, md: 8, lg: 12, full: 9999 },
};