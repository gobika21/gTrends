import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Headers.module.css';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/products', label: 'Products' },
  { link: '/login', label: 'Login' },
];

export function Headers() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <div className={classes.logo}>gTrends</div>
        <Group gap={20} visibleFrom="md">
          {items}
        </Group>
      </Container>
    </header>
  );
}

export default Headers;