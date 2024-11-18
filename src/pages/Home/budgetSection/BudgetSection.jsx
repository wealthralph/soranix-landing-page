import {
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
  NumberInput,
  Paper,
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
  IconCircle,
  IconCircle0,
  IconCircle3,
  IconGlobe,
  IconPlus,
  IconWorld,
} from "@tabler/icons-react";
import { budgetui } from "../../../assets/images";
import { motion } from "framer-motion";
import { useState } from "react";


const PaperMotion = motion.create(Paper, { forwardMotionProps: true });

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
                  Fully Configurable to Fit Your Needs
                </Title>
                <Text>
                  Get comprehensive analytics about your portfolio including
                  risk analysis, portfolio distribution, and growth projections.
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
  return (
    <Box className={styles.budget_tracking_outer}>
      <Box className={styles.budget_tracking_inner}>
        <Flex mb={60} gap={"lg"} align={"center"}>
          <Stack gap={3} align="start">
            <Group gap={4}>
              <Text fw={"normal"} size="sm" c={"dimmed"}>
                Allocated{" "}
              </Text>
              <IconCircle
                size={16}
                strokeWidth={2}
                color="var(--mantine-color-teal-filled)"
              />
            </Group>
            <Title c={"dark.4"} order={4} fw={500}>
              <NumberFormatter prefix="₦" value={300000} thousandSeparator />
            </Title>
          </Stack>
          <Stack gap={3}>
            <Group gap={4}>
              <Text fw={"normal"} size="sm" c={"dimmed"}>
                Spent{" "}
              </Text>
            </Group>
            <Title c={"red"} order={4} fw={500}>
              <NumberFormatter prefix="₦" value={300000} thousandSeparator />
            </Title>{" "}
          </Stack>
          <Stack gap={3}>
            <Group gap={4}>
              <Text fw={"normal"} size="sm" c={"dimmed"}>
                Available{" "}
              </Text>
            </Group>
            <Title c={"teal"} order={4} fw={500}>
              <NumberFormatter prefix="₦" value={300000} thousandSeparator />
            </Title>{" "}
          </Stack>
        </Flex>
        <Box h={"100%"} pos={"relative"}>
          <Box w={"100%"} top={5} style={{ zIndex: "10" }} pos={"absolute"}>
            <Divider
              label={
                <Paper shadow="sm" withBorder px={5} radius={"md"} py={1}>
                  Overrun
                </Paper>
              }
              color="red"
            />
          </Box>
          <Stack pos={"realtive"}>
            <svg
              fill="none"
              height="104"
              viewBox="0 0 401 104"
              width="401"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M1 103L57.7031 56L119.5 46"
                stroke="#3B82F6"
                strokeLinecap="round"
                strokeWidth="2"
                style={{
                  stroke: "#3B82F6",
                  strokeColor: "color(display-p3 0.2314 0.5098 0.9647)",
                  strokeOpacity: 1,
                }}
              ></path>
              <path
                d="M57.7031 56L1 103H119V46.5L57.7031 56Z"
                fill="#3B82F6"
                fillOpacity="0.08"
                style={{
                  fill: "#3B82F6",
                  fillColor: "color(display-p3 0.2314 0.5098 0.9647)",
                  fillOpacity: 0.08,
                }}
              ></path>
            </svg>
            <svg
              fill="none"
              height="104"
              viewBox="0 0 401 104"
              width="401"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.chartSvg}
            >
              <path
                d="M119 46L400.5 0.5"
                stroke="#1D3E7A"
                strokeDasharray="2 6"
                strokeLinecap="round"
                // strokeOpacity="0.24"
                className={styles.chartPath}
              ></path>
            </svg>
            <Box>
              <Divider />
              <Flex justify={"space-between"}>
                <Text size="xs" c={"dimmed"}>
                  Jun 1
                </Text>
                <Text size="xs" c={"dimmed"}>
                  Jul 1
                </Text>
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const BudgetConfigurationDisplay = () => {


  const [selected , setSelected] = useState("Weekly")

  const cycles = ["Weekly", "Monthly",  "Yearly" ]


  return (
    <Box pos={'relative'} h={'100%'}>
      <Box className={styles.budget_config_display_wrapper}>
        <Box className={styles.budget_config_display_outer}>
          <Box className={styles.budget_config_display_inner}>
            <Box>
              <Title order={4} fw={"bold"} c={"dark.4"}>
                Budget
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
                    Enable this to deduct allocated amounts from your income
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
            {
              cycles.map(i => {
                return (
                  <Box
                    key={i}
                    px={"xs"}
                    py={3}
                    pos={"relative"}
                    onMouseOver={() => setSelected(i)}
                    w={'100%'}
                    display={'flex'}
                    
                  >
                    <Text style={{zIndex: '2'}}>{i}</Text>
                    {i === selected && (
                      <PaperMotion
                        style={{zIndex: '0'}}
                        layoutId="config"
                        w={"100%"}
                        pos={"absolute"}
                        withBorder
                        radius={"sm"}
                        inset={0}
                        shadow="xs"
                      ></PaperMotion>
                    )}
                  </Box>
                );
              })
            }
      </Box>
    </Box>
  );
};
