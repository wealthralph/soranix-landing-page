import {
  ActionIconGroup,
  Badge,
  Box,
  Button,
  Container,
  Divider,
  em,
  Flex,
  Grid,
  Group,
  Image,
  NumberFormatter,
  // NumberFormatter,
  NumberInput,
  Paper,
  rem,
  SimpleGrid,
  Space,
  Stack,
  Switch,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./BudgetSection.module.css";
import {
  IconAlertTriangleFilled,
  IconCircle,
  IconCircle0,
  IconCircle3,
  IconGlobe,
  IconPlus,
  IconWorld,
} from "@tabler/icons-react";
import { budgetui } from "../../../assets/images";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import SlotCounter from "react-slot-counter";

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
      <Box>
        <Divider />
        <Grid m={"xs"}>
          <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
            <Stack py={"xl"} h={450} w={"100%"}>
              <Box maw={500}>
                <Title order={3} tt={"capitalize"} fw={"bold"}>
                  Effortless Tracking and Management
                </Title>
                <Text>
                  We've completely reimagined budgeting to make it effortless
                  and give you system that works for you, not against you.{" "}
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
            <Stack py={"xl"} h={450}>
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
  const allocated = 50000;
  const [spent, setSpent] = useState(0);
  const [remaining, setRemaining] = useState(allocated);
  const [spentHistory, setSpentHistory] = useState([]);
  const [status, setStatus] = useState("On Track");

  useEffect(() => {
    if (status === "Overrun") {
      const resetTimeout = setTimeout(() => {
        setSpent(0);
        setSpentHistory([]);
        setRemaining(allocated);
        setStatus("On Track");
      }, 5000);

      return () => clearTimeout(resetTimeout);
    }
  }, [status, allocated]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (remaining > 0) {
        const maxSpend = Math.min(remaining, 4000);
        const randomSpent =
          Math.floor(Math.random() * (maxSpend - 500 + 1)) + 500;

        setSpentHistory((prevHistory) => {
          const newHistory = [...prevHistory, randomSpent];
          const newSpent = newHistory.reduce((acc, curr) => acc + curr, 0);

          setSpent(newSpent);
          setRemaining(newSpent > allocated ? 0 : allocated - newSpent);

          // Update status
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

  return (
    <Box className={styles.budget_display_wrapper}>
      <Box className={styles.budget_display_outer}>
        <Box className={styles.budget_display_inner}>
          <Box maw={400}>
            <Stack gap={"xs"}>
              <Flex>
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
                  <ActionIconGroup></ActionIconGroup>
              </Flex>
              <Group gap={"xs"}>
                <Badge
                  styles={{
                    root: {
                      border: "thin solid var(--mantine-color-default-border)",
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
                      border: "thin solid var(--mantine-color-default-border)",
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
            <Space h={30} />
            <Group gap={"md"} justify="space-between" align="start">
              <Box>
                <Text fz={"xs"} tt={"uppercase"} c={"dimmed"}>
                  Allocated
                </Text>

                <Text fw={600}>
                  <NumberFormatter
                    value={allocated}
                    prefix="₦"
                    thousandSeparator
                  />
                </Text>
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
              <Stack align="start" gap={3}>
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
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const BudgetConfigurationDisplay = () => {
  const [selected, setSelected] = useState("Weekly");

  const cycles = ["Weekly", "Monthly", "Yearly"];

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
