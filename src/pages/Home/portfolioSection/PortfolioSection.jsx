import {
  Badge,
  Box,
  Container,
  Divider,
  em,
  Flex,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import PortfolioSyncSection from "../portfolioSyncSection/PortfolioSyncSection";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./PortfolioSection.module.css";
import {
  portfolioPerfomance,
  portfolioTargetvalue,
  portfolioWatchlist,
} from "../../../assets/images";
import Marquee from "react-fast-marquee";
import { IconChartCandle, IconSend } from "@tabler/icons-react";

const PaperMotion = motion.create(Paper, { forwardMotionProps: true });

const PortfolioSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const portfolioComponents = [
    {
      id: 1,
      title: (
        <Text ta={"center"}>
          Portfolio <br /> Sync
        </Text>
      ),
    },
    {
      id: 2,
      title: (
        <Text ta={"center"}>
          Portfolio <br /> Management
        </Text>
      ),
    },
    {
      id: 3,
      title: (
        <Text ta={"center"}>
          Portfolio <br /> Analytics
        </Text>
      ),
    },
    {
      id: 4,
      title: (
        <Text ta={"center"}>
          Portfolio <br /> CoPilot
        </Text>
      ),
    },
    {
      id: 5,
      title: (
        <Text ta={"center"}>
          Market <br /> Insight
        </Text>
      ),
    },
  ];

  const portfolioComponentsMap = portfolioComponents.map((i) => {
    return (
      <Stack key={i.id} align="center">
        <PaperMotion
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.99 }}
          shadow="xs"
          radius={"md"}
          h={70}
          w={70}
        >
          {" "}
        </PaperMotion>
        <Text ff={"monospace"} size="xs">
          {i.title}
        </Text>
      </Stack>
    );
  });

  const aiPortfolioAIFeatures = [
    {
      id: 1,
      title: "Real-Time Investment Insights",
      description:
        "Provides up-to-the-minute analysis on your portfolio's performance.",
    },
    {
      id: 2,
      title: "Personalized Stock Recommendations",
      description:
        "Get stocks  tailored to your goals, risk tolerance, and financial goals.",
    },
    {
      id: 3,
      title: "Ask any question about your assest",
      description:
        "Get answers to any question about your assets—instantly and insightfully.",
    },
  ];

  return (
    <Container size={"xl"} w={"100%"} my={100}>
      <Stack w={"100%"}>
        <Badge radius={"sm"} variant="dot">
          Portfolio
        </Badge>
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
          <Title
            tt={"capitalize"}
            fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
          >
            Welcome to your <br /> Investment Control Center.
          </Title>
          <Stack justify="flex-end">
            <Text>
              Why settle for just banking when you can have so much more? We’ve
              reimagined what a financial platform can do with all the tools you
              need to make your money work harder, smarter, and faster.
              {/* —it’s a complete redefinition of how you interact with your money. */}
            </Text>
          </Stack>
        </SimpleGrid>
        <Group>{portfolioComponentsMap}</Group>
      </Stack>
      <Space h={70} />
      <PortfolioSyncSection />

      <Box>
        <Divider />

        <SimpleGrid p={"lg"} cols={{ base: 1, md: 2, lg: 2, xl: 2 }}>
          <Stack maw={450} py={"xl"}>
            <Box>
              <Title order={3} fw={"bold"}>
                The AI Co-Pilot for Your Portfolio{" "}
              </Title>
              <Text>
                {/* Get real-time insights, tailored recommendations, and analytics
                that help you make informed decisions , and keeps your portfolio
                on the right track. */}
                Navigate the markets like never before. Our AI co-pilot provides
                real-time insights, actionable analytics, and tailored
                recommendations to help maximize your investments.
              </Text>
            </Box>
            <Stack gap={"xs"}>
              {aiPortfolioAIFeatures.map((i) => {
                return (
                  <Box
                    className={styles.ai_portfolio_features}
                    gap={"xs"}
                    key={i.id}
                  >
                    <Title order={5} fw={500}>
                      {i.title}
                    </Title>
                    <Text size="sm">{i.description}</Text>
                  </Box>
                );
              })}
            </Stack>
          </Stack>
          <Box className={styles.ai_portfolio_display}></Box>
        </SimpleGrid>
        <Divider />
      </Box>

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
            <Stack py={"xl"} h={450}>
              <Box maw={450}>
                <Title order={3} fw={"bold"}>
                  Comprehensive Portfolio Analytics
                </Title>
                <Text>
                  Get comprehensive analytics about your portfolio including
                  risk analysis, portfolio distribution, and growth projections.
                </Text>
              </Box>
              <PortfolioAnalyticsGraphics />
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
            <Stack h={450} py={"xl"}>
              <Box maw={500}>
                <Title tt={"capitalize"} order={3} fw={"bold"}>
                  Automate your portfolio
                </Title>
                <Text>
                  Effortlessly automate your portfolio management with custom
                  workflows, built in minutes.
                </Text>
              </Box>
              <PortfolioAutomationGraphics />
            </Stack>
          </Grid.Col>
        </Grid>
        <Divider />
      </Box>
      <Stack w={"100%"}></Stack>
    </Container>
  );
};

