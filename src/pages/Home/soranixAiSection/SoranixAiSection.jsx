import {
  Box,
  Container,
  Divider,
  em,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { testVideo } from "../../../assets/images";
import styles from "./SoranixAiSection.module.css";
import EmblaCarousel from "../../../components/emblaCarousel/EmblaCarousel";

const SoranixAiSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Container size={"xl"} my={50}>
      <Box>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Soranix AI{" "}
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Your Money Co-pilot
              </Title>
            </Box>
            <Box>
              <Text>
                Take charge of your finances with Soranix AI your smart
                assistant that learns and adapts to your unique financial
                journey. Receive personalized recommendations, automate tasks,
                and make informed decisions every day.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Space h={70} />
        <Box className={styles.ai_chat_brand_video}>
          <video
            autoPlay
            muted
            playsInline
            loop
            width={"100%"}
            height={"100%"}
            style={{
              objectFit: "cover",
              pointerEvents: "none",
            }}
            onContextMenu={(e) => e.preventDefault()}
          >
            <source src={testVideo} type="video/mp4" />
          </video>
        </Box>
        <ChatWithSoranix />
        <RealTimeInsights />
        <AiPoweredTools />
        <AiAgents />
      </Box>
    </Container>
  );
};

export default SoranixAiSection;

const ChatWithSoranix = () => {
  const chatFeatures = [
    {
      id: 1,
      title: "Ai powered summaries",
      desc: "Get a quick overview of your finances with Soranix AI, a smart assistant that learns and adapts to your unique financial journey.",
    },
    {
      id: 2,
      title: "Ai tools",
      desc: "Get a quick overview of your finances with Soranix AI, a smart assistant that learns and adapts to your unique financial journey.",
    },
    {
      id: 3,
      title: "Ai tools tools",
      desc: "Get a quick overview of your finances with Soranix AI, a smart assistant that learns and adapts to your unique financial journey.",
    },
  ];

  return (
    <Box>
      <FeatureIntroGrid
        title={
          <Text fz={"h2"} lh={"h1"} c={"dimmed"} fw={600} maw={500}>
            <Text inherit span c={"dark"}>
              Start a conversation about your finances.
            </Text>{" "}
            From tracking spending to planning investments, Soranix AI is here
            to guide you.
          </Text>
        }
      />
      <SimpleGrid
        cols={{ base: 1, xs: 1, sm: 2, md: 2 }}
        className={styles.ai_grid}
      >
        <Box className={styles.ai_vector_search_display}>
          <Box className={styles.ai_chat_text_box}>
            <Title order={3} fw={"bold"}>Vector Search</Title>
            <Text>
            
              Use natural language to find answers and search through your financial data faster than ever before.
            </Text>
          </Box>
        </Box>
        <Box className={styles.ai_chat_display}></Box>
      </SimpleGrid>
      <Divider />
    </Box>
  );
};

const RealTimeInsights = () => {
  return (
    <Box>
      <FeatureIntroGrid
        title={
          <Text fz={"h2"} lh={"h1"} c={"dimmed"} fw={600} maw={500}>
            <Text inherit span c={"dark"}>
              Stay ahead with real-time AI actionable insights
            </Text>{" "}
            Get alerts on spending, budgets, and investments, plus actions to
            keep you on track
          </Text>
        }
      />
    </Box>
  );
};

const AiPoweredTools = () => {
  return (
    <Box>
      <Title order={2} fw={500}>
        Let AI do your financial heavy lifting using tools
      </Title>
    </Box>
  );
};

const AiAgents = () => {
  return (
    <Box w={"100%"}>
      <Title order={2} fw={500}>
        Build custom AI agents for your finances
      </Title>
    </Box>
  );
};


const FeatureIntroGrid = ({title}) => {

  return (
    <Box className={styles.ai_grid}>
      <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }} >
        <Box className={styles.ai_text_cont}>{title}</Box>
      </SimpleGrid>
      <Divider />
    </Box>
  );
}