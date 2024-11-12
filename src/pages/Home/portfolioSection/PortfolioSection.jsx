import {
  Badge,
  Box,
  Container,
  Divider,
  em,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import PortfolioSyncSection from "../portfolioSyncSection/PortfolioSyncSection";
import PortfolioManagementSection from "../portfolioManagementSection/PortfolioManagementSection";
import PortfolioAnalysisSection from "../portfolioAnalysisSection/PortfolioAnalysisSection";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";
import styles from "./PortfolioSection.module.css";
import { Carousel } from "@mantine/carousel";
import { portfolioPerfomance, portfolioTargetvalue, portfolioWatchlist } from "../../../assets/images";
import Marquee from "react-fast-marquee";


const PaperMotion = motion.create(Paper, { forwardMotionProps: true });

// Todo

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

  const [] = useState();

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
            <Stack py={"xl"} h={400}>
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
            <Stack maw={500} py={"xl"}>
              <Box>
                <Title tt={"capitalize"} order={3} fw={"normal"}>
                  Make sense of Your Portfolio
                </Title>
                <Text size="sm">
                  Get detailed real-time analysis of every aspect of your
                  portfolio, from growth trends to risk exposure.
                </Text>
              </Box>
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
    <Box >
      <Marquee speed={15} gradient>

      {analytics.map((i) => {
        return (
          <Image mx={'xs'} key={i.id} src={i.image} h={250} fit="contain" w={"auto"} />
        );
      })}
      </Marquee>
      
    </Box>
  );
};
