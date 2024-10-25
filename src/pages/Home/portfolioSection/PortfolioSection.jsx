import { Badge, Box, Container, Divider, em, Grid, Group, Paper, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core"
import { motion } from "framer-motion";
import PortfolioSyncSection from "../portfolioSyncSection/PortfolioSyncSection";
import PortfolioManagementSection from "../portfolioManagementSection/PortfolioManagementSection";
import PortfolioAnalysisSection from "../portfolioAnalysisSection/PortfolioAnalysisSection";
import { useMediaQuery } from "@mantine/hooks";

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
            Portfolio <br /> Analysis
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

  return (
    <Container size={"xl"} w={"100%"}>
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
            <Stack maw={450} py={"xl"} h={400}>
              <Box>
                <Title order={3} fw={"normal"}>
                  Hands-On Control for Your Investments{" "}
                </Title>
                <Text size="sm">
                  Take control of your investments with powerful tools that help
                  you manage your portfolio effortlessly.
                </Text>
              </Box>
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
            <Stack maw={450} py={"xl"}>
              <Box>
                <Title tt={"capitalize"} order={3} fw={"normal"}>
                  Make sense of Your Portfolio
                </Title>
                <Text size="sm">
                 Get detailed real-time analysis of every aspect of your portfolio, from growth trends to
                  risk exposure. 
                </Text>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
        <Divider />
      </Box>
      <Stack w={"100%"}>
      </Stack>
    </Container>
  );
}

export default PortfolioSection