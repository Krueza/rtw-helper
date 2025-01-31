'use client'

import '@mantine/core/styles.css';

import React, { Children } from 'react';
import { AppShell, Burger, ColorSchemeScript, Group, Image, mantineHtmlProps, MantineProvider, Skeleton, useMantineColorScheme } from '@mantine/core';
import { theme } from '../theme';
import { useDisclosure } from '@mantine/hooks';
import { NavbarSimpleColored } from '@/components/NavbarSimpleColored/NavbarSimpleColored';
import { IconMoon, IconSun } from '@tabler/icons-react';
import ColorSchemeToggleIcon from '@/components/ColorSchemeToggleIcon/ColorSchemeToggleIcon';

// export const metadata = {
//   title: 'Mantine Next.js template',
//   description: 'I am using Mantine with Next.js!',
// };



export default function RootLayout({ children }: { children: any }) {
  const initialOpenedState = Boolean(sessionStorage.getItem('initialOpenedState'));
  const [opened, { toggle }] = useDisclosure();
  
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <AppShell
            header={{ height: 60 }}
            navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: !opened } }}
            padding="md">
            <AppShell.Header>
              <Group h="100%" px="md">
                <Burger opened={opened} onClick={() => {
                  toggle();
                  // sessionStorage.setItem('initialOpenedState', `${opened}`)
                }}
                  hiddenFrom="sm" size="sm" />
                <a href='/'>
                <Image
                  src="/img/rtw.png"
                  height="50px" />
              </a>
              <ColorSchemeToggleIcon />
              </Group>
              <Group>

              </Group>
            </AppShell.Header>
            <AppShell.Navbar>
              <NavbarSimpleColored />
            </AppShell.Navbar>
            <AppShell.Main>{children}</AppShell.Main>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
