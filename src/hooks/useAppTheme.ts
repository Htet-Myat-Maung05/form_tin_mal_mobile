import { selectThemeMode } from "@store/slices/themeSlice"
import { AppTheme } from "@theme/types";
import { useColorScheme } from "react-native";
import { useSelector } from "react-redux"
import { darkTheme } from "src/styles/dark";
import { lightTheme } from "src/styles/light";

export function useAppTheme(): AppTheme {
    const storedMode = useSelector(selectThemeMode);
    const systemScheme = useColorScheme(); // 'light' | 'dark' | null

    const resolvedMode: 'light' | 'dark' =
        storedMode === 'system'
            ? systemScheme === 'dark'
                ? 'dark'
                : 'light'
            : storedMode;

    return resolvedMode === 'dark' ? darkTheme : lightTheme;
}