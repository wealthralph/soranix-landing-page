import { gsap } from "gsap";
import {
  Badge,
  Box,
  Button,
  Container,
  Divider,
  em,
  Grid,
  Group,
  Image,
  Paper,
  rem,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./BudgetSection.module.css";
import { IconAlertTriangleFilled, IconWorld } from "@tabler/icons-react";
import { budgetui } from "../../../assets/images";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";
import { LineChart } from "@mantine/charts";
import { useGSAP } from "@gsap/react";

const PaperMotion = motion.create(Paper, { forwardMotionProps: true });
const TextMotion = motion.create(Text, { forwardMotionProps: true });

const BudgetSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Container fluid my={50} p={0}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Smart Budgets
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Budgeting Built for Real-Life Needs{" "}
              </Title>
            </Box>
            <Box>
              <Text>
                Managing money shouldn’t be a struggle , our Smart-Budegts is
                built to put your finances on track and flexible enough to fit
                into your money needs and lifestyle.{" "}
              </Text>
            </Box>
          </Stack>
        </Box>
        <Container size={"lg"} w={"100%"} p={0}>
          <Box
            className={styles.budget_ui_image_container}
            h={{ base: "200px", xs: 300, sm: 450, lg: 550 }}
          >
            <Image src={budgetui} />
          </Box>
        </Container>
      </Stack>
      <Box w={"100%"}>
        <Divider />
        <Grid my={"xs"}>
          <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Stack py={"xl"} h={450} w={"100%"}>
              <Box maw={450}>
                <Title order={3} tt={"capitalize"} fw={"bold"}>
                  Effortless Tracking and Management
                </Title>
                <Text>
                  We&apos;ve completely reimagined budgeting to make it
                  effortless and give you system that works for you, not against
                  you.{" "}
                </Text>
              </Box>
              <BudgetingTrackingDisplay />
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
            <Stack py={"xl"} h={450} w={"100%"}>
              <Box maw={450}>
                <Title order={3} fw={"bold"}>
                  Tailor your budget to your finances
                </Title>
                <Text>
                  Configure every detail of your budget. Adjust cycles,
                  allocation styles, and more to make budgeting work for you.
                </Text>
              </Box>
              <BudgetConfigurationDisplay />
            </Stack>
          </Grid.Col>{" "}
        </Grid>
        <Divider />
      </Box>
    </Container>
  );
};

export default BudgetSection;

