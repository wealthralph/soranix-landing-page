import { Text, Container, ActionIcon, Group, rem, Grid, Badge } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandDiscord, IconBrandX, IconBrandWhatsapp } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';

const data = [
  {
    title: 'For Individuals',
    links: [
      { label: 'Accounts', link: '#' },
      { label: 'Virtual Cards', link: '#' },
      { label: 'Payments Links', link: '#' },
      { label: 'Investments', link: '#' },
      { label: 'Global Transfers', link: '#' },
      { label: 'Flows', link: '#' },
      { label: 'Bots', link: '#' },
      { label: 'Sentinels', link: '#' },
    ],
  },
  {
    title: 'For Business',
    links: [
      { label: 'Business Banking', link: '#' },
      { label: 'For Personal', link: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', link: '#' },
      { label: 'Careers', link: '#', badge: "Hiring" },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Use', link: '#' },
      { label: 'Privacy Policy', link: '#' },
      { label: 'Disclaimer', link: '#' },
      { label: 'Law Enforcement', link: '#' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Support@soranix.com', link: '#' },
      { label: 'Contact Us', link: '#' },
      { label: 'KYC Center', link: '#' },
    ],
  },
];

function Footer() {

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component="a"
        href={link.link}
        size='xs'
        onClick={(event) => event.preventDefault()}
      >
        <Group gap={'xs'}>
          <Text inherit span>
            {link.label}
          </Text>
          {link.badge && <Badge  variant='light'radius={'sm'} size='xs'>{link.badge}</Badge>}
        </Group>
      </Text>
    ));

    return (
      <Grid.Col span={3} key={group.title}>
        <Text size='sm'  className={classes.title_dat}>{group.title}</Text>
        {links}
      </Grid.Col>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Text size="xs" c="dimmed" className={classes.description}>
            One Platform to manage your personal and business finances.
          </Text>
        </div>
        <Grid gutter={'md'}>{groups}</Grid>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} Soranix All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandX style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandWhatsapp style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandInstagram style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandDiscord style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default Footer