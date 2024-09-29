import { useGSAP } from "@gsap/react";
import { ActionIcon, Avatar, Badge, Box, Button, ColorSwatch, Container, Divider, em, Flex, Grid, Group, Image, Menu, NumberFormatter, Overlay, Paper, rem, SimpleGrid, Space, Stack, Table, Tabs, Text, ThemeIcon, Title, useMantineTheme } from "@mantine/core";
import { useInterval, useMediaQuery, useTimeout } from "@mantine/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Account.module.css"
import { IconArrowLeft, IconArrowNarrowDown, IconArrowNarrowUp, IconArrowRight, IconBell, IconBellFilled, IconBox, IconCashRegister, IconDots, IconMessages, IconNote, IconPackage, IconPlus, IconReportAnalytics, IconSettings, IconSquareCheck, IconSun, IconTrash, IconUsers } from "@tabler/icons-react";
import { AreaChart, BarChart } from "@mantine/charts";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Carousel, CarouselSlide } from "@mantine/carousel";



gsap.registerPlugin(ScrollTrigger)
const BoxMotion = motion.create(Box, { forwardMotionProps: true })




const AccountSection = () => {


  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  const [embla, setEmbla] = useState(null);

  const containerRef = useRef(null)
  const boxRef = useRef(null)

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev()
  }, [embla])

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext()
  }, [embla])

  useGSAP(() => {

    gsap.to(boxRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        toggleActions: "restart pause resume pause"
      },
      x: 400,
      duration: 2,
      ease: 'power2.inOut'
    })

  })

  const [accountId, setAccountId] = useState(null)

  const accountTypesData = [
    {
      id: 1,
      name: 'Deposit Account',
    },
    {
      id: 2,
      name: 'Sub Account',
    },
    {
      id: 3,
      name: 'Virtual Account',
    },
    {
      id: 4,
      name: 'Multi-Currency Account',
    },
    {
      id: 5,
      name: 'Connect Account',
    },
  ]

  const accountTypes = accountTypesData.map((i, index) => {
    return (
      <CarouselSlide key={i.id} >

        <BoxMotion onClick={() => setAccountId(i.id)} layoutId={i.id} className={styles.accounts_card_shrinked}>
          <Stack h={'100%'} justify="end">
            <Flex >
              <Box>
                <Title order={6} fw={'normal'}>
                  {i.name}
                </Title>
              </Box>
            </Flex>
          </Stack>
        </BoxMotion>
      </CarouselSlide>
    )
  })

  useEffect(() => {
    if (accountId) {
      // Disable scrolling by setting overflow to hidden
      document.body.style.overflow = 'hidden';
    } else {
      // Re-enable scrolling by resetting overflow
      document.body.style.overflow = 'auto';
    }

    // Cleanup on unmount or when overlay is hidden
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [accountId]);

  return (
    <Container size={"lg"} ref={containerRef}>
      <Stack gap={"xl"} w={'100%'}>
        <Box maw={400} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Badge variant="light">Accounts</Badge>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                A new home <br /> for Your Money{" "}
              </Title>
            </Box>
            <Box>
              <Title tt={"capitalize"} fz={"lg"} fw={"bold"}>
                Your accounts from a unified point.
              </Title>
              <Text c={"dimmed"}>
                Create, manage and connect all your bank accounts, Soranix provides the tools you
                need to stay organized and in control.
              </Text>
            </Box>
          </Stack>
        </Box>
        {/* Gsap animation elements here  */}
        <Graphics1Account />
        {/* Gsap animation elements ends here */}
        <Box>
          <Box>
            <Divider color="dark.7" />
            <Grid m={"xs"}>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    paddingInlineEnd: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                    overflow: 'hidden'
                  }
                }}
              >
                <Stack maw={450} py={"xl"} h={400}
                >
                  <Box>
                    <Title order={3} fw={"normal"}>
                      A bank account for your every need
                    </Title>
                    <Text c={"dimmed"}>
                      From savings , current to single use options , there’s an
                      account here with your name on it.
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
                      ? `thin solid var(--mantine-color-dark-7)`
                      : "none",
                    borderTop: !isMobile
                      ? "none"
                      : `thin solid var(--mantine-color-dark-7)`,
                    paddingInlineStart: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                  },
                }}
              >
                <Stack maw={450} py={"xl"}>
                  <Box >
                    <Title order={3} fw={"normal"}>
                      Push beyond the limits of traditional banking
                    </Title>
                    <Text c={"dimmed"}>
                      Boost your banking experience with custom configurations and a range of smart
                      features .
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
          <Divider color="dark.7" />
          <Box>
            <Grid m={'xs'}>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    paddingInlineEnd: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                  }
                }}
              >
                <Stack py={"xl"} h={400}
                >
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Real-time, actionable analytics using AI.
                    </Title>
                    <Text c={"dimmed"}>
                      Make inforned decisions about your finances, with real-time analytics that reveal trend and patterns from all your account data.
                    </Text>
                  </Box>
                  <Graphics3AccountAnalytics />
                </Stack>
              </Grid.Col>
              <Grid.Col
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    borderLeft: !isMobile
                      ? `thin solid var(--mantine-color-dark-7)`
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
                <Stack py={"xl"} h={400}
                >
                  <Box>
                    <Title order={3} fw={"normal"}>
                      All of your transactions in one place
                    </Title>
                    <Text c={"dimmed"}>
                      Make inforned decisions about your finances, with real-time analytics that reveal trend and patterns from all your account data.
                    </Text>
                  </Box>
                  <Graphics3AccountAnalytics />
                </Stack>
              </Grid.Col>
            </Grid>
            <Divider color="dark.7" />
          </Box>
          <Box py={'xl'} w={'100%'} >
            <Stack w={'100%'}  >
              <Stack maw={500} >
                <Title order={2}>Accounts built for <br /> the new era of finance </Title>
                <Text c={'dimmed'} size="md">Our powerful suite of expense management features automates the hard work of budgeting and tracking your expenditures. </Text>
              </Stack>
              <Box>

              <Carousel
                getEmblaApi={setEmbla}
                bg={'grape'}
                withControls={false}
                withIndicators={false}
                slideSize='32.333333%'              
                slideGap="md"
                loop
                align="start"
                slidesToScroll={isMobile ? 1 : 2}
                initialSlide={isMobile ? 1 : 2}
              >
                {accountTypes}
              </Carousel >
              </Box>
              <Group justify="end">
                <ActionIcon variant="light" color="gray" radius={'xl'} onClick={scrollPrev}>
                  <IconArrowLeft strokeWidth={1.5} size={14} />
                </ActionIcon>
                <ActionIcon variant="light" color="gray" radius={'xl'} onClick={scrollNext}>
                  <IconArrowRight strokeWidth={1.5} size={14} />
                </ActionIcon>
              </Group>
            </Stack>
            <AnimatePresence >
              {accountId && (
                <BoxMotion className={styles.accounts_card_expanded_cont}>

                  <BoxMotion layoutId={accountId} h={'100%'} className={styles.accounts_card_expanded}>
                    <motion.h5>heloo</motion.h5>
                    <motion.h2>item.title</motion.h2>
                    <motion.button onClick={() => setAccountId(null)} >close</motion.button>
                  </BoxMotion>
                </BoxMotion>
              )}
            </AnimatePresence>
          </Box>

        </Box>
      </Stack>

    </Container>
  );
};


