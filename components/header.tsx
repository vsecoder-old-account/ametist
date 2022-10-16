import { AmethystLogo } from './logo';
import { useState, useEffect } from 'react';
import {
  createStyles,
  Container,
  Avatar,
  UnstyledButton,
  Group,
  Text,
  Menu,
  Tabs,
  Burger,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconLogout,
  IconChevronDown,
  IconUserExclamation,
  IconUserPlus
} from '@tabler/icons';
import { SwitchToggle } from './themetoggle';
import Link from 'next/link';
import { parseCookies } from 'nookies';

const useStyles = createStyles((theme) => ({
  header: {
    paddingTop: theme.spacing.sm,
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? 'transparent' : theme.colors.gray[2]
    }`,
  },

  mainSection: {
    paddingBottom: theme.spacing.sm,
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  tabs: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  tabsList: {
    borderBottom: '0 !important',
  },

  tab: {
    fontWeight: 500,
    height: 38,
    backgroundColor: 'transparent',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1],
    },

    '&[data-active]': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
      borderColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[2],
    },
  },
}));

export function HeaderTabs() {
  const { classes, theme, cx } = useStyles();
  const [opened, { toggle }] = useDisclosure(false);
  const [userMenuOpened, setUserMenuOpened] = useState(false);

  const [name, setName] = useState('...')
  const jwt = parseCookies().jwt;
  const id = parseCookies().id;
  //const username = parseCookies().username;
  useEffect(() => {
    const n = parseCookies().username;
    if (n) {
      setName(n)
    } else {
      setName('Войти')
    }
  }, [])
  const user= {name: name, image: 'https://minotar.net/helm/'+name}

  return (
    <div className={classes.header}>
      <Container className={classes.mainSection}>
        <Group position="apart">
          <AmethystLogo />

          <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />

          <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar src={user.image} alt={user.name} size={30} />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {user.name == 'Войти' && <Link href='/auth'>Войти</Link>}
                    {user.name != 'Войти' && user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item>
                <SwitchToggle />
              </Menu.Item>
              {user.name != 'Войти' && 
              <>
                <Link href={'/p/'+user.name}>
                  <Menu.Item icon={<IconUserExclamation size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                    Профиль
                  </Menu.Item>
                </Link>
                <Link href='/logout'>
                  <Menu.Item icon={<IconLogout size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                    Выйти из аккаунта
                  </Menu.Item>
                </Link>
              </>
              }
              {user.name == 'Войти' && 
                <Link href='/auth'>
                  <Menu.Item icon={<IconUserPlus size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                    Войти
                  </Menu.Item>
                </Link>
              }
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Container>
    </div>
  );
}