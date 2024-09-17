import { useGSAP } from "@gsap/react";
import { ActionIcon, Avatar, Badge, Box, Button, Container, Divider, em, Flex, Grid, Group, Menu, NumberFormatter, Paper, rem, SimpleGrid, Skeleton, Space, Stack, Table, Tabs, Text, Title, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import styles from "./Account.module.css"
import { IconArrowNarrowDown, IconArrowNarrowUp, IconBellFilled, IconBox, IconCashRegister, IconChevronDown, IconDots, IconMessages, IconNote, IconPackage, IconPlus, IconReportAnalytics, IconSettings, IconSquareCheck, IconSun, IconTrash, IconUsers } from "@tabler/icons-react";
import { AreaChart } from "@mantine/charts";


gsap.registerPlugin(ScrollTrigger)


const AccountSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const containerRef = useRef(null)
  const boxRef = useRef(null)


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

  return (
    <Container size={"lg"} ref={containerRef}>
      <Stack gap={"xl"} w={'100%'}>
        <Box maw={600} w={"100%"}>
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
                Create, manage and connect all your bank accounts whether
                personal savings or business , Soranix provides the tools you
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
                h={''}
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              >
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      A bank account for your every need
                    </Title>
                    <Text c={"dimmed"}>
                      From savings , current to single use options , there’s an
                      account here with your name on it.
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col
                h={''}
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
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Powerful account tools
                    </Title>
                    <Text c={"dimmed"}>
                      Boost your account experience with a range of smart,
                      easy-to-customize features .
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
          <Divider color="dark.7" />
          <Box>
            <Grid p={"xs"}>
              <Grid.Col
                h={400}
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              >
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Real-time, actionable data analytics.
                    </Title>
                    <Text c={"dimmed"}>
                      Stay ahead with our real-time analytics, that brings all
                      you account data, revealing trends and patterns that allow
                      you to make swift, informed decisions about your finances.
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col
                h={400}
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
              ></Grid.Col>
            </Grid>
            {/* <Divider /> */}
          </Box>
        </Box>
        <Paper withBorder h={150} radius={"md"} bg={"transparent"}>
          <SimpleGrid cols={2} h={"100%"}>
            <Box></Box>
            <Stack gap={0} h={"100%"} justify="center" p={"sm"}>
              {/* <Text c={"dimmed"}>Account Insured</Text> */}
              <Text size="xl">Soranix deposit account are NDIC insured </Text>
            </Stack>
          </SimpleGrid>
        </Paper>
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