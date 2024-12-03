import { useGSAP } from "@gsap/react";
import {
  ActionIcon,
  alpha,
  Avatar,
  Badge,
  Box,
  Button,
  Checkbox,
  ColorSwatch,
  Container,
  CopyButton,
  Divider,
  em,
  Flex,
  Grid,
  Group,
  Image,
  Menu,
  NumberFormatter,
  Paper,
  rem,
  Space,
  Stack,
  Table,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import {  useRef, useState } from "react";
import styles from "./Account.module.css";
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconBellFilled,
  IconChevronDown,
  IconCopy,
  IconDots,
  IconMessages,
  IconNote,
  IconPackage,
  IconPlus,
  IconRefresh,
  IconReportAnalytics,
  IconSettings,
  IconSquareCheck,
  IconSun,
  IconTrash,
  IconUsers,
} from "@tabler/icons-react";
import { AreaChart } from "@mantine/charts";
import {  motion } from "framer-motion";
import {
  clickme,
  euro,
  GBP,
  logoWhite,
  NG,
  sterling,
  usa,
  wema,
  zenith,
} from "../../../assets/images";
import IPhoneMockup from "../../../components/iphoneMockup/IphoneMockup";
import AccountScreen from "../../../components/mockupScreens/accountScreen/AccountScreen";
import { Carousel } from "@mantine/carousel";
import SlotCounter from "react-slot-counter";

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

const BoxMotion = motion.create(Box, { forwardMotionProps: true });
const PaperMotion = motion.create(Paper, { forwardMotionProps: true });

const AccountSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const containerRef = useRef(null);
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.from(".graphics1", {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
      },
      y: 50,
      opacity: 0,
      stagger: 0.4,
      duration: 0.5,
      ease: "power1.inOut",
      delay: 0.2,
    });
  });

  const webBox = (
    <Box h={450} className={`${styles.graphics1_web} `}>
      <Graphics1Account />
    </Box>
  );

  const mobileBox = (
    <Box h={450} className={`${styles.graphics1_mobile} `}>
      <Box className={styles.graphics1_mobile_mockup}>
        <IPhoneMockup>
          <AccountScreen />
        </IPhoneMockup>
      </Box>
    </Box>
  );

  const renderGraphics = () => {
    if (isMobile) {
      return (
        <Carousel slideGap={"sm"} slideSize={"94%"} withControls={false}>
          <Carousel.Slide>{webBox}</Carousel.Slide>
          <Carousel.Slide>{mobileBox}</Carousel.Slide>
        </Carousel>
      );
    }

    return (
      <Box>
        <Grid>
          <Grid.Col span={7} className="graphics1">
            {webBox}
          </Grid.Col>
          <Grid.Col span={5} className="graphics1">
            {mobileBox}
          </Grid.Col>
        </Grid>
      </Box>
    );
  };

  return (
    <Container fluid ref={containerRef} w={"100%"} p={0}>
      <Stack gap={"xl"} w={"100%"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Accounts
              </Text>

              <Title tt={"capitalize"} order={1}>
                All Your accounts from a unified point.
              </Title>
            </Box>
            <Box>
              <Text>
                Create, manage and connect all your bank accounts, Gain
                crystal-clear insight into your finances by managing all your
                accounts from a single interface.
              </Text>
            </Box>
            <Box></Box>
          </Stack>
        </Box>
        {/* Gsap animation elements here  */}
        {renderGraphics()}

        {/* Gsap animation elements ends here */}
        <Box>
          <Box>
            <Divider />
            <Grid m={"xs"}>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    paddingInlineEnd: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                    overflow: "hidden",
                  },
                }}
              >
                <Stack maw={450} py={"xl"} h={450}>
                  <Box>
                    <Title order={3} fw={"bold"}>
                      A bank account for your every need
                    </Title>
                    <Text>
                      Open bank accounts in minutes for your every need designed
                      to fit seamlessly into your financial life.
                    </Text>
                  </Box>
                  <Graphics2Account />
                </Stack>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    borderLeft: !isMobile
                      ? `thin solid var(--mantine-color-default-border)`
                      : "none",
                    borderTop: !isMobile
                      ? "none"
                      : `thin solid var(--mantine-color-default-border)`,
                    paddingInlineStart: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                  },
                }}
              >
                <Stack py={"xl"} h={450}>
                  <Box maw={450}>
                    <Title tt={"capitalize"} order={3} fw={"bold"}>
                      link your bank accounts to Soranix
                    </Title>
                    <Text>
                      Securely sync all your external bank accounts on Soranix
                      to get a unified view of your balance and transactions.
                    </Text>
                  </Box>
                  <LinkedAccountSyncDisplay />
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
          <Divider />
          <Box>
            <Grid m={"xs"}>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    paddingInlineEnd: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                  },
                }}
              >
                <Stack py={"xl"} h={450} pos={"relative"}>
                  <Box maw={500}>
                    <Title tt={"capitalize"} order={3} fw={"bold"}>
                      Get paid in different currencies.
                    </Title>
                    <Text>
                      Looking to get paid ? Soranix lets you Manage, exchange,
                      and hold multiple currencies effortlessly—all in one
                      place.
                    </Text>
                  </Box>
                  <MultiCurrencyDisplayGraphics />
                </Stack>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    borderLeft: !isMobile
                      ? `thin solid var(--mantine-color-default-border)`
                      : "none",
                    borderTop: !isMobile
                      ? "none"
                      : `thin solid var(--mantine-color-default-border)`,
                    paddingInlineStart: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                  },
                }}
              >
                <Stack py={"xl"} h={450} style={{ overflow: "hidden" }}>
                  <Box maw={500}>
                    <Title tt={"capitalize"} order={3} fw={"bold"}>
                      Customize Your Banking Experience{" "}
                    </Title>
                    <Text>
                      Customize your account with global or local policies. Set
                      limits, manage transactions, and ensure your finances
                      align with your goals
                    </Text>
                  </Box>
                  <AccountCustomizationGraphics />
                </Stack>
              </Grid.Col>
            </Grid>
            <Divider />
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default AccountSection;

