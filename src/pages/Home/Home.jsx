import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
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
  NumberFormatter,
  Paper,
  Progress,
  SegmentedControl,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useRef, useState } from "react";
import styles from "./Home.module.css";
import { IconPlus, IconSettingsAutomation } from "@tabler/icons-react";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Panel,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "../../components/nodes/CustomNode";
import WorkflowPanel from "../../components/nodes/WorkflowPanel";

  const nodeTypes = { customNode: CustomNode };


const Section7 = () => {
  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
  };

  const initialNodes = [
    {
      id: "A",
      type: "customNode",
      position: { x: 0, y: 150 },
      data: { label: "Custom" },
      ...nodeDefaults,
    },
    {
      id: "B",
      position: { x: 250, y: 150 },
      data: { label: "B" },
      ...nodeDefaults,
    },
    // {
    //   id: "C",
    //   position: { x: 250, y: 150 },
    //   data: { label: "C" },
    //   ...nodeDefaults,
    // },
  ];

  const initialEdges = [
    // {
    //   id: "A-B",
    //   source: "A",
    //   target: "B",
    //   animated: true,
    // },
    // {
    //   id: "A-C",
    //   source: "A",
    //   target: "C",
    // },
  ];


  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

    const onConnect = useCallback(
      (params) => setEdges((eds) => addEdge(params, eds)),
      []
    );

  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Container size={"lg"}>
      <Stack gap={"xl"}>
        <Box maw={600} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Badge color="pink" variant="light">
                Automations
              </Badge>
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

        <Box w={"100%"} h={400}>
          <ReactFlow
            style={{ backgroundColor: "transparent" }}
            nodes={nodes}
            nodeTypes={nodeTypes}
            proOptions={{ hideAttribution: true }}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            edges={edges}
            onConnect={onConnect}
            fitView
            colorMode="dark"

            // preventScrolling={false}
          >
            <Background
              bgColor="transparent"
              gap={100}
              variant={BackgroundVariant.Lines}
              lineWidth={0.2}
              offset={[1, 10]}
            />
            <Controls />
            <Panel position="bottom-center">
              <WorkflowPanel/>
            </Panel>
          </ReactFlow>
        </Box>
        <Box>
          <Divider />
          <Grid m={"xs"}>
            <Grid.Col h={400} span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
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
              h={400}
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
      </Stack>
    </Container>
  );
};

const Section6 = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const [value, setValue] = useState("personal");

  return (
    <Container size={"lg"} my={100}>
      <Stack gap={"xl"}>
        <Box maw={600} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Badge color="orange" variant="light">
                Payments
              </Badge>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Send Money, <br /> faster and better{" "}
              </Title>
            </Box>
            <Box>
              <Text c={"dimmed"}>
                <Text
                  span
                  tt={"capitalize"}
                  fz={"lg"}
                  fw={"bold"}
                  c={"var(--mantine-color-text)"}
                >
                  Pay and get Paid.{" "}
                </Text>{" "}
                Our suite of payment solutions allows you to send and receive
                money in ways that suit your lifestyle—globally and
                effortlessly.
              </Text>
            </Box>
            <SegmentedControl
              value={value}
              w={250}
              size="xs"
              onChange={setValue}
              data={[
                { label: "Personal", value: "personal" },
                { label: "Business", value: "business" },
              ]}
            />
          </Stack>
        </Box>

        <Carousel
          withControls={false}
          loop
          withIndicators={false}
          slideGap={"xl"}
          align="start"
          slideSize={{ base: "100%", sm: "100%", md: "70%" }}
        >
          <Carousel.Slide>
            <Paper withBorder h={250}></Paper>
          </Carousel.Slide>
          <Carousel.Slide>
            <Paper withBorder h={250}></Paper>
          </Carousel.Slide>
        </Carousel>
        <Box>
          {/* <Divider /> */}
          <Divider />
          <Grid py={"xs"}>
            <Grid.Col h={400} span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Simple and intuitive interface
                  </Title>
                  <Text c={"dimmed"}>
                    Navigate payments with an intuitive, user-friendly interface
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
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Configure Payments Your Way{" "}
                  </Title>
                  <Text c={"dimmed"}>
                    Whether you need to automate recurring payments or schedule
                    transfers our flexible configurations have you covered.{" "}
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider />
          <Grid py={"xs"}>
            <Grid.Col
              h={400}
              span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              styles={{
                col: {
                  paddingInlineEnd: !isMobile
                    ? "var(--mantine-spacing-xl)"
                    : null,
                },
              }}
            >
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Stylize Your Payments{" "}
                  </Title>
                  <Text c={"dimmed"}>
                    Customize the look and feel of your payment interface with
                    customizable designs and styling options creating a look
                    that's uniquely yours.
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
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Payment Integration
                  </Title>
                  <Text c={"dimmed"}>
                    Whether you need to automate recurring payments or schedule
                    transfers our flexible configurations have you covered.{" "}
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider />
        </Box>
      </Stack>
    </Container>
  );
};

const Section5 = () => {
  return (
    <Container size={"lg"} my={100}>
      <Stack gap={"xl"}>
        <Box maw={600} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Badge variant="light">Virtual Cards</Badge>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Seamless Spending, <br /> Virtually Anywhere{" "}
              </Title>
            </Box>
            <Box>
              <Text c={"dimmed"}>
                <Text
                  span
                  tt={"capitalize"}
                  fz={"lg"}
                  fw={"bold"}
                  c={"var(--mantine-color-text)"}
                >
                  Spend with confidence.{" "}
                </Text>{" "}
                Our virtual cards provide a smooth, secure way make
                international payments whether you're shopping online or
                in-store.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Paper withBorder h={500}></Paper>
      </Stack>
    </Container>
  );
};

