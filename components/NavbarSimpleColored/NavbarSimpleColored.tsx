import { useState } from 'react';
import {
  IconBookDownload,
  IconCoin,
  IconUser,
} from '@tabler/icons-react';
import { Code, Group } from '@mantine/core';
import classes from './NavbarSimpleColored.module.css';

const data = [
    { link: '/calculator', label: 'Purchase Calculator', icon: IconCoin },
    { link: '/agents', label: 'Agents', icon: IconUser },
  ];

export function NavbarSimpleColored() {
  const [active, setActive] = useState('Billing');

  const links = data.map((item) => (
    <a
      className={classes.link}
      data-active={item.label === active || undefined}
      href={item.link}
      key={item.label}
      onClick={(event) => {
        setActive(item.label);
      }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </a>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        {links}
      </div>

      <div className={classes.footer}>
      <a href="/rules/official" className={classes.link}>
          <IconBookDownload className={classes.linkIcon} stroke={1.5} />
          Official Rules
        </a>
        <a href="/rules/rosetta" className={classes.link}>
          <IconBookDownload className={classes.linkIcon} stroke={1.5} />
          Rosetta Rules
        </a>
        <a href="/rules/battleplay" className={classes.link}>
          <IconBookDownload className={classes.linkIcon} stroke={1.5} />
          Battle Play Rules
        </a>
      </div>
    </nav>
  );
}