import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
// import { useDisclosure } from '@mantine/hooks';
import { Link, useNavigate } from "react-router-dom";
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Headers.module.css';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/about', label: 'About' },
  { link: '/products/8', label: 'Products' },
  { link: '/cart', label: 'View Cart' },
];

export function Headers() {
  const navigate = useNavigate();
  // const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Link to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => { navigate(link.link); setActive(link.link); }}>
      {link.label}
    </Link>
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