const Section4 = () => {
  const [netWorthData, setNetWorthData] = useState([
    {
      id: 1,
      value: 25900,
      label: "Deposit",
      color: "orange",
      striped: true,
    },
    {
      id: 2,
      value: 30000,
      label: "Savings",
      color: "indigo",
      striped: false,
    },
    {
      id: 3,
      value: 5900,
      label: "Debts",
      color: "violet",
      striped: false,
    },
    {
      id: 4,
      value: 59000,
      label: "Investment",
      color: "pink",
      striped: false,
    },
  ]);

  const addRandomNetWorthData = () => {
    const newId = netWorthData.length + 1;
    const newValue = Math.floor(Math.random() * 100000); // Random value between 0 and 100,000
    const newLabel = `Random Label ${newId}`; // Example label, can be customized
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random hex color
    const newStriped = Math.random() > 0.5;

    const newNetWorthItem = {
      id: newId,
      value: newValue,
      label: newLabel,
      color: newColor,
      striped: newStriped,
    };

    setNetWorthData((prevData) => [...prevData, newNetWorthItem]);
  };

  const segments = netWorthData.map((segment) => {
    return (
      <Progress.Section
        striped={segment.striped}
        key={segment.id}
        value={segment.value / 100}
        label={segment.label}
        color={segment.color}
      />
    );
  });

  const swatches = netWorthData.map((swatch) => {
    return (
      <Group key={swatch.id} gap={"3px"}>
        <ColorSwatch size={15} color={swatch.color} />
        <Text fz={"sm"} fw={"normal"}>
          {swatch.label}
        </Text>
        <Text c={"dimmed"} fw={"lighter"}>
          <NumberFormatter prefix="$" value={swatch.value} thousandSeparator />
        </Text>
      </Group>
    );
  });

  return (
    <Container my={200} size={"lg"}>
      <div className={styles.cont}>
        <Title fz={50} ta={"center"}>
          Your networth <br /> visualized in real-time
        </Title>
        <div className={styles.networth_box_blur}>
          <div className={styles.controls}>
            <Group gap={"xs"}>
              <ActionIcon
                onClick={addRandomNetWorthData}
                variant="transparent"
                color="dark"
                size={"sm"}
              >
                <IconPlus />
              </ActionIcon>
              <ActionIcon variant="transparent" color="dark" size={"sm"}>
                <IconSettingsAutomation />
              </ActionIcon>
            </Group>
          </div>
          <div className={styles.networth_content}>
            <Space h={30} />
            <Group justify="space-between">
              <Box>
                <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                  Networth
                </Text>
                <Title order={1}>
                  <NumberFormatter prefix="$" value={5000} thousandSeparator />
                </Title>
              </Box>
              <Box>
                <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                  Diff
                </Text>
                <Title c={"red.8"} order={1}>
                  <NumberFormatter suffix="%" value={10} thousandSeparator />
                </Title>
              </Box>
              <Box>
                <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                  Target
                </Text>
                <Title order={1}>
                  <NumberFormatter prefix="$" value={10000} thousandSeparator />
                </Title>
              </Box>
            </Group>
            <Stack>
              <Progress.Root
                size={35}
                transitionDuration={500}
                styles={{
                  root: {
                    // display: "flex",
                    // alignItems: "center",
                    gap: "3px",
                    backgroundColor: "transparent",
                  },
                }}
              >
                {segments}
              </Progress.Root>
              <Group>{swatches}</Group>
            </Stack>
          </div>
        </div>
      </div>
    </Container>
  );
};

const Section3 = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Container size={"lg"}>
      <Stack gap={"xl"}>
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

        <Paper h={500}></Paper>
        <Box>
          <Box>
            <Divider />
            <Grid m={"xs"}>
              <Grid.Col
                h={400}
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
                h={400}
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
          <Divider />
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

const Section2 = () => {
  return (
    <Container size={"lg"} py={70}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Title tt={"capitalize"} fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>
          Not Just Banking. <br /> this is So Much More.
        </Title>
        <Box>
          <Text>
            Why settle for just banking when you can have so much more? We’ve
            reimagined what a financial platform can do with all the tools you
            need to make your money work harder, smarter, and faster.
            {/* —it’s a complete redefinition of how you interact with your money. */}
          </Text>
        </Box>
      </SimpleGrid>
      <Space h={70} />
      <SimpleGrid cols={2}>
        <Paper h={200} withBorder radius={"md"}></Paper>

        <Paper h={200} withBorder radius={"md"}></Paper>
      </SimpleGrid>
    </Container>
  );
};

const HeroSection = () => {
  return (
    <Container size={"lg"}>
      <Stack gap={"lg"}>
        <Box maw={600}>
          <Title
            fz={{ base: 50, xs: "h1", sm: "h1", md: 50 }}
            tt={"capitalize"}
            fw={"bold"}
          >
            Your trusted ally for financial growth
          </Title>
          <Text>
            Unlock the full potential of your finances with a platform that goes
            beyond the basics.
          </Text>
        </Box>
        <Box>
          <Button variant="default">Get Early Access</Button>
        </Box>
      </Stack>
      <Space h={70} />
      <Paper h={700} withBorder radius={"md"}></Paper>
      <Space h={70} />
    </Container>
  );
};

const Home = () => {
  return (
    <Container fluid p={0}>
      {/* <Space h={70} /> */}

      <HeroSection />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Space h={300} />
    </Container>
  );
};

export default Home;
