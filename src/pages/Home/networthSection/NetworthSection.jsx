import { ActionIcon, Box, ColorSwatch, Container, Divider, em, Grid, Group, NumberFormatter, Progress,  Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import styles from "./NetworthSection.module.css"
import { IconPlus, IconSettingsAutomation } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

const NetWorthSection = () => {
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

  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

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
    <Container mt={50} size={"xl"}>
      <Stack gap={"xl"}>
 
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Networth
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Your networth <br /> visualized in real time
              </Title>
            </Box>
            <Box>
              <Text>
                Track your net worth as it evolves in real-time. Get a clear,
                up-to-the-minute view of your assets, liabilities, and overall
                financial health, all in one place.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Container my={40} w={"100%"} p={0} size={"md"}>
          <div className={styles.networth_box_blur}>
            <div className={styles.networth_content}>
              <Group gap={"xs"} justify="end">
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
              {/* <Space h={30} /> */}
              <Group justify="space-between">
                <Box>
                  <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                    Networth
                  </Text>
                  <Title fz={{ base: "h2", xs: "h3", sm: "h1", md: "h1" }}>
                    <NumberFormatter
                      prefix="$"
                      value={5000}
                      thousandSeparator
                    />
                  </Title>
                </Box>
                <Box>
                  <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                    Diff
                  </Text>
                  <Title fz={{ base: "h2", xs: "h3", sm: "h1", md: "h1" }}>
                    <NumberFormatter suffix="%" value={10} thousandSeparator />
                  </Title>
                </Box>
                <Box>
                  <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                    Target
                  </Text>
                  <Title fz={{ base: "h2", xs: "h3", sm: "h1", md: "h1" }}>
                    <NumberFormatter
                      prefix="$"
                      value={10000}
                      thousandSeparator
                    />
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
        </Container>
        {/* <Box>
          <Divider />
          <Grid m={"xs"}>
            <Grid.Col
              h={400}
              span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              style={{
                paddingInlineEnd: !isMobile
                  ? "var(--mantine-spacing-xl)"
                  : null,
              }}
            >
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Impact Analysis
                  </Title>
                  <Text >
                    Get a clear view of how your daily decisions like savings,
                    expense affect your net-worth and shape your financial
                    future.
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
                    Net-Worth Drivers
                  </Title>
                  <Text >
                    Boost your account experience with a range of smart,
                    easy-to-customize features .
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider />
        </Box> */}
      </Stack>
    </Container>
  );
};

export default NetWorthSection