import { Text, Container, ActionIcon, Group, rem, Grid, Badge } from '@mantine/core';
import { IconBrandInstagram, IconBrandDiscord, IconBrandX, IconBrandWhatsapp, IconBrandFacebook } from '@tabler/icons-react';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './Footer.module.css';

const data = [
  {
    title: 'For Individuals',
    links: [
      { label: 'Accounts', link: '#' },
      { label: 'Virtual Cards', link: '#' },
      { label: 'Payments Links', link: '#' },
      { label: 'Savings', link: '#' },
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
      { label: 'Account Payable', link: '#' },
      { label: 'Advanced Controls', link: '#' },
      { label: 'Accounting', link: '#' },
      { label: 'Expense Management', link: '#' },
      { label: 'Corporate Cards', link: '#' },
      { label: 'Invoice', link: '#' },
      { label: 'Commerce', link: '#' , badge: "Soon"},     
    ],
  },
  {
    title: 'Platform',
    links: [
      { label: 'Soranix AI', link: '#' },
      { label: 'Automation', link: '#' },
      { label: 'Banking Onchain', link: '#' },
      { label: 'Global Ready', link: '#' },
      { label: 'ATC Engine ', link: '#' },
      { label: 'Integrations', link: '#' },
      { label: 'Security', link: '#' },
      
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', link: '#' },
      { label: 'Careers', link: '#', badge: "Hiring" },
      { label: 'Changelog', link: '#' },
      { label: 'Status', link: '#' },

    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Pricing', link: '#' },
      { label: 'Guides', link: '#', badge: "Hiring" },
      { label: 'Changelog', link: '#' },
      { label: 'Status', link: '#' },

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
      { label: 'Live Chat', link: '#' },
    ],
  },
];

function Footer() {

  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        component="a"
        href={link.link}
        size='xs'
        onClick={(event) => event.preventDefault()}
      >
        <Group gap={'xs'} mb={3}>
          <Text inherit span className={classes.link}
          >
            {link.label}
          </Text>
          {link.badge && <Badge variant='light' radius={'sm'} size='xs'>{link.badge}</Badge>}
        </Group>
      </Text>
    ));

    return (
      <Grid.Col span={{base:6, sm:4, md: 4, lg: 3}} key={group.title}>
        <Text size='sm' mb={3} className={classes.title}>{group.title}</Text>
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
          <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandFacebook style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
      <Container>

        <Text size='sm' c={'dimmed'}>Soranix is a financial technology company, not a bank. Banking services are provided by licensed banking partners. Canadian services are offered by Aboki Finance Inc with registered address at 1285 West Broadway Suite 600 Vancouver BC V6H 3X8. Canada. Aboki Finance Inc. is regulated by FINTRAC. US services are offered by Soranix Inc. with its registered address at 651 N Broad St, Suite 206 Middletown DE 19709 US. Soranix Inc is regulated by FinCEN. Copyright © Soranix Inc. 2023.</Text>
      </Container>
    </footer>
  );
}

export default Footer