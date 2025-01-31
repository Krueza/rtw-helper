'use client'

import * as React from 'react';
import { Avatar, Tabs } from '@mantine/core';
import Calculator from './components/factionCalculator';
import * as factionLists from './components/factionLists';
import classes from './Calculator.module.css';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';

export default function Page() {
  return (
    <Tabs variant="unstyled" defaultValue="Rome" classNames={classes}>
      <Tabs.List grow>
        <Tabs.Tab
          value="Rome"
          leftSection={<Avatar src="./img/factions/fac_rome.webp" size={20} />}
        >
          Rome
        </Tabs.Tab>
        <Tabs.Tab
          value="Carthage"
          leftSection={<Avatar src="./img/factions/fac_carthage.webp" size={20} />}
        >
          Carthage
        </Tabs.Tab>
        <Tabs.Tab
          value="Greece"
          leftSection={<Avatar src="./img/factions/fac_greece.webp" size={20} />}
        >
          Greece
        </Tabs.Tab>
        <Tabs.Tab
          value="Barbarians"
          leftSection={<Avatar src="./img/factions/fac_barbarians.webp" size={20} />}
        >
          Barbarians
        </Tabs.Tab>
      </Tabs.List>
      <Tabs.Panel value='Rome'>
        <Calculator elements={factionLists.Rome} />
      </Tabs.Panel>
      <Tabs.Panel value='Carthage'>
        <Calculator elements={factionLists.Carthage} />
      </Tabs.Panel>
      <Tabs.Panel value='Greece'>
        <Calculator elements={factionLists.Greece} />
      </Tabs.Panel>
      <Tabs.Panel value='Barbarians'>
        <Calculator elements={factionLists.Barbarians} />
      </Tabs.Panel>
    </Tabs>
  );
}
