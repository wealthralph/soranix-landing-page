import { gsap } from "gsap";
import {
  Badge,
  Box,
  Container,
  Grid,
  Group,
  Skeleton,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import styles from "./AnalyticsSection.module.css";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { AreaChart } from "@mantine/charts";

const AnalyticsSection = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".grid-item", {
        opacity: 0,
        y: 50,
        stagger: {
          amount: 0.8,
          from: "random",
          grid: "auto",
        },
        duration: 1,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 30%",
          end: "bottom 20%",
          scrub: false,
        },
      });
    },
    { scope: containerRef.current }
  );

  const child = <Skeleton height={140} radius="md" animate={false} />;

  return (
    <Container size={"xl"} my={50} ref={containerRef}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Analytics{" "}
              </Text>
              <Title tt={"capitalize"} order={1}>
                {/* Get Detailed analytics about your finances */}
                See the Patterns in Your Money
              </Title>
            </Box>
            <Box>
              <Text>
                Your finances shouldn’t be a mystery ,zoom in on spending,
                income trends, investment returns, and more, see patterns you
                may not even realize is there using analytics.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box className={styles.analytics_grid_container}>
          <Box className={`${styles.grid_item} grid-item`}>
            <CummulativeBalanceItem />
          </Box>
          <Box className={`${styles.grid_item} grid-item`}>
            <ExpenseRatio />
          </Box>
          <Box className={`${styles.grid_item} grid-item`}>
            <CummulativeBalanceItem />
          </Box>
          <Box className={`${styles.grid_item} grid-item`}>
            <CummulativeBalanceItem />
          </Box>
          <Box className={`${styles.grid_item} grid-item`}>
            <CummulativeBalanceItem />
          </Box>
        </Box>
    
      </Stack>
    </Container>
  );
};

export default AnalyticsSection;

const CummulativeBalanceItem = () => {
  const data = [
    {
      date: "Mar 22",
      Apples: 2890,
      Oranges: 2338,
      Tomatoes: 2452,
    },
    {
      date: "Mar 23",
      Apples: 2756,
      Oranges: 2103,
      Tomatoes: 2402,
    },
    {
      date: "Mar 24",
      Apples: 3322,
      Oranges: 986,
      Tomatoes: 1821,
    },
    {
      date: "Mar 25",
      Apples: 3470,
      Oranges: 2108,
      Tomatoes: 2809,
    },
    {
      date: "Mar 26",
      Apples: 3129,
      Oranges: 1726,
      Tomatoes: 2290,
    },
  ];

  return (
    <Stack gap={"xs"} w={"100%"} h={"100%"}>
      {/* header */}
      <Group justify="space-between">
        <Text size="sm" fw={500}>
          Cummulate Balance{" "}
        </Text>
        <Badge
          styles={{
            root: {
              border: "thin solid var(--mantine-color-default-border)",
            },
          }}
          variant="light"
          color="gray.6"
          c={"dimmed"}
          radius={"sm"}
          size="xs"
        >
          Accounts
        </Badge>{" "}
      </Group>
      {/* body */}
      <Stack gap={0}>
        <Text size="xl" fw={500}>
          ₦ 1,000,000
        </Text>
        {/* <Text size="xs" c={"dimmed"}>
          + 10% from last month
        </Text> */}
      </Stack>
      <Box>
        <AreaChart
          h={70}
          data={data}
          dataKey="date"
          withGradient
          withYAxis={false}
          withDots={false}
          withTooltip={false}
          series={[{ name: "Apples", color: "blue" }]}
        />
      </Box>
    </Stack>
  );
};


const ExpenseRatio = () => {

  return (
    <Stack>
      <Text>Expense Ratio</Text>
      <Title> ₦ 1,000,000</Title>
    </Stack>
  );

}