export default AccountSection



const Graphics1Account = () => {

  const theme = useMantineTheme();



  const accountsTableData = [
    {
      id: 1,
      alias: 'Main Account',
      type: "Deposit",
      currency: "NGN ",
      symbol: "₦",
      balance: 3289238,
      status: "active"
    },
    {
      id: 2,
      alias: 'Betting Account',
      type: "Savings",
      currency: "NGN ",
      symbol: "₦",
      balance: 3289238,
      status: "active"
    },
    {
      id: 3,
      alias: 'Freelance Account ',
      type: "Virtual",
      currency: "USD ",
      symbol: "$",
      balance: 3289238,
      status: "active"
    },
  ]

  const colorSelector = (type) => {
    switch (type) {
      case "Virtual":
        return "orange";
      case "Savings":
        return "yellow";
      case "Deposit":
        return "indigo"
      default:
        return "var(--mantine-primary-color-filled)";
    }
  }

  const rows = accountsTableData.map(i => (
    <Table.Tr key={i.id}>
      <Table.Td fz={'xs'}>{i.alias}</Table.Td>
      <Table.Td fz={'xs'}><Badge variant="dot" color={colorSelector(i.type)} size="xs" radius={'sm'}>{i.type}</Badge></Table.Td>
      <Table.Td fz={'xs'}><Badge variant="light" color="teal" radius={'sm'} size="xs">{i.status}</Badge></Table.Td>
      <Table.Td fz={'xs'}>{i.currency + i.symbol}</Table.Td>
      <Table.Td fz={'xs'}>
        <NumberFormatter prefix={i.symbol} value={i.balance} thousandSeparator />
      </Table.Td>
      <Table.Td fz={'xs'}>
        <Menu
          transitionProps={{ transition: 'fade-down' }}
          withArrow
          position="bottom-end"
          withinPortal
        >
          <Menu.Target>
            <ActionIcon variant="subtle" color="gray" size={'sm'}>
              <IconDots style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
            </ActionIcon>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item
              leftSection={
                <IconMessages style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              View account
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconMessages style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Copy Acc Number
            </Menu.Item>
            <Menu.Item
              leftSection={<IconNote style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
            >
              Go to reports
            </Menu.Item>
            <Menu.Item
              leftSection={
                <IconReportAnalytics style={{ width: rem(16), height: rem(16) }} stroke={1.5} />
              }
            >
              Download Statement
            </Menu.Item>
            <Menu.Item
              leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
              color="red"
            >
              Close account
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Table.Td>
    </Table.Tr>
  ))

  return (
    <Container p={0} w={'100%'} size={'md'}>

      <div className={styles.graphics1_wrapper}>
        <Box className={styles.graphics1_container}>
          <Box className={styles.graphics1_content}>

            <Flex h={30} p={'xs'} align={'center'} justify={'space-between'}>
              <Text c={'dimmed'} order={6}></Text>

              <Group gap={'xs'} align="center">
                <ActionIcon color="gray" radius={'lg'} variant="light" size={'xs'}>
                  <IconPlus size={14} />
                </ActionIcon>
                <Divider orientation="vertical" />

                <ActionIcon
                  variant="transparent"
                  size={"xs"}
                  color="gray"
                >
                  <IconSun />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size={"xs"}
                  color="gray"
                >
                  <IconBellFilled />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size={"xs"}
                  // color="gray"
                  radius={'xl'}
                >
                  <Avatar radius={'lg'} size={'sm'} name="ri" />

                </ActionIcon>

              </Group>
            </Flex>
            <Divider color="dark.7" />
            <Stack p={'md'} gap={'lg'}>
              <Flex justify={'space-between'} align={'center'}>
                <Title fz={'md'}>Accounts Overview</Title>
                <Group>
                  <Menu
                    transitionProps={{ transition: "pop-top-right" }}
                    position="top-end"
                    width={280}
                    radius={'md'}
                  // withinPortal
                  >
                    <Menu.Target>
                      <Button
                        size="compact-xs"
                      >
                        Create new
                      </Button>
                    </Menu.Target>
                    <Menu.Dropdown bg={'dark.8'} styles={{
                      dropdown: {
                        borderColor: "var(--mantine-color-dark-7)"
                      }
                    }}>
                      <Menu.Label>Accounts</Menu.Label>

                      <Menu.Item
                        leftSection={
                          <IconPackage
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.blue[6]}
                            stroke={1.5}
                          />
                        }
                        rightSection={
                          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                            Ctrl + P
                          </Text>
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
                        rightSection={
                          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                            Ctrl + T
                          </Text>
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
                        rightSection={
                          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                            Ctrl + U
                          </Text>
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
                        rightSection={
                          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                            Ctrl + U
                          </Text>
                        }
                      >
                        Connect Account
                      </Menu.Item>

                      <Menu.Label>Scope</Menu.Label>
                      {/* <Menu.Divider /> */}
                      <Menu.Item
                        leftSection={
                          <IconCashRegister
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.lime[6]}
                            stroke={1.5}
                          />
                        }
                        rightSection={
                          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                            Ctrl + U
                          </Text>
                        }
                      >
                        Income Source
                      </Menu.Item>
                      <Menu.Item
                        leftSection={
                          <IconBox
                            style={{ width: rem(16), height: rem(16) }}
                            color={theme.colors.indigo[6]}
                            stroke={1.5}
                          />
                        }
                        rightSection={
                          <Text size="xs" tt="uppercase" fw={700} c="dimmed">
                            Ctrl + U
                          </Text>
                        }
                      >
                        Expense Category
                      </Menu.Item>
                    </Menu.Dropdown>
                  </Menu>
                  <ActionIcon
                    variant="subtle"
                    size={"sm"}
                    color="gray"
                  >
                    <IconSettings style={{ width: rem(15), height: rem(15) }}
                    />
                  </ActionIcon>
                </Group>
              </Flex>
              <Box>
                <Text c={'dimmed'} fw={600} size="10px">Aggregated Balance</Text>
                <Title order={3} fw={'normal'}>
                  <NumberFormatter prefix="₦" value={6780000} thousandSeparator />
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
                      date: 'Mar 22',
                      Deposit: 2890,
                      Sub_Ledgers: 2338,
                      Virtual: 2452,
                      Savings: 2452,
                    },
                    {
                      date: 'Mar 23',
                      Deposit: 2756,
                      Sub_Ledgers: 2103,
                      Virtual: 2402,
                      Savings: 2402,
                    },
                    {
                      date: 'Mar 24',
                      Deposit: 3322,
                      Sub_Ledgers: 986,
                      Virtual: 1821,
                      Savings: 1821,
                    },
                    {
                      date: 'Mar 25',
                      Deposit: 3470,
                      Sub_Ledgers: 2108,
                      Virtual: 2809,
                      Savings: 2809,
                    },
                    {
                      date: 'Mar 26',
                      Deposit: 3129,
                      Sub_Ledgers: 1726,
                      Virtual: 2290,
                      Savings: 2290,
                    },
                  ]}
                  dataKey="date"
                  type="stacked"
                  // withLegend={true}
                  legendProps={{ verticalAlign: 'top', height: 30, iconType: "diamond", iconSize: 10 }}
                  fillOpacity={0.8}
                  series={[
                    { name: 'Deposit', color: 'orange.8' },
                    { name: 'Sub_Ledgers', color: 'teal.8' },
                    { name: 'Virtual', color: 'indigo.8' },
                    { name: 'Savings', color: 'yellow.8' },
                  ]}
                />
              </Box>
              {/* render the skeleton */}
              <Box>

                <Group>
                  <Box>
                    <Text c={'dimmed'} fw={600} size="10px">Inflow (Agg)</Text>
                    <Group gap={2}>
                      <Title order={5} fw={'normal'} c={'teal'}>
                        <NumberFormatter prefix="₦" value={2943950} thousandSeparator />
                      </Title>
                      <IconArrowNarrowUp size={18} color={'var(--mantine-color-teal-filled)'} />
                    </Group>
                  </Box>
                  <Box>
                    <Text c={'dimmed'} fw={600} size="10px">Outflow (Agg)</Text>

                    <Group gap={2}>
                      <Title order={5} fw={'normal'} c={'red'}>
                        <NumberFormatter prefix="₦" value={1849300} thousandSeparator />
                      </Title>
                      <IconArrowNarrowDown size={18} color={'var(--mantine-color-red-filled)'} />
                    </Group>

                  </Box>
                  <Box visibleFrom="md">
                    <Text c={'dimmed'} fw={600} size="10px">Savings (Agg)</Text>

                    <Group gap={2}>
                      <Title order={5} fw={'normal'} >
                        <NumberFormatter prefix="₦" value={11849300} thousandSeparator />
                      </Title>
                      {/* <IconArrowNarrowDown size={18} color={'var(--mantine-color-red-filled)'}/> */}
                    </Group>

                  </Box>

                  <ActionIcon color="gray" size={'xs'} radius={'xl'} variant="light">
                    <IconPlus size={16} />
                  </ActionIcon>

                </Group>
              </Box>

              <Tabs variant="outline" defaultValue="first">
                <Tabs.List>
                  <Tabs.Tab value="first">Accounts</Tabs.Tab>
                  <Tabs.Tab disabled value="second">Analytics</Tabs.Tab>
                  <Tabs.Tab disabled value="third">Events</Tabs.Tab>
                </Tabs.List>
              </Tabs>
              {/* Accounts Table display */}

              <Box>
                <Stack gap={0}>
                  <Table.ScrollContainer minWidth={500}>
                    <Table borderColor="dark.6" withColumnBorders>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th fz={'xs'}>Alias</Table.Th>
                          <Table.Th fz={'xs'}>Type</Table.Th>
                          <Table.Th fz={'xs'}>Status</Table.Th>
                          <Table.Th fz={'xs'}>Currency</Table.Th>
                          <Table.Th fz={'xs'}>Balance</Table.Th>
                          <Table.Th fz={'xs'}></Table.Th>
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
      </div>
    </Container>
  )
}

