import { Badge, Container, Group, Paper, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core"
import { motion } from "framer-motion";
import PortfolioSyncSection from "../portfolioSyncSection/PortfolioSyncSection";
import PortfolioManagementSection from "../portfolioManagementSection/PortfolioManagementSection";
import PortfolioAnalysisSection from "../portfolioAnalysisSection/PortfolioAnalysisSection";

const PaperMotion = motion.create(Paper, { forwardMotionProps: true });


const PortfolioSection = () => {


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
    <Container size={"lg"}  w={'100%'}>
      <Stack w={'100%'}>
        <Badge radius={"sm"} variant="dot">
          Portfolio
        </Badge>
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
          <Title
            tt={"capitalize"}
            fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
          >
            Welcome to your <br /> Investment Playground.
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
      <Stack w={"100%"} >
        <PortfolioSyncSection/>
        <PortfolioManagementSection/>
        <PortfolioAnalysisSection/>
      </Stack>
    </Container>
  );
}

export default PortfolioSection