const Graphics1Account = () => {
  const theme = useMantineTheme();

  const accountsTableData = [
    {
      id: 1,
      alias: "Main Account",
      type: "Deposit",
      currency: "NGN ",
      symbol: "₦",
      balance: 3289238,
      status: "active",
    },
    {
      id: 2,
      alias: "Betting Account",
      type: "Savings",
      currency: "NGN ",
      symbol: "₦",
      balance: 3289238,
      status: "active",
    },
    {
      id: 3,
      alias: "Freelance Account ",
      type: "Virtual",
      currency: "USD ",
      symbol: "$",
      balance: 3289238,
      status: "active",
    },
  ];

  const colorSelector = (type) => {
    switch (type) {
      case "Virtual":
        return "orange";
      case "Savings":
        return "yellow";
      case "Deposit":
        return "indigo";
      default:
        return "var(--mantine-primary-color-filled)";
    }
  };

  const rows = accountsTableData.map((i) => (
    <Table.Tr key={i.id}>
      <Table.Td fz={"xs"}>{i.alias}</Table.Td>
      <Table.Td fz={"xs"}>
        <Badge
          variant="dot"
          color={colorSelector(i.type)}
          size="xs"
          radius={"sm"}
        >
          {i.type}
        </Badge>
      </Table.Td>
      <Table.Td fz={"xs"}>
        <Badge variant="light" color="teal" radius={"sm"} size="xs">
          {i.status}
        </Badge>
      </Table.Td>
      <Table.Td fz={"xs"}>{i.currency + i.symbol}</Table.Td>
      <Table.Td fz={"xs"}>
        <NumberFormatter
          prefix={i.symbol}
          value={i.balance}
          thousandSeparator
        />
      </Table.Td>
      <Table.Td fz={"xs"}>
        <Menu
          transitionProps={{ transition: "fade-down" }}
          withArrow
          position="bottom-end"
          withinPortal
        >
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" size={"sm"}>
              <IconDots
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconMessages
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              View account
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessages
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Copy Acc Number
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconNote
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Go to reports
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconReportAnalytics
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
            >
              Download Statement
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconTrash
                  style={{ width: rem(16), height: rem(16) }}
                  stroke={1.5}
                />
              }
              color="red"
            >
              Close account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ));

  const iosButtons = ["teal", "yellow", "red"].map((i) => (
    <ColorSwatch withShadow size={9} color={i} key={i} />
  ));

  return (
    <Container p={0} w={"100%"} size={"md"}>
      <Box className={styles.graphics1_wrapper}>
        <Box className={styles.graphics1_container}>
          <Box className={styles.graphics1_content}>
            <Flex h={30} p={"xs"} align={"center"} justify={"space-between"}>
              <Group gap={"xs"}>{iosButtons}</Group>

              <Group gap={"xs"} align="center">
                <ActionIcon
                  color="gray"
                  radius={"lg"}
                  variant="light"
                  size={"xs"}
                >
                  <IconPlus size={14} />
                </ActionIcon>
                <Divider orientation="vertical" />

                <ActionIcon variant="transparent" size={"xs"} color="gray">
                  <IconSun />
                </ActionIcon>
                <ActionIcon variant="transparent" size={"xs"} color="gray">
                  <IconBellFilled />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size={"xs"}
                  // color="gray"
                  radius={"xl"}
                >
                  <Avatar radius={"lg"} size={"sm"} name="ri" />
                </ActionIcon>
              </Group>
            </Flex>
            <Divider />
            <Stack p={"md"} gap={"lg"}>
              <Flex justify={"space-between"} align={"center"}>
                <Title fz={"md"}>Accounts Overview</Title>
                <Group>
                  <Menu
                    transitionProps={{ transition: "pop-top-right" }}
                    position="top-end"
                    width={280}
                    radius={"md"}
                    // withinPortal
                  >
                    <Menu.Target>
                      <Button size="compact-xs">Create new</Button>
                    </Menu.Target>
                    <Menu.Dropdown styles={{}}>
                      <Menu.Label>Accounts</Menu.Label>

                      <Menu.Item
                        leftSection={
                          <IconPackage
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.blue[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Deposit Account
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconSquareCheck
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.pink[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Sub Account
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconUsers
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.cyan[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Virtual Account
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconUsers
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.cyan[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Linked Account
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconUsers
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.cyan[6]}
                            stroke={1.5}
                          />
                        }
                      >
                        Multi-Currency Account
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                  <ActionIcon variant="subtle" size={"sm"} color="gray">
                    <IconSettings style={{ width: rem(15), height: rem(15) }} />
                  </ActionIcon>
                </Group>
              </Flex>
              <Box>
                <Text c={"dimmed"} fw={600} size="10px">
                  Aggregated Balance
                </Text>
                <Title order={2} fw={"bold"}>
                  <NumberFormatter
                    prefix="₦"
                    value={6780000}
                    thousandSeparator
                  />
                </Title>
              </Box>
              <Box>
                {/* this is the chart */}
                <AreaChart
                  h={110}
                  withYAxis={false}
                  withDots={false}
                  withXAxis={true}
                  withTooltip={false}
                  data={[
                    {
                      date: "Mar 22",
                      Deposit: 2890,
                      Sub_Ledgers: 2338,
                      Virtual: 2452,
                      Savings: 2452,
                    },
                    {
                      date: "Mar 23",
                      Deposit: 1056,
                      Sub_Ledgers: 2103,
                      Virtual: 2402,
                      Savings: 2402,
                    },
                    {
                      date: "Mar 24",
                      Deposit: 5322,
                      Sub_Ledgers: 986,
                      Virtual: 1821,
                      Savings: 1821,
                    },
                    {
                      date: "Mar 25",
                      Deposit: 3470,
                      Sub_Ledgers: 2108,
                      Virtual: 2809,
                      Savings: 2809,
                    },
                    {
                      date: "Mar 26",
                      Deposit: 3129,
                      Sub_Ledgers: 1726,
                      Virtual: 2290,
                      Savings: 2290,
                    },
                  ]}
                  dataKey="date"
                  type="stacked"
                  // withLegend={true}
                  legendProps={{
                    verticalAlign: "top",
                    height: 30,
                    iconType: "diamond",
                    iconSize: 10,
                  }}
                  fillOpacity={0.5}
                  series={[
                    { name: "Deposit", color: "orange.8" },
                    // { name: "Sub_Ledgers", color: "teal.8" },
                    // { name: "Virtual", color: "indigo.8" },
                    // { name: "Savings", color: "yellow.8" },
                  ]}
                />
              </Box>
              {/* render the skeleton */}
              <Box>
                <Group>
                  <Box>
                    <Text c={"dimmed"} fw={600} size="10px">
                      Inflow (Agg)
                    </Text>
                    <Group gap={2}>
                      <Title order={5} fw={"normal"} c={"teal"}>
                        <NumberFormatter
                          prefix="₦"
                          value={2943950}
                          thousandSeparator
                        />
                      </Title>
                      <IconArrowNarrowUp
                        size={18}
                        color={"var(--mantine-color-teal-filled)"}
                      />
                    </Group>
                  </Box>
                  <Box>
                    <Text c={"dimmed"} fw={600} size="10px">
                      Outflow (Agg)
                    </Text>

                    <Group gap={2}>
                      <Title order={5} fw={"normal"} c={"red"}>
                        <NumberFormatter
                          prefix="₦"
                          value={1849300}
                          thousandSeparator
                        />
                      </Title>
                      <IconArrowNarrowDown
                        size={18}
                        color={"var(--mantine-color-red-filled)"}
                      />
                    </Group>
                  </Box>
                  <Box visibleFrom="md">
                    <Text c={"dimmed"} fw={600} size="10px">
                      Savings (Agg)
                    </Text>

                    <Group gap={2}>
                      <Title order={5} fw={"normal"}>
                        <NumberFormatter
                          prefix="₦"
                          value={11849300}
                          thousandSeparator
                        />
                      </Title>
                      {/* <IconArrowNarrowDown size={18} color={'var(--mantine-color-red-filled)'}/> */}
                    </Group>
                  </Box>

                  <ActionIcon
                    color="gray"
                    size={"xs"}
                    radius={"xl"}
                    variant="light"
                  >
                    <IconPlus size={16} />
                  </ActionIcon>
                </Group>
              </Box>

              {/* <Tabs variant="outline" defaultValue="first">
                <Tabs.List>
                  <Tabs.Tab value="first">Accounts</Tabs.Tab>
            
                  <Tabs.Tab disabled value="third">
                    Events
                  </Tabs.Tab>
                </Tabs.List>
              </Tabs> */}
              {/* Accounts Table display */}

              <Box>
                <Stack gap={0}>
                  <Divider />
                  <Table.ScrollContainer minWidth={500}>
                    <Table withColumnBorders>
                      <Table.Thead bg={"gray.0"}>
                        <Table.Tr>
                          <Table.Th fz={"xs"}>Alias</Table.Th>
                          <Table.Th fz={"xs"}>Type</Table.Th>
                          <Table.Th fz={"xs"}>Status</Table.Th>
                          <Table.Th fz={"xs"}>Currency</Table.Th>
                          <Table.Th fz={"xs"}>Balance</Table.Th>
                          <Table.Th fz={"xs"}></Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>{rows}</Table.Tbody>
                    </Table>
                  </Table.ScrollContainer>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const Graphics2Account = () => {
  const cardsData = [
    {
      id: 2,
      alias: "Rent Account",
      symbol: "₦",
      currency: "NG",
      balance: 685404,
    },
    {
      id: 1,
      alias: "Japa Account ✈️ 🛬",
      currency: "NG",
      symbol: "₦",
      balance: 685404,
    },
    {
      id: 3,
      alias: "Main Account ⛱️🏖️",
      symbol: "₦",
      balance: 685404,
      currency: "NG",
    },
  ];

  const account_cards = cardsData.map((i) => (
    <Box key={i.id} className={styles.graphics2_account_card}>
      <Stack gap={"sm"}>
        <Flex justify={"space-between"}>
          <Group gap={"sm"}>
            <Avatar size={"xs"} src={NG} />
            <Title order={5}>{i.alias}</Title>
          </Group>

          <Badge>Status</Badge>
        </Flex>
        <Box>
          <Text c={"dimmed"} fz={"xs"}>
            Balance
          </Text>
          <Title order={3} fw={"bold"}>
            <NumberFormatter
              prefix={i.symbol}
              value={i.balance}
              thousandSeparator
            />
          </Title>
        </Box>
        {/* <Group>
        {actions}
        </Group> */}
      </Stack>
    </Box>
  ));

  return (
    <Box className={styles.graphics2_wrapper}>
      <Box className={styles.graphics2_account_cards_cont}>{account_cards}</Box>
    </Box>
  );
};

const AccountCustomizationGraphics = () => {
  const customizations = [
    {
      id: 1,
      title: "Account Settings",
      icon: <IconSettings size={18} />,
      description: "Manage your account settings",
    },
    {
      id: 2,
      title: "Account Policies",
      icon: <IconSettings size={18} />,
      description: "Manage your account settings",
    },
    {
      id: 3,
      title: "Permissions",
      icon: <IconSettings size={18} />,
      description: "Manage your account settings",
    },
    {
      id: 4,
      title: "Alerts & Notifications",
      icon: <IconSettings size={18} />,
      description: "Manage your account settings",
    },
  ];

  const customizationsRender = customizations.map((i, index) => {
    return (
      <Box key={i.id}>
        <Group px={"sm"} py={"xs"}>
          <IconChevronDown size={16} color="var(--mantine-color-dimmed)" />
          <Text c={"dimmed"} size="sm">
            {i.title}
          </Text>
        </Group>
        {index + 1 !== customizations.length && <Divider />}
      </Box>
    );
  });

  const permissions = ["View Balance", "Create Transfer", "Update Account"];

  return (
    <Box w={"100%"} p={"lg"} pos={"relative"}>
      <Paper
        maw={500}
        h={"100%"}
        w={"100%"}
        style={{
          backgroundColor: alpha("var(--mantine-color-gray-4)", 0.74),
        }}
        radius={"lg"}
        p={5}
      >
        <Paper h={"100%"} radius={"lg"}>
          <Box p={"xs"}>
            <Group justify="space-between" align="start">
              <Box>
                <Title order={6}>Main Account</Title>
                <Group gap={3}>
                  <Text tt={"capitalize"} size="xs" c={"dimmed"}>
                    00034237611
                  </Text>
                  <CopyButton>
                    {(props) => <IconCopy style={{ width: rem(14) }} />}
                  </CopyButton>
                </Group>
              </Box>
              <Badge radius={"md"} color="teal">
                Active
              </Badge>
            </Group>
          </Box>
          <Divider />
          <Stack gap={0}>{customizationsRender}</Stack>
        </Paper>
      </Paper>
      <Paper
        pos={"absolute"}
        shadow="sm"
        bottom={0}
        right={0}
        w={300}
        h={150}
        bg={"white"}
        p={"sm"}
        withBorder
        radius={"md"}
      >
        <Stack>
          <Group>
            <Title order={5} fw={"normal"}>
              Flow Permissions
            </Title>
          </Group>
          <Stack gap={"xs"}>
            {permissions.map((i) => (
              <Group key={i} align="center">
                <Checkbox checked size="xs" />
                <Text size="sm">{i}</Text>
              </Group>
            ))}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
};

const LinkedAccountSyncDisplay = () => {
  const counterRef = useRef(null);
  const [balance, setBalance] = useState("20,0000");

  const generateRandomBalance = () => {
    const randomValue = (Math.random() * 1000000).toFixed(2);
    return Number(randomValue).toLocaleString("en-US");
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
    });
    tl.to("#sync", {
      rotate: "360deg",
      repeat: 2,
      ease: "linear",
      duration: 1,
    });
    tl.to(".sync_box", {
      opacity: 0,
      onComplete: () => {
        setBalance(generateRandomBalance());
      },
    });
  });

  return (
    <Box pos="relative" w={"100%"} h={"100%"}>
      <Stack gap={0} align="center" justify="center">
        <svg
          width="100%"
          height="200"
          viewBox="0 0 337 266"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="2" y="30" width="45" height="45" fill="url(#pattern0_0_1)" />
          <rect
            x="0.5"
            y="86.5"
            width="48"
            height="23"
            rx="4.5"
            stroke="var(--mantine-color-default-border)"
          />
          <text
            x="23"
            y="101"
            fontSize="12"
            textAnchor="middle"
            // dominantBaseline="middle"
            fontFamily="Inter"
            fill="black"
          >
            ₦10K
          </text>
          <rect
            x="147.5"
            y="54.5"
            width="48"
            height="23"
            rx="4.5"
            stroke="var(--mantine-color-default-border)"
          />
          <text
            x="170"
            y="70"
            fontSize="12"
            textAnchor="middle"
            // dominantBaseline="middle"
            fontFamily="Inter"
            fill="black"
          >
            ₦25K
          </text>
          <rect x="149" width="45" height="45" fill="url(#pattern1_0_1)" />
          <rect
            x="288.5"
            y="86.5"
            width="48"
            height="23"
            rx="4.5"
            stroke="black"
          />
          <text
            x="312"
            y="101"
            fontSize="12"
            textAnchor="middle"
            // dominantBaseline="middle"
            fontFamily="Inter"
            fill="black"
          >
            ₦10K
          </text>
          <g clipPath="url(#clip0_0_1)">
            <rect x="292" y="30" width="42" height="42" rx="21" fill="white" />
            <rect
              x="292"
              y="30"
              width="42"
              height="42"
              fill="url(#pattern2_0_1)"
            />
          </g>
          <rect x="134" y="161" width="75" height="75" rx="20" fill="#1E1E1E" />
          <rect
            x="149"
            y="177"
            width="45"
            height="42.6316"
            fill="url(#pattern3_0_1)"
          />
          <line
            x1="172.5"
            y1="81"
            x2="172.5"
            y2="161"
            stroke="black"
            strokeDasharray="2 4"
            id="p1"
          />
          <line
            x1="172.5"
            y1="236"
            x2="172.5"
            y2="266"
            stroke="black"
            strokeDasharray="2 4"
          />
          <path
            d="M25 111V170C25 183.807 36.1929 195 50 195H134"
            stroke="black"
            strokeDasharray="2 4"
          />
          <path
            d="M311.5 112.5V169.5C311.5 183.307 300.307 194.5 286.5 194.5H208.5"
            stroke="black"
            strokeDasharray="2 4"
          />
          <defs>
            <pattern
              id="pattern0_0_1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image0_0_1" transform="scale(0.00195312)" />
            </pattern>
            <pattern
              id="pattern1_0_1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use xlinkHref="#image1_0_1" transform="scale(0.00195312)" />
            </pattern>
            <pattern
              id="pattern2_0_1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image2_0_1"
                transform="translate(0 -0.0060241) scale(0.00172117)"
              />
            </pattern>
            <pattern
              id="pattern3_0_1"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image3_0_1"
                transform="matrix(0.00436681 0 0 0.00460941 0 -0.0139495)"
              />
            </pattern>
            <clipPath id="clip0_0_1">
              <rect
                x="292"
                y="30"
                width="42"
                height="42"
                rx="21"
                fill="white"
              />
            </clipPath>
            <image id="image0_0_1" width="512" height="512" href={sterling} />
            <image id="image1_0_1" width="512" height="512" href={zenith} />
            <image id="image2_0_1" width="581" height="588" href={wema} />
            <image id="image3_0_1" width="229" height="223" href={logoWhite} />
          </defs>
        </svg>
        <Stack align="center" pos={"relative"} w={"100%"}>
          <Box className={styles.linked_account_balance} />
          <Box className={styles.linked_account_balance} />
          <Box className={styles.linked_account_balance}>
            <Group justify="space-between" align="start" p={"xs"}>
              <Box>
                <Text c={"dimmed"} size="xs">
                  Total Balance
                </Text>
                <Group align="end" gap={4}>
                  <Title order={3}> ₦</Title>
                  <Title order={3}>
                    <SlotCounter ref={counterRef} value={balance} />
                  </Title>
                </Group>
              </Box>
              <Group gap={"xs"} className={"sync_box"}>
                <Text c={"dimmed"} size="xs">
                  Syncing
                </Text>
                <IconRefresh
                  id="sync"
                  color="var(--mantine-color-teal-5)"
                  size={18}
                />
              </Group>
            </Group>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

const MultiCurrencyDisplayGraphics = () => {
 const initialCurrencies = [
   {
     id: 1,
     currency: "USD",
     balance: "20,000",
     symbol: "$",
     icon: usa,
     accountNumber: "1234567890",
     bankName: "BOA",
     swiftCode: "BOFAUS3N",
   },
   {
     id: 2,
     currency: "EUR",
     balance: "20,000",
     symbol: "€",
     icon: euro,
     accountNumber: "0987654321",
     bankName: "Deutsche Bank",
     swiftCode: "DEUTDEFF",
   },
   {
     id: 3,
     currency: "GBP",
     balance: "20,000",
     symbol: "£",
     icon: GBP,
     accountNumber: "1122334455",
     bankName: "Barclays",
     swiftCode: "BARCGB22",
   },
 ];


  const [currencies, setCurrencies] = useState(initialCurrencies);

  const clickToMoveIndex = (clickedId) => {
    const clickedIndex = currencies.findIndex(
      (currency) => currency.id === clickedId
    );
    const newOrder = [
      currencies[clickedIndex],
      ...currencies.slice(0, clickedIndex),
      ...currencies.slice(clickedIndex + 1),
    ];
    setCurrencies(newOrder);
  };

  return (
    <Stack
      h={"100%"}
      w={"100%"}
      p={"sm"}
      align="center"
      justify="center"
      pos={"relative"}
      gap={0}
    >
      {/* Multicurrency cards */}
      <Box h={100} w={100} pos={"absolute"} top={-21} right={0}>
        <Image className={styles.clickme} src={clickme} />
      </Box>
      <Stack pos="relative" w="100%" h="100%" align="center">
        {currencies.map((currency, index) => (
          <Box
            key={currency.id}
            className={`${styles.multicurrency_card_wrapper}`}
            data-is={index + 1}
            onClick={() => clickToMoveIndex(currency.id)}
          >
            <Box className={styles.multicurrency_card_header}>
              <Image src={currency.icon} h={20} />
              <Text fw={500}>{currency.currency} Bank Account</Text>
            </Box>
            <Box className={styles.multicurrency_card_body}>
              <Group>
                <Title order={1} fw={500}>
                  {currency.symbol}
                  {currency.balance}
                </Title>
              </Group>
              <Space h={10} />
              <Divider />
              <Space h={10} />
              <Group justify="space-between">
                <Box >
                  <Text c={"dimmed"} size="xs">
                    Bank Name
                  </Text>
                  <Text size="sm">{currency.bankName}</Text>
                </Box>
                <Box>
                  <Text c={"dimmed"} size="xs">
                    Account Number
                  </Text>
                  <Text>{currency.accountNumber}</Text>
                </Box>

                <Box>
                  <Text c={"dimmed"} size="xs">
                    Swift Code
                  </Text>
                  <Text>{currency.swiftCode}</Text>
                </Box>
              </Group>
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};

//  <Title order={3} fw={"normal"}>
//                       Real-time, actionable analytics using AI.
//                     </Title>
//                     <Text c={"dimmed"}>
//                       Make inforned decisions about your finances, with
//                       real-time analytics that reveal trend and patterns from
//                       all your account data.
//                     </Text>
