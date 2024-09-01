import {
  HoverCard,
  Group,
  Button,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  rem,
  useMantineTheme,
  Title,
  Container,
} from "@mantine/core";
import {
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import styles from "./Navbar.module.css";

const mockdata = [
  {
    icon: IconCode,
    title: "Accounts",
    // description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Payments",
    // description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Virtual Card",
    // description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Investment",
    // description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Flows",
    // description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconChartPie3,
    title: "Automation",
    // description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconChartPie3,
    title: "Vendor",
    // description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconChartPie3,
    title: "Reports",
    // description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconChartPie3,
    title: "Soranix AI",
    // description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconChartPie3,
    title: "Savings",
    // description: "This Pokémon uses its flying ability to quickly chase",
  },
];

function Navbar() {
  const theme = useMantineTheme();

  const links = mockdata.map((item) => (
    <div className={styles.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon
            style={{ width: rem(22), height: rem(22) }}
            color={theme.colors.blue[6]}
          />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </div>
  ));

  return (
    <div className={styles.navbar_root}>
      <div className={styles.navbar_blur}></div>
      <div className={styles.navbar}>
        <header className={styles.header}>
          <Group justify="space-between" h="100%">
            <Title order={4}>Soranix</Title>

            <Group h="100%" gap={0} visibleFrom="sm">
              <HoverCard
                width={600}
                position="bottom"
                radius="md"
                shadow="md"
                withinPortal={false}
              >
                <HoverCard.Target>
                  <a href="#" className={styles.link}>
                    <Center inline>
                      <Box component="span" mr={5}>
                        Products
                      </Box>
                      <IconChevronDown
                        style={{ width: rem(16), height: rem(16) }}
                        color={theme.colors.blue[6]}
                      />
                    </Center>
                  </a>
                </HoverCard.Target>

                <HoverCard.Dropdown style={{ overflow: "hidden" }}>
                  <Group justify="space-between" px="md">
                    <Text fw={500}>Features</Text>
                    <Anchor href="#" fz="xs">
                      View all
                    </Anchor>
                  </Group>

                  <Divider my="sm" />

                  <SimpleGrid cols={2} spacing={"sm"}>
                    {links}
                  </SimpleGrid>

                  <div className={styles.dropdownFooter}>
                    <Group justify="space-between">
                      <div>
                        <Text fw={500} fz="sm">
                          Get started
                        </Text>
                        <Text size="xs" c="dimmed">
                          Their food sources have decreased, and their numbers
                        </Text>
                      </div>
                      <Button variant="default">Get started</Button>
                    </Group>
                  </div>
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="#" className={styles.link}>
                Learn
              </a>
              <a href="#" className={styles.link}>
                Academy
              </a>
            </Group>

            <Group visibleFrom="sm">
              <Button size="compact-sm">Early Access</Button>
            </Group>
          </Group>
        </header>
      </div>
    </div>
  );
}

export default Navbar;