const Graphics2Account = () => {

  const cardsData = [

    {
      id: 2,
      alias: "Nkechi Money",
      symbol: "₦",
      currency: "US",
      balance: 685404

    },
    {
      id: 1,
      alias: "Japa ✈️ 🛬",
      currency: "NG",
      symbol: "₦",
      balance: 685404
    },
    {
      id: 3,
      alias: "Vacation Account ⛱️🏖️",
      symbol: "₦",
      balance: 685404,
      currency: "NG"
    },
  ]

  const account_cards = cardsData.map(i => (
    <Box key={i.id} className={styles.graphics2_account_card}>
      <Stack gap={'sm'}>
        <Flex justify={'space-between'}>
          <Group gap={'sm'}>
            <Avatar
              size={'xs'}
              src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${i.currency}.svg`}
            />
            <Title order={5}>
              {i.alias}
            </Title>
          </Group>

          <Badge>Status</Badge>
        </Flex>
        <Box>
          <Text c={'dimmed'} fz={'xs'}>Balance</Text>
          <Title order={3} fw={'bold'} >
            <NumberFormatter prefix={i.symbol} value={i.balance} thousandSeparator />
          </Title>
        </Box>
        {/* <Group>
        {actions}
        </Group> */}
      </Stack>
    </Box>
  ))


  return (
    <Box className={styles.graphics2_wrapper}>
      <Box className={styles.graphics2_account_cards_cont}>
        {account_cards}
      </Box>
    </Box>
  )
}



const Graphics3AccountAnalytics = () => {

  const [data, setData] = useState([])

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

  const boxRef = useRef(null)

  useGSAP((context, contextSafe) => {

    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 3,
      yoyo: true,
    })
    tl.to(boxRef.current, { y: -100, duration: 1.5, ease: "back.in" })

    const handleMouseEnter = contextSafe(() => {
      tl.pause()
    });
    const handleMouseLeave = contextSafe(() => {
      tl.resume()
    });

    const currentBox = boxRef.current;
    currentBox.addEventListener('mouseenter', handleMouseEnter);
    currentBox.addEventListener('mouseleave', handleMouseLeave);

    // Clean up event listeners on unmount
    return () => {
      currentBox.removeEventListener('mouseenter', handleMouseEnter);
      currentBox.removeEventListener('mouseleave', handleMouseLeave);
    };

  })

  useEffect(() => {
    const interval = setInterval(() => {
      const chartdata = generateCashflowData()
      setData(chartdata)
    }, 5000);

    return () => clearInterval(interval)
  }, [])

  return (
    <Box pos={'relative'} style={{
      overflow: "hidden"
    }}>

      <Box className={styles.graphics3_wrapper}>
        <Box className={styles.graphics3_analytics_card_outer} >
          <Box className={styles.graphics3_analytics_card_inner}>
            <Stack gap={'sm'}>
              <Flex align={'center'} justify={'space-between'}>
                <Text variant="gradient" gradient={{ from: 'dark.1', to: 'dark.8', deg: 70 }}>Cash Flow Analysis</Text>
                <Button color="gray" size="compact-xs" variant="outline">Weekly</Button>
              </Flex>
              <Group >
                <Group gap={4}>
                  <ColorSwatch size={10} color="var(--mantine-color-teal-9)" />
                  <Text c={'dimmed'} size="xs">Income</Text>
                </Group>
                <Group gap={4}>
                  <ColorSwatch size={10} color="var(--mantine-color-red-9)" />
                  <Text c={'dimmed'} size="xs">Expense</Text>
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
          <Group gap={'xs'}>
            {/* <ThemeIcon size={'sm'} variant="transparent" ><IconBell strokeWidth={1.5} size={16} /></ThemeIcon> */}
            <Text size="xs" c={'dimmed'} fw={'bold'}>Spending Pattern</Text>
          </Group>
          <Text maw={400} size={'xs'}>You've spent 30% of your monthly budget on dining out.</Text>
        </Box>
      </Box>
    </Box>
  );
};