export default PortfolioSection;

const PortfolioAnalyticsGraphics = () => {
  const analytics = [
    {
      id: 1,
      title: "Portfolio Performance",
      image: portfolioPerfomance,
    },
    {
      id: 2,
      title: "Portfolio Performance",
      image: portfolioWatchlist,
    },
    {
      id: 3,
      title: "Portfolio Performance",
      image: portfolioTargetvalue,
    },
  ];

  return (
    <Box>
      <Marquee speed={15} gradient>
        {analytics.map((i) => {
          return (
            <Image
              mx={"xs"}
              key={i.id}
              src={i.image}
              h={300}
              fit="contain"
              w={"auto"}
            />
          );
        })}
      </Marquee>
    </Box>
  );
};

const PortfolioAutomationGraphics = () => {
  return (
    <Box
      bg={"grap"}
      w={"100%"}
      h={"100%"}
      className={styles.portfolio_automation_cont}
    >
      {/* Trigger Node */}
      <Box data-is="Trigger" className={styles.portfolio_trigger_node}>
        {/* header */}
        <Flex gap={"md"} align={"center"} justify={"space-between"}>
          <Group gap={"xs"}>
            <ThemeIcon variant="light" color="orange" size={"xs"}>
              <IconChartCandle
                color="var(--mantine-color-orange-filled)"
                size={13}
                strokeWidth={1}
              />
            </ThemeIcon>
            <Text fz={"sm"}>When asset price updates</Text>
          </Group>
          <Badge variant="light" color="gray" radius={"sm"} size="xs">
            Assets
          </Badge>
        </Flex>
        <Divider my={4} />
        <Box py={7}>
          <Title c={"dimmed"} fz={"xs"} fw={"normal"} textWrap="nowrap">
            Triggers when{" "}
            <Text fw={"bold"} c={"red"} inherit span>
              TSLA
            </Text>{" "}
            asset hits $428.64
          </Title>
        </Box>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
          viewBox="0 0 12 12"
          className={styles.portfolio_trigger_handle}
        >
          <circle
            cx="6"
            cy="6"
            r="4.8"
            stroke="var(--mantine-color-teal-filled)"
            fill="white"
            strokeWidth="1"
          ></circle>
        </svg>
        <svg
          width="16"
          height="57"
          viewBox="0 0 16 57"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.portfolio_trigger_arrow}
        >
          <path
            strokeWidth={0.5}
            d="M7.2929 56.7071C7.68342 57.0976 8.31658 57.0976 8.70711 56.7071L15.0711 50.3431C15.4616 49.9526 15.4616 49.3195 15.0711 48.9289C14.6805 48.5384 14.0474 48.5384 13.6569 48.9289L8 54.5858L2.34315 48.9289C1.95262 48.5384 1.31946 48.5384 0.928934 48.9289C0.53841 49.3195 0.53841 49.9526 0.928934 50.3431L7.2929 56.7071ZM7 4.37114e-08L7 56L9 56L9 -4.37114e-08L7 4.37114e-08Z"
            fill="var(--mantine-color-teal-filled)"
          />
        </svg>
      </Box>

      {/* Alert Node */}
      <Box className={styles.portfolio_alert_node}>
        {/* header */}
        <Flex gap={"md"} align={"center"} justify={"space-between"}>
          <Group gap={"xs"}>
            <ThemeIcon variant="light" color="teal" size={"xs"}>
              <IconSend
                color="var(--mantine-color-teal-filled)"
                size={13}
                strokeWidth={1}
              />
            </ThemeIcon>
            <Text fz={"sm"}>Send Email</Text>
          </Group>
          <Badge variant="light" color="gray" radius={"sm"} size="xs">
            Alert
          </Badge>
        </Flex>
        <Divider my={4} />
        <Box py={7}>
          <Title c={"dimmed"} fz={"xs"} fw={"normal"} textWrap="nowrap">
            Sell 10% of your{" "}
            <Text fw={"bold"} c={"red"} inherit span>
              TSLA
            </Text>{" "}
            asset.
          </Title>
        </Box>
      </Box>
    </Box>
  );
};
