import { palette } from "@theme/colors";
import { AppTheme } from "@theme/types";
import { typography } from "@theme/typography";

const BASE_SPACING = 4;

export const lightTheme: AppTheme = {
    mode: 'light',
    colors: {
        background: {
            primary: palette.neutral[0],
            secondary: palette.neutral[50],
            tertiary: palette.neutral[100],
        },
        surface: {
            default: palette.neutral[0],
            elevated: palette.neutral[50],
            overlay: 'rgba(0,0,0,0.4)',
        },
        text: {
            primary: palette.neutral[900],
            secondary: palette.neutral[700],
            disabled: palette.neutral[500],
            inverse: palette.neutral[0],
        },
        border: {
            default: palette.neutral[200],
            focused: palette.blue[500],
        },
        action: {
            primary: palette.blue[500],
            primaryPressed: palette.blue[600],
            destructive: palette.red[500],
        },
    },
    typography,
    spacing: (n: number) => n * BASE_SPACING,
    borderRadius: { sm: 4, md: 8, lg: 12, full: 9999 },
};