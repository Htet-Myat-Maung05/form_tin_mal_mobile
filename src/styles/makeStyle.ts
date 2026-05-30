import { useAppTheme } from "@hooks/useAppTheme";
import { AppTheme } from "@theme/types";
import { useMemo } from "react";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
}

export function makeStyles<T extends NamedStyles<T>>(factory: (theme: AppTheme) => T) {
    return function useStyles(): T {
        const theme = useAppTheme();

        return useMemo(
            () => StyleSheet.create(factory(theme)) as T,
            [theme],
        );
    }
}