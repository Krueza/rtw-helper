'use client'

import { useMantineColorScheme } from "@mantine/core";
import { IconMoon, IconSun } from "@tabler/icons-react";

function GetThemeIcon(theme: string) {
    return theme === "dark" ? <IconMoon/> : <IconSun />
  }

export default function ColorSchemeToggleIcon() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();

    return (
        <div>
            <a href="#" onClick={toggleColorScheme}>
                {GetThemeIcon(colorScheme)}
            </a>
        </div>
    )
}