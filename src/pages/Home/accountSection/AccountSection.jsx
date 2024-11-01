import { useGSAP } from "@gsap/react";
import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  ColorSwatch,
  Container,
  Divider,
  em,
  Flex,
  Grid,
  Group,
  Menu,
  NumberFormatter,
  Paper,
  rem,
  Stack,
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
  IconReportAnalytics,
  IconSettings,
  IconSquareCheck,
  IconSun,
  IconTrash,
  IconUsers,
} from "@tabler/icons-react";
import { AreaChart, BarChart } from "@mantine/charts";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import { NG } from "../../../assets/images";
import IPhoneMockup from "../../../components/iphoneMockup/IphoneMockup";
import AccountScreen from "../../../components/mockupScreens/accountScreen/AccountScreen";
import { Carousel } from "@mantine/carousel";

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
        <Carousel slideGap={'sm'} slideSize={"94%"} withControls={false}>
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
                  <BackgroundGrid />
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
                      Get paid globally. Bank without borders
                    </Title>
                    <Text>
                      Looking to get paid ? Soranix lets you Manage, exchange,
                      and hold multiple currencies effortlessly—all in one
                      place.
                    </Text>
                  </Box>
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
                  <Box>
                    <Title tt={"capitalize"} order={3} fw={"bold"}>
                      Customize Your Banking Experience{" "}
                    </Title>
                    <Text>
                      Customize your account with global or local policies. Set
                      limits, manage transactions, and ensure your finances
                      align with your goals
                    </Text>
                  </Box>
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

  const boxRef = useRef(null);

  useGSAP((context, contextSafe) => {
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
    });
    tl.to(boxRef.current, { y: -100, duration: 1.5, ease: "back.in" });

    const handleMouseEnter = contextSafe(() => {
      tl.pause();
    });
    const handleMouseLeave = contextSafe(() => {
      tl.resume();
    });

    const currentBox = boxRef.current;
    currentBox.addEventListener("mouseenter", handleMouseEnter);
    currentBox.addEventListener("mouseleave", handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      currentBox.removeEventListener("mouseenter", handleMouseEnter);
      currentBox.removeEventListener("mouseleave", handleMouseLeave);
    };
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const chartdata = generateCashflowData();
      setData(chartdata);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      pos={"relative"}
      style={{
        overflow: "hidden",
      }}
    >
      <Box className={styles.graphics3_wrapper}>
        <Box className={styles.graphics3_analytics_card_outer}>
          <Box className={styles.graphics3_analytics_card_inner}>
            <Stack gap={"sm"}>
              <Flex align={"center"} justify={"space-between"}>
                <Text
                  variant="gradient"
                  gradient={{ from: "dark.1", to: "dark.8", deg: 70 }}
                >
                  Cash Flow Analysis
                </Text>
                <Button color="gray" size="compact-xs" variant="outline">
                  Weekly
                </Button>
              </Flex>
              <Group>
                <Group gap={4}>
                  <ColorSwatch size={10} color="var(--mantine-color-teal-9)" />
                  <Text c={"dimmed"} size="xs">
                    Income
                  </Text>
                </Group>
                <Group gap={4}>
                  <ColorSwatch size={10} color="var(--mantine-color-red-9)" />
                  <Text c={"dimmed"} size="xs">
                    Expense
                  </Text>
                </Group>
              </Group>
              <BarChart
                h={140}
                data={data}
                dataKey="date"
                type="default"
                strokeDasharray={"10 10"}
                xAxisProps={{
                  padding: "no-gap",
                  interval: "preserveStartEnd",
                  axisLine: { stroke: "#000", strokeWidth: 0.1 },
                }}
                yAxisProps={{
                  interval: "equidistantPreserveStart",
                  orientation: "right",
                }}
                // withLegend
                legendProps={{ verticalAlign: "top", height: 40 }}
                curveType="natural"
                gridAxis="x"
                tickLine="x"
                withYAxis={false}
                withDots={false}
                series={[
                  { name: "credit", label: "Income", color: "teal.7" },
                  { name: "debit", label: "Expenses", color: "red.7" },
                ]}
              />
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box ref={boxRef} className={styles.graphics3_analytics_alert_cont}>
        <Box className={styles.graphics3_analytics_alert_content}>
          <Group gap={"xs"}>
            {/* <ThemeIcon size={'sm'} variant="transparent" ><IconBell strokeWidth={1.5} size={16} /></ThemeIcon> */}
            <Text size="xs" c={"dimmed"} fw={"bold"}>
              Spending Pattern
            </Text>
          </Group>
          <Text maw={400} size={"xs"}>
            You've spent 30% of your monthly budget on dining out.
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

const BackgroundGrid = () => {
  const strobeRef = useRef(null);
  const containerRef = useRef(null);

  // useGSAP(() => {

  //   // gsap.set(strobeRef.current, {xPercent:-50, yPercent: -50,transformOrigin: "50% 50%" })
  //   gsap.to(strobeRef.current, {
  //     motionPath: {
  //       path: "#p3",
  //       align: "#p3",
  //       autoRotate: true,
  //       alignOrigin: [0.5, 0.5],
  //       curviness: 2,
  //       type: "cubic",
  //     },
  //     duration: 4,
  //     ease: "power1.in",
  //     repeat: -1,
  //     yoyo: true,
  //   });

  // })

  return <Box pos="relative" ref={containerRef}></Box>;
};

//  <Title order={3} fw={"normal"}>
//                       Real-time, actionable analytics using AI.
//                     </Title>
//                     <Text c={"dimmed"}>
//                       Make inforned decisions about your finances, with
//                       real-time analytics that reveal trend and patterns from
//                       all your account data.
//                     </Text>

// useEffect(() => {
//   if (accountId) {
//     // Disable scrolling by setting overflow to hidden
//     document.body.style.overflow = "hidden";
//   } else {
//     // Re-enable scrolling by resetting overflow
//     document.body.style.overflow = "auto";
//   }

//   // Cleanup on unmount or when overlay is hidden
//   return () => {
//     document.body.style.overflow = "auto";
//   };
// }, [accountId]);