const BudgetingTrackingDisplay = () => {
  const allocated = 6000;
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(allocated);
  const [spentHistory, setSpentHistory] = useState([]);
  const [status, setStatus] = useState("On Track");
  const alertRef = useRef(null);

  // Reset spent and history after overrun
  useEffect(() => {
    if (status === "Overrun") {
      const resetTimeout = setTimeout(() => {
        setSpent(0);
        setSpentHistory([]);
        setRemaining(allocated);
        setStatus("On Track");
      }, 7000);

      return () => clearTimeout(resetTimeout);
    }
  }, [status, allocated]);

  // Generate random spending data
  useEffect(() => {
    const interval = setInterval(() => {
      if (remaining > 0) {
        const maxSpend = Math.min(remaining, 4000);
        const randomSpent =
          Math.floor(Math.random() * (maxSpend - 500 + 1)) + 500;

        setSpentHistory((prevHistory) => {
          const newHistory = [
            ...prevHistory,
            { amount: randomSpent, date: new Date().toLocaleDateString() }, // Add date
          ];
          const newSpent = newHistory.reduce(
            (acc, curr) => acc + curr.amount,
            0
          );

          setSpent(newSpent);
          setRemaining(newSpent > allocated ? 0 : allocated - newSpent);

          if (newSpent > allocated) {
            setStatus("Overrun");
          } else if (newSpent < allocated * 0.4) {
            setStatus("On Track");
          } else {
            setStatus("At Risk");
          }

          return newHistory;
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [remaining, allocated]);

  useGSAP(() => {
    const alert = alertRef.current;

    gsap.set(alert, { y: 0, opacity: 0, visibility: "hidden" });

    if (status === "Overrun") {
      gsap.to(alert, {
        opacity: 1,
        visibility: "visible",
        duration: 0.5,
        y: -65,
        ease: "power1.inOut",
        yoyo: true,
      });
    }
  }, [status]);

  const chartData = spentHistory.map((item, index) => ({
    date: item.date,
    spent: spentHistory
      .slice(0, index + 1)
      .reduce((acc, curr) => acc + curr.amount, 0),
  }));

  const budgetAlertActions = ["Adjust Budget", "View Spending Insight", "Lock Spend" ];

  return (
    <Box w={"100%"} h={"100%"} pos={"relative"}>
      <Box className={styles.budget_display_wrapper}>
        <Box className={styles.budget_display_outer}>
          <Box className={styles.budget_display_inner}>
            <Box maw={450}>
              {/* Header */}
              <Stack gap={"xs"}>
                <Group gap={2} align="baseline">
                  <Title order={4} fw={"bold"} c={"dark.4"}>
                    Groceries
                  </Title>
                  <Badge
                    leftSection={
                      <IconWorld
                        style={{ width: rem(10), height: rem(10) }}
                        strokeWidth={1.2}
                      />
                    }
                    variant="transparent"
                    color="gray.8"
                    c={"dark"}
                    radius={"sm"}
                    size="md"
                  >
                    Global
                  </Badge>
                </Group>

                {/* Cycle Information */}
                <Group gap={"xs"}>
                  <Badge
                    styles={{
                      root: {
                        border:
                          "thin solid var(--mantine-color-default-border)",
                      },
                    }}
                    variant="light"
                    color="gray.8"
                    c={"dark"}
                    radius={"sm"}
                    size="xs"
                  >
                    Cycle
                  </Badge>
                  <Badge
                    styles={{
                      root: {
                        border:
                          "thin solid var(--mantine-color-default-border)",
                      },
                    }}
                    variant="light"
                    color="gray.8"
                    c={"dark"}
                    radius={"sm"}
                    size="xs"
                  >
                    Jun 10 - Jun 17
                  </Badge>
                </Group>
              </Stack>

              <Space h={20} />
              <Group maw={400} gap={"md"} justify="space-between" align="start">
                <Box>
                  <Text fz={"xs"} tt={"uppercase"} c={"dimmed"}>
                    Allocated
                  </Text>
                  <Text fw={600}>₦{allocated.toLocaleString("en-US")}</Text>
                </Box>
                <Box>
                  <Text fz={"xs"} tt={"uppercase"} c={"dimmed"}>
                    Spent
                  </Text>
                  <Group align="end" gap={0}>
                    <Text fw={600} c={"red"}>
                      ₦
                    </Text>
                    <Text fw={600} c={"red.8"}>
                      <SlotCounter
                        value={Number(spent).toLocaleString("en-US")}
                      />{" "}
                    </Text>
                  </Group>
                </Box>
                <Box>
                  <Text fz={"xs"} tt={"uppercase"} c={"dimmed"}>
                    Remaining
                  </Text>
                  <Group align="end" gap={0}>
                    <Text
                      fw={600}
                      c={
                        status === "Overrun"
                          ? "var(--mantine-color-red-filled)"
                          : status === "At Risk"
                          ? "var(--mantine-color-orange-filled)"
                          : "var(--mantine-color-teal-filled)"
                      }
                    >
                      ₦
                    </Text>
                    <Text
                      fw={600}
                      c={
                        status === "Overrun"
                          ? "var(--mantine-color-red-filled)"
                          : status === "At Risk"
                          ? "var(--mantine-color-orange-filled)"
                          : "var(--mantine-color-teal-filled)"
                      }
                    >
                      <SlotCounter
                        value={Number(remaining).toLocaleString("en-US")}
                      />
                    </Text>
                  </Group>
                </Box>
                <Stack align="start" gap={2}>
                  <Text fz={"xs"} tt={"uppercase"} c={"dimmed"}>
                    Status
                  </Text>
                  <AnimatePresence mode="wait">
                    <TextMotion
                      key={status}
                      initial={{ y: 5, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -5, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      fz={"xs"}
                      fw={"bold"}
                      tt={"uppercase"}
                      c={
                        status === "Overrun"
                          ? "var(--mantine-color-red-filled)"
                          : status === "At Risk"
                          ? "var(--mantine-color-orange-filled)"
                          : "var(--mantine-color-teal-filled)"
                      }
                    >
                      {status}
                    </TextMotion>
                  </AnimatePresence>
                </Stack>
              </Group>

              {/* Line Chart */}
              <Space h={20} />
              <LineChart
                h={120}
                data={chartData}
                dataKey="date"
                withPointLabels
                series={[
                  {
                    name: "spent",
                    color:
                      status === "Overrun"
                        ? "red"
                        : status === "At Risk"
                        ? "orange"
                        : "teal",
                    strokeDasharray: "5 5",
                  },
                ]}
                curveType="natural"
                withYAxis={false}
                withXAxis={false}
                withDots={false}
                gridAxis="y"
                referenceLines={[
                  {
                    y: allocated,
                    label:
                      status === "Overrun"
                        ? "Budget Overrun"
                        : "Budget Allocated",
                    color: status === "Overrun" ? "red.6" : "teal",
                  },
                  { x: "Mar 25", label: "Report out" },
                ]}
                withTooltip={false}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box ref={alertRef} className={styles.budget_alert_outer}>
        <Box className={styles.budget_alert_inner}>
          <Stack gap={"xs"}>
            <Group gap={4}>
              <IconAlertTriangleFilled
                color="var(--mantine-color-red-7)"
                style={{ height: rem("14px"), width: rem("14px") }}
              />
              <Title fw={400} fz={"h6"} c={"red.7"}>
               Budget overrun fix this issue by taking action.
              </Title>
            </Group>
            {/* <Text size="xs">You've exceeded your budget.</Text> */}
            <Group gap={4}>
              {budgetAlertActions.map((i) => {
                return (
                  <Button
                    key={i}
                    variant="light"
                    color="gray"
                    radius={"sm"}
                    size="compact-xs"
                    c={'dark.6'}
                  >
                    {i}
                  </Button>
                );
              })}
            </Group>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const BudgetConfigurationDisplay = () => {
  const [selected, setSelected] = useState("Weekly");

  const cycles = ["Weekly", "Monthly", "Quarterly", "Yearly"];

  return (
    <Box pos={"relative"} h={"100%"}>
      <Box className={styles.budget_display_wrapper}>
        <Box className={styles.budget_display_outer}>
          <Box className={styles.budget_display_inner}>
            <Box>
              <Title order={4} fw={"bold"} c={"dark.4"}>
                Budget Configuration
              </Title>
              <Space h={20} />
              <Stack>
                <Box>
                  <Text size="sm">Income Allocation</Text>
                  <Text size="xs">
                    Set the percentage of your income to be allocated across
                    budget
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">Set Default Cycle</Text>
                  <Text size="xs">
                    Choose how often your budget resets—weekly, monthly, or
                    custom.
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">Zero Based Budgeting</Text>
                  <Text size="xs">
                    Enable this to deduct allocated amounts from your income
                  </Text>
                </Box>
                <Box>
                  <Text size="sm">Set Spend Cap</Text>
                  <Text size="xs">
                    Enable this to deduct allocated amounts from your income
                  </Text>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.budget_config_display_dropdown}>
        {cycles.map((i) => {
          return (
            <Box
              key={i}
              px={"xs"}
              py={3}
              pos={"relative"}
              onMouseOver={() => setSelected(i)}
              w={"100%"}
              display={"flex"}
            >
              <Text style={{ zIndex: "2" }}>{i}</Text>
              {i === selected && (
                <PaperMotion
                  style={{ zIndex: "0" }}
                  layoutId="config"
                  w={"100%"}
                  pos={"absolute"}
                  withBorder
                  radius={"md"}
                  inset={0}
                  shadow="xs"
                ></PaperMotion>
              )}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
