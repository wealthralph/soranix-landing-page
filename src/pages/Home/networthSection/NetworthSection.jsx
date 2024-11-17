import {
  ActionIcon,
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
  Progress,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useEffect, useState } from "react";
import styles from "./NetworthSection.module.css";
import { IconPlus, IconSettingsAutomation } from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";
import SlotCounter from "react-slot-counter";

const NetWorthSection = () => {
  const [netWorthData, setNetWorthData] = useState([
    {
      id: 1,
      value: 500,
      label: "Deposit",
      color: "orange",
      striped: false,
    },
    {
      id: 2,
      value: 3000,
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
      value: 9000,
      label: "Investment",
      color: "pink",
      striped: false,
    },
  ]);

  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const [graphData, setGraphData] = useState([]);

  const TARGET_NET_WORTH = 10000;
  const newNetWorth = graphData[graphData.length - 1]?.netWorth || 5000;

  const difference = TARGET_NET_WORTH - newNetWorth;
  const percentageDiff = (newNetWorth / TARGET_NET_WORTH) * 100;

  const formattedNetworth = Number(newNetWorth).toLocaleString("en-NG");

  useEffect(() => {
    const interval = setInterval(() => {
      const currentValues = {
        deposit: netWorthData.find((item) => item.label === "Deposit").value,
        savings: netWorthData.find((item) => item.label === "Savings").value,
        debts: netWorthData.find((item) => item.label === "Debts").value,
        investment: netWorthData.find((item) => item.label === "Investment")
          .value,
      };

      updateNetWorthData(currentValues, setNetWorthData, setGraphData);
    }, 2000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [netWorthData]);

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
    const formattedValue = Number(swatch.value).toLocaleString("en-US");

    return (
      <Group key={swatch.id} gap={"3px"}>
        <ColorSwatch size={10} color={swatch.color} opacity={0.5} />
        <Title order={5} fw={500} tt={"lowercase"}>
          {swatch.label}
        </Title>
        <Group align="end" gap={0}>
          <Title order={5} fw={500} c={"dimmed"}>
            ₦
          </Title>
          <Title order={5} fw={500} c={"dimmed"}>
            <SlotCounter value={formattedValue} />
          </Title>
        </Group>
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
                <ActionIcon variant="transparent" color="dark" size={"sm"}>
                  <IconPlus />
                </ActionIcon>
                <ActionIcon variant="transparent" color="dark" size={"sm"}>
                  <IconSettingsAutomation />
                </ActionIcon>
              </Group>
              {/* <Space h={30} /> */}
              <Group gap={{base: "sm", xs: "md", md: "xl", lg: "xl", xl: "xl"}} align="end">
                <Box>
                  <Text c={"dimmed"} tt={"capitalize"}>
                    Networth
                  </Text>
                  <Group align="end" gap={4}>
                    <Title fz={{ base: 25, xs: "h1", sm: "h1", md: 40 }}>
                      ₦
                    </Title>
                    <Title fz={{ base: 25, xs: "h1", sm: "h1", md: 40 }}>
                      <SlotCounter value={formattedNetworth} />
                    </Title>
                  </Group>
                </Box>
                <Box>
                  <Text c={"dimmed"} tt={"capitalize"}>
                    Diff
                  </Text>
                  <Title
                    c={percentageDiff >= 100 ? "teal" : "yellow"}
                    fz={{ base: 25, xs: "h1", sm: "h1", md: 40 }}
                  >
                    <NumberFormatter
                      suffix="%"
                      value={percentageDiff.toFixed(0)}
                      thousandSeparator
                    />
                  </Title>
                </Box>
                <Box>
                  <Text c={"dimmed"} tt={"capitalize"}>
                    Target
                  </Text>
                  <Title fz={{ base: 25, xs: "h1", sm: "h1", md: 40 }}>
                    <NumberFormatter
                      prefix="₦"
                      value={TARGET_NET_WORTH}
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
                <Group gap={'sm'}>{swatches}</Group>
              </Stack>
            </div>
          </div>
        </Container>
      </Stack>
    </Container>
  );
};

export default NetWorthSection;

const generateRandomValue = (
  currentValue,
  range = 1000,
  allowNegative = false
) => {
  const change = Math.floor(Math.random() * range * 2 - range);
  const newValue = currentValue + change;

  return allowNegative ? newValue : Math.max(0, newValue);
};

// Function to calculate net worth based on the current asset and debt values
const generateNetWorthData = (previousNetWorth, currentValues) => {
  const { savings, deposit, debts, investment } = currentValues;

  const netWorth = deposit + savings + investment - debts;

  return Math.max(0, netWorth);
};

const updateNetWorthData = (currentValues, setNetWorthData, setGraphData) => {
  const newValues = {
    deposit: generateRandomValue(currentValues.deposit, 1000, false),
    savings: generateRandomValue(currentValues.savings, 1000, false),
    investment: generateRandomValue(currentValues.investment, 1000, false),

    debts: generateRandomValue(currentValues.debts, 1000, true),
  };

  const newNetWorth = generateNetWorthData(0, newValues);

  const timestamp = new Date().toLocaleTimeString(); //

  setGraphData((prevGraphData) => [
    ...prevGraphData,
    { date: timestamp, netWorth: newNetWorth },
  ]);

  setNetWorthData((prevData) =>
    prevData.map((item) => {
      switch (item.label) {
        case "Deposit":
          return { ...item, value: newValues.deposit };
        case "Savings":
          return { ...item, value: newValues.savings };
        case "Debts":
          return { ...item, value: newValues.debts };
        case "Investment":
          return { ...item, value: newValues.investment };
        default:
          return item;
      }
    })
  );
};
