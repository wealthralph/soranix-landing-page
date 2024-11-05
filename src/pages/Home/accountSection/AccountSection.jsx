import { useGSAP } from "@gsap/react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  ColorSwatch,
  Container,
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
  Stack,
  Switch,
  Table,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import gsap from "gsap";
import { MotionPathPlugin, ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import styles from "./Account.module.css";
import {
  IconArrowNarrowDown,
  IconArrowNarrowUp,
  IconBellFilled,
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
import { AreaChart, BarChart } from "@mantine/charts";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  fbn,
  gtb,
  linked,
  NG,
  re,
  sterling,
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
                <Stack py={"xl"} h={450}>
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
                  <Box h={"100%"}></Box>
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
                  <Graphics3AccountAnalytics />
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

const Graphics3AccountAnalytics = () => {
  const [data, setData] = useState([]);

  const generateCashflowData = () => {
    const data = [];
    const startDate = new Date();
    const getRandomValue = (min, max) =>
      Math.floor(Math.random() * (max - min + 2)) + min;

    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(date.getDate() - i);

      data.push({
        date: date.toISOString().split("T")[0], // Format date as 'YYYY-MM-DD'
        credit: getRandomValue(0, 50000), // Example range for cashflow values
        debit: getRandomValue(-50000, 2000), // Example range for cashflow values
      });
    }

    return data.reverse(); // Reverse to make the earliest date come first
  };

  return (
    <Stack
      pos={"relative"}
      style={{
        overflow: "hidden",
      }}
      h={"100%"}
    >
      <Image src={re} />
    </Stack>
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
            stroke="green"
          />
          <path
            d="M16.9659 97.4602V98.3125H8.27273V97.4602H16.9659ZM16.9659 99.3011V100.153H8.27273V99.3011H16.9659ZM16.0795 94.2727V103H15.0568L10.3011 96.1477H10.2159V103H9.15909V94.2727H10.1818L14.9545 101.142H15.0398V94.2727H16.0795ZM17.9332 101.21V100.341L21.7685 94.2727H22.3991V95.6193H21.973L19.0753 100.205V100.273H24.2401V101.21H17.9332ZM22.0412 103V100.946V100.541V94.2727H23.0469V103H22.0412ZM28.5643 103.119C28.0643 103.119 27.614 103.02 27.2134 102.821C26.8129 102.622 26.4918 102.349 26.2504 102.003C26.0089 101.656 25.8768 101.261 25.854 100.818H26.8768C26.9165 101.213 27.0955 101.54 27.4137 101.798C27.7347 102.054 28.1183 102.182 28.5643 102.182C28.9222 102.182 29.2404 102.098 29.5188 101.93C29.8001 101.763 30.0202 101.533 30.1793 101.24C30.3413 100.945 30.4222 100.611 30.4222 100.239C30.4222 99.858 30.3384 99.5185 30.1708 99.2202C30.006 98.919 29.7788 98.6818 29.489 98.5085C29.1992 98.3352 28.8683 98.2472 28.4961 98.2443C28.229 98.2415 27.9549 98.2827 27.6737 98.3679C27.3924 98.4503 27.1609 98.5568 26.979 98.6875L25.9904 98.5682L26.5188 94.2727H31.0529V95.2102H27.4052L27.0984 97.7841H27.1495C27.3285 97.642 27.5529 97.5241 27.8228 97.4304C28.0927 97.3366 28.3739 97.2898 28.6665 97.2898C29.2006 97.2898 29.6765 97.4176 30.0941 97.6733C30.5146 97.9261 30.8441 98.2727 31.0827 98.7131C31.3242 99.1534 31.445 99.6562 31.445 100.222C31.445 100.778 31.32 101.276 31.07 101.713C30.8228 102.148 30.4819 102.491 30.0472 102.744C29.6126 102.994 29.1183 103.119 28.5643 103.119ZM33.2912 103V94.2727H34.348V98.6023H34.4503L38.3707 94.2727H39.7514L36.0866 98.2102L39.7514 103H38.473L35.4389 98.9432L34.348 100.17V103H33.2912Z"
            fill="black"
          />
          <rect
            x="147.5"
            y="54.5"
            width="48"
            height="23"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M164.966 64.9602V65.8125H156.273V64.9602H164.966ZM164.966 66.8011V67.6534H156.273V66.8011H164.966ZM164.08 61.7727V70.5H163.057L158.301 63.6477H158.216V70.5H157.159V61.7727H158.182L162.955 68.642H163.04V61.7727H164.08ZM169.206 61.7727V70.5H168.149V62.8807H168.098L165.967 64.2955V63.2216L168.149 61.7727H169.206ZM174.562 70.6193C173.92 70.6193 173.374 70.4446 172.922 70.0952C172.47 69.7429 172.125 69.233 171.886 68.5653C171.648 67.8949 171.528 67.0852 171.528 66.1364C171.528 65.1932 171.648 64.3878 171.886 63.7202C172.128 63.0497 172.474 62.5384 172.926 62.1861C173.381 61.831 173.926 61.6534 174.562 61.6534C175.199 61.6534 175.743 61.831 176.195 62.1861C176.649 62.5384 176.996 63.0497 177.234 63.7202C177.476 64.3878 177.597 65.1932 177.597 66.1364C177.597 67.0852 177.477 67.8949 177.239 68.5653C177 69.233 176.655 69.7429 176.203 70.0952C175.751 70.4446 175.205 70.6193 174.562 70.6193ZM174.562 69.6818C175.199 69.6818 175.693 69.375 176.045 68.7614C176.398 68.1477 176.574 67.2727 176.574 66.1364C176.574 65.3807 176.493 64.7372 176.331 64.206C176.172 63.6747 175.942 63.2699 175.641 62.9915C175.342 62.7131 174.983 62.5739 174.562 62.5739C173.932 62.5739 173.439 62.8849 173.084 63.5071C172.729 64.1264 172.551 65.0028 172.551 66.1364C172.551 66.892 172.631 67.5341 172.79 68.0625C172.949 68.5909 173.178 68.9929 173.476 69.2685C173.777 69.544 174.139 69.6818 174.562 69.6818ZM179.369 70.5V61.7727H180.426V66.1023H180.528L184.449 61.7727H185.83L182.165 65.7102L185.83 70.5H184.551L181.517 66.4432L180.426 67.6705V70.5H179.369Z"
            fill="black"
          />
          <rect x="149" width="45" height="45" fill="url(#pattern1_0_1)" />
          <rect
            x="288.5"
            y="86.5"
            width="48"
            height="23"
            rx="4.5"
            stroke="black"
          />
          <path
            d="M306.966 96.9602V97.8125H298.273V96.9602H306.966ZM306.966 98.8011V99.6534H298.273V98.8011H306.966ZM306.08 93.7727V102.5H305.057L300.301 95.6477H300.216V102.5H299.159V93.7727H300.182L304.955 100.642H305.04V93.7727H306.08ZM311.206 93.7727V102.5H310.149V94.8807H310.098L307.967 96.2955V95.2216L310.149 93.7727H311.206ZM316.443 102.619C315.943 102.619 315.493 102.52 315.092 102.321C314.692 102.122 314.371 101.849 314.129 101.503C313.888 101.156 313.756 100.761 313.733 100.318H314.756C314.795 100.713 314.974 101.04 315.293 101.298C315.614 101.554 315.997 101.682 316.443 101.682C316.801 101.682 317.119 101.598 317.398 101.43C317.679 101.263 317.899 101.033 318.058 100.74C318.22 100.445 318.301 100.111 318.301 99.7386C318.301 99.358 318.217 99.0185 318.05 98.7202C317.885 98.419 317.658 98.1818 317.368 98.0085C317.078 97.8352 316.747 97.7472 316.375 97.7443C316.108 97.7415 315.834 97.7827 315.553 97.8679C315.271 97.9503 315.04 98.0568 314.858 98.1875L313.869 98.0682L314.398 93.7727H318.932V94.7102H315.284L314.977 97.2841H315.028C315.207 97.142 315.432 97.0241 315.702 96.9304C315.972 96.8366 316.253 96.7898 316.545 96.7898C317.08 96.7898 317.555 96.9176 317.973 97.1733C318.393 97.4261 318.723 97.7727 318.962 98.2131C319.203 98.6534 319.324 99.1562 319.324 99.7216C319.324 100.278 319.199 100.776 318.949 101.213C318.702 101.648 318.361 101.991 317.926 102.244C317.491 102.494 316.997 102.619 316.443 102.619ZM321.17 102.5V93.7727H322.227V98.1023H322.329L326.25 93.7727H327.63L323.966 97.7102L327.63 102.5H326.352L323.318 98.4432L322.227 99.6705V102.5H321.17Z"
            fill="black"
          />
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
            <image
              id="image0_0_1"
              width="512"
              height="512"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAACXBIWXMAAA7EAAAOxAGVKw4bAAAdO0lEQVR4nO3dPYydxfUH4PPuWkLCVaRQpYh8WdZryaJJk/zTWHRusGnSRkRpUlJEoXAquyBKQZkmAtGmgbihQzT5aNIgS969XtaiSEUkKpAseff+C/ua9bLej/s1Z2aepwkQEo/0rvb83jNn5o0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgHMbSi8AOLvdjaujiIjJwf7r0382icnPnv7F60f+9a3j/j8mEZvH/fMhYvyCP3b7yL/4xZP/GP7z7B+trX8REbGxe2/vpPUDeQgAkMTuxtXRtLBPYvKzpwV968nfH1+0szoUJrZjiC+mYWFYW/9CSIAcBABYoWmRP1TgIyK2aivw83oaELaf/s0XQwz/EQ5gtQQAWIJjCn13RX5Wz8KBYABLJQDAnI4W+0nEm6XX1JpnWwpD/E0ogMUQAOCcHoyu3FTscxgi7k47Ba/t3f+k9HqgJgIAnODI2/2vtPFzGyLGugRwNgIAHHHoDV/Br9zhQKBDAM8TAOje7sbV0cHB47e19Ns33TJYW7vwoe4AvRMA6JK3fHQH6J0AQDcejK7cnEwmb3vL5zhDxN1hGD4UBuiFAEDTFH1mIQzQAwGA5ij6LJIwQKsEAJqg6LMKwgAtEQCo1qHpfYN8rNR0gNBpAmomAFAdb/tkoitArQQAquBtn+x0BaiNAEBq3vapka4ANRAASGk82rrtbZ/aTbsCm3vbfyy9FjhKACCNaZt/MolbpdcCizYMccf2AJkIABS3u3F1dLD/+H1tfnowRNxdW7/wjiBAaQIAxdjfp2fmBChNAGDlnhb+P9nfhydzAsMw/EEQYNUEAFZG4YcXEwRYNQGApVP44ewEAVZFAGBp7PHD7MwIsGwCAAun8MPiCAIsiwDAwjjOB8vj+CCLtlZ6AbRhPNq6vb//+EvFH5ZjEvHm/v7jL8ejrdul10IbdACYiwE/KGNtGN6yLcA8BABmovBDeU4MMA8BgHOxzw/5mA9gFmYAODP7/JCT+QBmoQPAqbT7oR62BTgrAYATjS9t/d0bP9RniLi7+XD7Rul1kJcAwLG89UP9dAM4iQDAcwz5QXsMCXIcAYBnHoyu3DyYTD4uvQ5gOdwdwGECAN76oSO6AUwJAJ3z1g990g1AAOiYCX/om5MCfRMAOmTCH5hyUqBfbgLszHi0dftgMvlY8QciIiYRmweTycduEeyPDkAnng76farwAy8yRIzX1i9cNyDYBx2ADjwYXbn59A5/xR94oUnE5v7+4y8fjK7cLL0Wlk8HoHEG/YBZGBBsnwDQKC1/YF62BNpmC6BBD0ZXbir+wLwmEZsH+48/tSXQJgGgMab8gUVySqBdtgAaYr8fWCZzAW0RABpgvx9YFXMB7bAFUDlH/IBVclSwHQJAxab7/aXXAfTHXED9bAFUajzauj2ZxK3S6wD6NgxxZ3Nv+4+l18H5CQAVMuwHZGI4sE4CQEUM+wFZGQ6sjwBQCcUfyE4IqIshwAqY9Adq4IRAXXQAknswunLTpD9Qm7VheOu1vfuflF4HLyYAJKb4AzUTAnKzBZCUM/5A7dwVkJsOQELO+AMtcVdATgJAMoo/0CIhIB8BIBHFH2iZEJCLAJCE2/2AHrg1MA8BIAHFH+iJEJCDAFCY4g/0SAgoTwAoSPEHeiYElOUegELGo63bij/Qs0nEm+4JKEcHoADT/gDfczqgDAFgxRR/yOniG9ee/fXL//fz5/67l3/5i/juH/869n/33T//HRER3372+ZJW1gchYPUEgBVS/KG8i29ce1bgX/7lL+Kly4v9yOajnfGzsPDdP/8tGJyDELBaAsCK+LAPlDEt+Mso9mc1DQUCwel8QGh1BIAVUPxhtS6+cS1+/Pt3ihX80zzaGcf//vy+MPACQsBqCABLpvjDakzf9H/0m1+XXsq5fPPBRzoDxxAClk8AWKLdjauj/f3HX5ZeB7TslVvvFm3vL8p0m+DrO++VXkoKQ8R4bf3C9Y3de3ul19IqAWBJdjeujg72H386iaj7txIk9cqtd6t72z+rbz74SBAIIWDZBIAlGV/a2lH8YfFaLvxHCQJPQsDmw+3LpdfRIgFgCVzxC4vXU+E/qvcg4Mrg5RAAFsxZf1isi29ci5/89S+ll5HCf3/7u26HBd0RsHgCwAIp/rA42Y/yldLzEUIhYLEEgAVx3A8Wp+d2/1n1ui3geODiCAAL4LgfLM5PP/27t/4zerQzjq+u97c1vr5+4VUnA+bnc8ALcLD/+NPSa4DaXXzjWmzu3Vf8z+Gly5uxuXf/uQ8Z9cDv3MUQAOb0dOLfbyyYwyu33jXoN4ef/PUv8cqtd0svY2UmEZvjS1t/L72O2tkCmIOhP5iflv/i9LYlYChwPgLAjAz9wfwU/8XrLQQYCpydLYAZ7G5cHU0mkz+VXgfU6uIb1xT/JeltLmAymfxpd+PqqPQ6anSh9AJq5I5/mJ2LfVbjx79/JyKi+fsCJhGbT4cCXRd8TrYAzsk1vzA7xX/1erk90HXB52cL4BwejK7cVPxhNop/GT/561+62A6YRLz5YHTlZul11EQH4Ixc9gPz2dy7X3oJ3erp+mCXBJ2dDsAZuXgCZvfTTx3ZLumly5vPZgJa53f12QkAZzAebd029AezMe2fw0uXN7sIYpOIzfFo63bpddTAFsApnPeH2Sn++fRyT4D7AU6nA3AK5/1hNq/celfxT+ily5tdXBvsd/fpBIATuOcfZnPxjWs+55vYj37z6+ZPBvhewOkEgBdw5A9m18vAWc16eEaOBp7MDMAxHPmD2dn3r0cv8wCOBh5PB+AYB/uP3y+9BqiRff+6vHR5s/mtgAi/019EB+AIn/iF2bnsp07j0ZXSS1g6pwJ+SAfgkCdf+VP8YRY9TJa3qodndzCZfOyrgc8TAA7RJoLZmPqvWw+nAiL8jj9KAHjK1D/MroeJ8tb18AydCnieABDT1r9LI2AWBv/a4IKg/ggA8aQt5MIfmM3Lv/xF6SWwID08SxcEfa/7AKD1D7Pz9t+WbroAtgIiQgDQDoI59PDG2Jtenqnf/Z0HAJ/5hdldfOOat/8G9XI5kM8Gd3wRkOt+YT6u/G1XL1cER/R9TXC3HQDnQWF23v7b1ksXIKLvWtBlADD4B/Pp4cx473p5xj0PBHYZAAx/wHy8/bevp2fca03oLgA8ffvv5ycbFqyHY2I80cuznkRs9tgF6C4AHEwmH5deA9Ssl2Ni9PWse6wNXQWA3o98wLwM//Wlt2fdW43oJgD41C/M7+X/+3npJbBivWwDRERMJnGrp08GdxMAej7qAYvSU0uYJ3p75j3Vii4CgGN/sBi9tYTp75n3dCywiwAwmUzeLr0GqF0vF8PwQ709+15qRvMBwNs/LIb9/3719ux76QI0HwB6SXKwbL3tBfO9Hp99D7Wj6QDg7R8Wp7e9YL7X47PvoQvQdADo9XpHWLTe9oD5oR5/BlqvIc0GAFf+AjCP1q8IbjYAtJ7cYJV6GwLjh3r9GWi5ljQZALz9A7AILXcBmgwALSc2KKHHKXCe1/PPQKs1pbkA4O0fFq/HKXCe1/PPQKtdgOYCQA9nNwFYrRZrS1MBYHfj6si5fwAWbRLxZmtfCmwqAPT0FSdYlR7Pf3O83n8WWqsxzQQAb/8ALFNrXYBmAsDBwePm9mcAyKWlWtNMAJhM4lbpNQDQtpZqTRMBYDzaul16DQD0oZWa00QAiEn8qvQSAOhEIzWn+gDg4h8AVqmVi4GqDwAtXs4AQG4t1J6qA4Cjf7B83372eeklQDotHAmsOgC0dBwDIDth8Hm116CqA0ArgxgAVKjyGlRtADD8B0BJtQ8DVhsAWhjAgFo82hmXXgKF+Rk4Xs21qMoAYPgPgAxqHgasMgDUPngBtfnuH/8qvQQK8zPwYrXWpCoDQO2DF1Cb7/7579JLoDA/AyeotCZVFwAM/wGQSa3DgNUFgJoHLqBWzn/jZ+BkNdam+gKA4T8owhR4vzz709VYm6oKADW2WKAVhsD65dmfTW01qqoAUGOLBVphCKxfnv3Z1Faj6goAFbZYoBX2gPvl2Z9NbTWqmgBQW2sFWmQvuD+e+fnUVKuqCQC1tVagRfaC++OZn09NtaqeAFBZawVaZC+4P575+dRUq6oIADW1VKBl3372uZZwRx7tjO3/z6CWmlVFAKippQKt0xLuh2c9m1pqVh0BoKKWCrROS7gfnvVsaqlZ6QNALa0U6IVtgD5o/8+nhtqVPgBMYvKz0msAnqc13D7PeD411K6h9AJOM760tePrf5DP5t790ktgicajK6WXULUhYrz5cPty6XWcJHUHYHfj6kjxh5y++eCj0ktgSTzb+U0iNnc3ro5Kr+MkqQPAwcHjKiYpoUdf33mv9BJYEs92MbLXsNQBICbxeuklAC/mTbE9nukCJa9hqWcAdi5tTUqvATiZWYC22PtfrMsPt9PW2bQdgBqOUADeGFviWS5e5lqWNgDUcIQCsF/cEs9y8TLXsrQBICbxq9JLAM7Gm2P9PMMlSVzLUu5N7G5cHe3vP/6y9DqAs/vpp3+Ply47tVujRzvj+Or6jdLLaNb6+oVXN3bv7ZVex1EpOwCTg/3Uk5PAD/3vz++XXgIz8uyWK2tNyxkAEu+ZAMf79rPPtZEr9M0HH7nzf8my1rSUWwCu/4V62Qqoi2N/y5f1WuCkHQDFH2qlnVyP//72d6WX0IWsNS1dAMh8ZhI4na2AOmj9r1bG2pYuAGTdKwHO7us778WjnXHpZfACj3bGzvyvWMbali4AZL87GTibr67fEAKScuSvgIS1LV0AmES8WXoNwGKYB8jHvn8ZGWtbqgCQ/dvJwPl8+9nnCk4i//3t7+z7F5StxqUKAFkvSwBmJwTkoPiXl63G5QoACYckgPk5GVCWif8cstW4VAEg80cTgPl8fec9IaCAbz74yMR/FslqXKoAkPWyBGAxhIDVUvxzyVbj0gSAbMMRwHIIAauh+OeUqdalCQDZhiOA5fn6znsGA5fov7/9neKfVKZalycAJBuOAJbL6YDlMO2fW6ZalyYAZLwlCViuaQhwY+D8Hu2MFf8aJKp1eQJAxFbpBQCr9+1nn8dX12+YC5jDNx98FF9dv6H41yFNrUsTALJNRwKrZS5gNob96pKp1qUIAJmmIoFybAmc3bTlr/jXJ0vNSxEAMk1FAmXZEjidln/dstS8HAEg0VQkkMPXd96L8eiKbsAhj3bGMR5d8dZfuSw1L0UAyDQVCeTy1fUb3W8LTNv9X12/UXopLEKSmpcjAACcoOdtAe1+lmUovYCIiPGlrZ1Mk5FAbq/cejde/uUv4qXLbf7aeLQzju/+8S+t/kYNEePNh9uXE6yjvJ1LW5PSawDqc/GNa/Hj37/TTBB4tDOO//35fW/7Hbj8cLt4/S2+gN2Nq6P9/cdfll4HUK+Lb1yLl//v5/Gj3/y69FJm8s0HH8V3//y3wt+R9fULr27s3tsruYbiAeDB6MrNg8nk49LrANpQS1fA237f1obhrdf27n9Scg0XSv7hAIv27WefPyuq085AhnmB6b6+N32yKB4AspyHBNpzOAxErDYQKPic5Gnt67wDkOQ8JNC+o4Eg4kkoiIhnweCwF4WEo3cSTAv99M+AUyWofeUDAEBB04KtcNObDBcBpfk0IgCsSPHaVzwAuAAIgN5kqH3FAwAAsHpFA0CWbyIDwKqVroE6AADQoaIBYHKwX/wYBACUULoG6gAAQIcEAADoUNktANcAA9Cp0jVQBwAAOlQ2ACS4CxkAiihcA3UAAKBDAgAAdEgAAIAOlQ4Axb+GBACFFK2BpQMAAFCAAAAAHRIAAKBDAgAAdEgAAIAOFf4WQGyW/PMBoJTSNVAHAAA6JAAAQIcEAADokAAAAB0SAACgQ0UDwBAxLvnnA0AppWugDgAAdEgAAIAOCQAA0CEBAAA6JAAAQIdKB4Dtwn8+AJRStAaWDgAAQAECAAB0SAAAgA6VDQBDfFH0zweAUgrXQB0AAOhQ4W8BDP8p+ecDQCmla6AOAAB0SAAAgA6V3QJYWzcECECXStdAHQAA6NBQegE7l7YmpdcAAKt2+eF20RqsAwAAHSoeAIaIcek1AMAqZah9xQMAALB6GQKATwID0Jvita98APA9AAB6k6D2FQ8Apa9CBIBVy1D7igcAAGD1igeA0jchAcCqZah9xS8CinAZEAB9KX0JUESCDkBEjvOQALAKWWpeigAQCY5DAMCKpKh5WQIAALBCOQJAgvOQALASSWpeigCQ4TwkAKxClpqXIwAkOA4BAKuQpeYVP4Yw5SggAD3IcAQwIkkHICLPsQgAWJZMtS5NAIgkxyIAYInS1Lo8ASDJVCQALE2iWpcmAGSZigSAZclU6/IEgCRTkQCwLJlqXYpJxCknAQBoWZYTABGJOgAREUPE3dJrAIBlyFbjUgWATMMRALBQyWpcqgCQaTgCABYpW43LFQASDUcAwCJlq3FphhGmDAIC0KJMA4ARyToAEfmGJABgXhlrW7oAkG1IAgDmlrC2pQsA2YYkAGBeGWtbqv2IKXMAALQk2/5/RMIOQESuzyUCwDwy7v9HJA0AMcTfSi8BABYi4f5/RNIAkHGvBABmkbWm5QwAyS5LAIBZZa1p6YYSpsaXtnYmEZul1wEAsxoixpsPty+XXsdxUnYAIsIcAAD1S1zL0gaArHsmAHBWmWtZ2i2ACPcBAFC3jOf/p9J2ACLynp0EgNNkr2GpA0DWs5MAcKrkNSx1AFhbu/Bh6TUAwCyy17C0exNTjgMCUJvMx/+mUncAIiL1EQoAOFYFtSt9AMh8hAIAjlND7Uq/BRDhOCAAdcl8/G8qfQcgIv9RCgCYqqVm1REAhiH1JCUATNVSs9K3KKZsAwBQgxra/xGVdAAi6mmpANCvmmpVPQGgkpYKAP2qqVZV0aaYsg0AQGa1tP8jKuoARNTVWgGgL7XVqLoCQEWtFQD6UluNqqZVMWUbAICMamr/R1TWAYior8UCQPtqrE31BYDKWiwAtK/G2lRVu2LKJ4IByKKGT/8ep7oOQERU8ZlFADpRaU2qMgCsrV2ortUCQJtqrUlVBoCN3Xt7NQ5cANCWIeLuxu69vdLrmEWVASCizoELANpScy2qcghwyjAgAKXUOvw3VW0HICKqHbwAoAGV16CqA0CtgxcA1K/2GlR1ADAMCEAJNQ//TVUdACLqHsAAoE4t1J6qhwCnDAMCsCq1D/9NVd8BiIjqBzEAqEgjNaeJDkCEzwQDsBq1ffb3RdroAETEMMSd0msAoG0t1ZpmAkDtxzEAyK+lWtNMAHAkEIBlauHo32HNBICIiLX1C++UXgMAbWqtxjQVAHQBAFiG1t7+IxoLABFtXM4AQC4t1pYmjjIc5WIgABallYt/jmquAxARMQzDH0qvAYA2tFpTmuwAROgCADC/Vt/+IxrtAES0m9gAWJ2Wa0mzHYAIXQAAZtfy239Ewx2AiLaTGwDL1XoNaboDEBExvrT190nEm6XXAUA9hoi7mw+3b5RexzI13QGIaPPsJgDL1UPtaL4DEKELAMDZ9fD2H9FBByCijyQHwGL0UjO66ABE6AIAcLpe3v4jOukARLT3FScAFq+nWtFNANjYvbc3DHGn9DoAyGkY4k5rX/w7STdbAFM7l7YmpdcAQC6tX/pznG46AFNrw/BW6TUAkMwQfyu9hFXrrgMQ4YpgAL7X49t/RIcdgIj2r3cE4Ox6rQlddgAiHAsEoK9jf0d12QGI6OuoBwDH67kWdBsAHAsE6Ftvx/6O6nYLYMpAIEB/eh38O6zbDsBUr8MfAD3zu18HICIMBAL0pOfBv8MEgKdsBQC0T+v/e91vAUxpBwG0z+/67+kAHGIrAKBdWv/P0wE4pOfzoACt8zv+eQLAIRu79/Z8LAigPWvD8FbPZ/6PYwvgGLYCANqh9X88HYBjaBMBtMPv9OMJAMewFQDQBq3/F7MFcAJbAQD10vo/mQBwChcEAdTHhT+nswVwCpdGANTH7+7TCQCneG3v/ic+GwxQj2GIO6/t3f+k9DqyswVwRrYCAPLT+j87HYAzWlu/cL30GgA4md/VZycAnJGjgQC5OfJ3PrYAzsnRQIB8HPk7PwFgBuYBAPKw7z8bWwAzWFu/cH2IGJdeB0Dvhoixff/ZCAAz2Ni9t+eMKUB5wzD8wb7/bASAGbkfAKAs5/3nYwZgToYCAVbP0N/8BIAFMBQIsDqG/hbDFsACGEABWB2/cxdDAFgAlwQBrIbLfhZHAFgQQ4EAy2Xob7HMACzYeLR1ezKJW6XXAdCSYYg7m3vbfyy9jpYIAEvgZADA4pj4Xw4BYEmcDACYn4n/5TEDsCSuCwaYj2t+l0sHYIl2N66O9vcff1l6HQA1Wl+/8KqJ/+XRAVgixwMBZuO43/LpAKzAg9GVmweTycel1wFQg7VheMtxv+UTAFZECAA4neK/OrYAVsRFQQAnc9HPaukArJiLggB+yEU/qycAFCAEAHxP8S9DAChECABQ/EsSAApyZTDQM1f8liUAFCYEAD1S/MsTABIQAoCeKP45CABJCAFADxT/PNwDkMTmw+0b7gkAWjYMcUfxz0MHIBmnA4AWmfbPRwBISAgAWqL45yQAJCUEAC1Q/PMSABLzASGgZj7sk5sAkJwQANRI8c/PKYDkXtu7/8naMLxVeh0AZzFEjBX/OugAVGJ34+roYP/xp5OIzdJrATjOEDFeW79wfWP33l7ptXA6AaAiQgCQleJfHwGgQm4NBDJxu1+dzABUyK2BQBZu96uXDkDF3BUAlOSMf90EgMo5JgiUYNK/fgJAAwwHAqti2K8dAkBDDAcCy2TYry2GABtiOBBYFsN+7dEBaNCD0ZWbk8nkT7YEgHkNEeNhGP5gv789AkCjzAUA87Lf3zYBoHHmAoBZ2O9vnxmAxm0+3L7hY0LAeawNw1uKf/t0ADphSwA4jZZ/XwSAzrg9EDiOW/36IwB0yCkBYMqUf78EgI4ZEIS+GfTrmyHAjhkQhH4Z9EMA6Nxre/c/WV+/8OoQcbf0WoDlGyLurq9feFXLH1sAPOPLgtA2g34cpgPAM7oB0KbpW7/iz2E6ABzLSQGonwl/TiIA8EJPLw9630kBqI8Jf04jAHAq3QCoh7d+zkoA4MzcIgi5GfLjPAQAzsW2AOQzRNxdW7/wjjv8OQ8BgJnYFoDytPuZhwDAXMajrdsxiV8JArBaa8PwlsLPPAQAFsJ8AKyGfX4WRQBgYcwHwPLY52fRBAAW7ul8wNuCAMxviLg7DMOH2v0smgDA0ggCMDuFn2UTAFg6Jwbg7Ez2syoCACsjCMCLKfysmgDAygkC8D2Fn1IEAIoxI0DP7PFTmgBAcY4P0hPH+chCACCN3Y2ro4ODx2+7UIgWDUPcWVu78KHCTxYCACm5YpgWDBHjGOJvbu4jIwGA1MwJUCP7+9RAAKAK0+0BXQGymr7ta/NTCwGA6ugKkIm3fWolAFAtXQFK8bZPCwQAmqArwCp426clAgDNEQZYJEWfVgkANE0YYBaKPj0QAOiGMMBJFH16IwDQpQejKzcnMfmZAcJ+TQf5hhj+o+jTIwGA7h06TfC67kDbhoi7McQXpvdBAIAf0B1oh7d8eDEBAE6wu3F1NDnYf10gqMPhgj+srX/hLR9eTACAczrUIbBlUNi0pe8NH85PAIA5HekSCAVLcrjYe7uH+QkAsARHQ0FEbNk+OJshYhwR24o9LJcAACt0TDCI6DAcPCvyT/5GoYcCBABIYhoOIiIOdw6e/H1dAeFpgY849CYfEaHIQx4CAFRkd+PqKCJiGhQinoaFJ3/x+pF/feu4/48XhYlDRfuo7SP/4hdP/uNJUY94UtgjIhR3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICm/T/wy4iPPdaNLAAAAABJRU5ErkJggg=="
            />
            <image
              id="image1_0_1"
              width="512"
              height="512"
              xlinkHref="data:image/png;base64,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"
            />
            <image
              id="image2_0_1"
              width="581"
              height="588"
              xlinkHref="data:image/png;base64,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"
            />
            <image
              id="image3_0_1"
              width="229"
              height="223"
              xlinkHref="data:image/png;base64,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"
            />
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

//  <Title order={3} fw={"normal"}>
//                       Real-time, actionable analytics using AI.
//                     </Title>
//                     <Text c={"dimmed"}>
//                       Make inforned decisions about your finances, with
//                       real-time analytics that reveal trend and patterns from
//                       all your account data.
//                     </Text>
