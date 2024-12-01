import {
  Accordion,
  Box,
  Button,
  Container,
  Divider,
  em,
  Flex,
  Grid,
  Group,
  Kbd,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { testVideo } from "../../../assets/images";
import styles from "./SoranixAiSection.module.css";
import { useEffect, useState } from "react";
import MatrixRainCanvas from "../../../components/matrixRain/MatrixRain";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { AnimatePresence, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { chatQuestions, query } from "./data";
import AiChatInput from "../../../components/AiChatInput/AiChatInput";

gsap.registerPlugin(TextPlugin, useGSAP);

const BoxMotion = motion.create(Box, { forwardMotionProps: true });
const TextMotion = motion.create(Text, { forwardMotionProps: true });

const SoranixAiSection = () => {
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
        <AiCreate />
      </Box>
    </Container>
  );
};

export default SoranixAiSection;

const ChatWithSoranix = () => {
  return (
    <Box>
      <FeatureIntroGrid
        title={
          <Text fz={"h2"} lh={"h1"} c={"dimmed"} fw={600} maw={500}>
            <Text inherit span c={"dark"}>
              Start a conversation about your finances.
            </Text>{" "}
            From tracking spending to planning investments.
          </Text>
        }
      />
      <SimpleGrid
        cols={{ base: 1, xs: 1, sm: 2, md: 2 }}
        className={styles.ai_grid}
        m={0}
        spacing={0}
      >
        <Box className={styles.ai_vector_search_display}>
          <SemanticSearchDisplay />
          <Box className={styles.ai_chat_text_box}>
            <Title order={3} fw={"bold"}>
              Semantic Search
            </Title>
            <Text>
              Use natural language to find answers and search through your
              financial data faster than ever before.
            </Text>
          </Box>
        </Box>
        <Box className={styles.ai_chat_display}>
          <SoranixAiChatDisplay />
          <Box className={styles.ai_chat_text_box}>
            <Title order={3} fw={"bold"}>
              {/* Chat with Soranix AI */}
              Ask questions across all your data
            </Title>
            <Text>
              Soranix AI leverages your financial data, web knowledge and
              advanced AI to deliver smarter, tailored answers to all your money
              questions.
            </Text>
          </Box>
        </Box>
      </SimpleGrid>
      <Divider />
    </Box>
  );
};

const RealTimeInsights = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const accordionData = [
    {
      id: 1,
      title: "Real-Time Ai Insights ",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
    },
    {
      id: 2,
      title: "Real-time aerts",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
    },
    {
      id: 3,
      title: "Real-time alers",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
    },
  ];

  return (
    <Box>
      <FeatureIntroGrid
        title={
          <Text fz={"h2"} lh={"h1"} c={"dimmed"} fw={600} maw={500}>
            <Text inherit span c={"dark"}>
              Keep a pulse on your money with real-time AI actionable insights
            </Text>{" "}
            Get alerts, summaries, recommendations and more.
          </Text>
        }
      />
      <Grid className={styles.ai_grid} gutter={0}>
        <Grid.Col span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
          <Box className={styles.ai_accordion_container}>
            <Box maw={500} w={"100%"}>
              <Accordion>
                {accordionData.map((item) => (
                  <Accordion.Item key={item.id} value={item.title}>
                    <Accordion.Control>{item.title}</Accordion.Control>
                    <Accordion.Panel>{item.content}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col
          styles={{
            col: {
              borderLeft: !isMobile
                ? `thin solid var(--mantine-color-default-border)`
                : "none",
              borderTop: !isMobile
                ? "none"
                : `thin solid var(--mantine-color-default-border)`,
            },
          }}
          span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
        >
          <Box
            w={"100%"}
            h={"100%"}
            className={styles.ai_chat_features_display}
          ></Box>
        </Grid.Col>
      </Grid>
      <Divider />
    </Box>
  );
};

const AiCreate = () => {
  const features = [
    {
      id: 1,
      title: "Create Workflows",
    },
    {
      id: 2,
      title: "Create Budgets",
    },
    {
      id: 3,
      title: "Make Transfers",
    },
  ];

  const [select, setSelected] = useState(features[0]);

  return (
    <Box>
      <FeatureIntroGrid
        title={
          <Text fz={"h2"} lh={"h1"} c={"dimmed"} fw={600} maw={500}>
            <Text inherit span c={"dark"}>
              Create smarter, faster, and with confidence.
            </Text>{" "}
            Soranix AI turns your ideas into actions.
          </Text>
        }
      />
      <Box h={600} className={styles.ai_grid} pos={"relative"} pt={"xl"}>
        <Group justify="center">
          {features.map((i) => (
            <Button
              variant="light"
              color="gray"
              size="compact-xs"
              onClick={() => setSelected(i)}
              key={i.id}
            >
              {i.title}
            </Button>
          ))}
        </Group>
        <Space h={20} />
        <Box pos={"relative"} h={"100%"} px={"md"}>
          <Paper withBorder shadow="xs" h={"100%"} radius={"lg"}>
            {select.title}
          </Paper>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
};

const FeatureIntroGrid = ({ title }) => {
  return (
    <Box className={styles.ai_grid}>
      <SimpleGrid spacing={0} cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
        <Box className={styles.ai_text_cont}>{title}</Box>
      </SimpleGrid>
      <Divider />
    </Box>
  );
};

const SemanticSearchDisplay = () => {
  const quickActions = [
    "Create New Bank Account",
    "Create New Virtual Card",
    "Create Transfer",
    "Create Budget",
    "Create Workflow",
  ];

  const [recent, setRecent] = useState([]);
  const [queryIndex, setQueryIndex] = useState(0);
  const [showView, setShowView] = useState("default");
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let fullText = query[queryIndex]?.title || "";

    function updateTransactions() {
      //check if all query already exists in recent
      // const querytitleList = query.map(i => i.title)

      // const testing =  querytitleList.some(item => recent.includes(item))
      // console.log(testing, "testing")

      if (recent.length >= query.length) {
        setRecent([]);
      }

      // let's check if the query already exist in the recent array
      const alreadyExist = recent.find((i) => i === query[queryIndex].title);

      if (!alreadyExist)
        return setRecent((prev) => [
          query[queryIndex].title,
          ...prev,
          // { type: "search", command: query[queryIndex].title },
        ]);
    }

    if (isTyping) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => fullText.substring(0, prev.length + 1));
      }, 70);
    } else {
      typingTimeout = setTimeout(() => {
        setQueryIndex((prevIndex) => (prevIndex + 1) % query.length);
        setIsTyping(true);
        setDisplayedText("");
        setShowView("default");
      }, 4000);
    }

    if (displayedText === fullText) {
      setShowView("search");
      setIsTyping(false);
      updateTransactions();
    }

    return () => clearTimeout(typingTimeout);
  }, [isTyping, displayedText, queryIndex, query]);

  const searchView = (
    <Box>
      {/* <Text weight="bold">{activeQuery.title}</Text> */}
      <Stack spacing="xs">
        {query[queryIndex]?.transactions?.map((txn) => (
          <Box key={txn.id}>
            <Text size="sm">
              {txn.date}: {txn.merchant} - ${txn.amount} ({txn.category})
            </Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );

  const defaultView = (
    <Box>
      {/* recent search */}
      <Stack gap={"xs"} p={"sm"}>
        <Text c={"dimmed"} size="xs">
          Recent
        </Text>
        <Stack>
          {recent.map((i) => (
            <Flex key={i}>
              <Group align="center">
                <ThemeIcon
                  variant="light"
                  color="gray"
                  radius={"sm"}
                  size={"xs"}
                >
                  <IconSearch size={12} />
                  {/* {i.type === "search" ? (
                  ) : (
                    <IconPlus size={12} />
                  )} */}
                </ThemeIcon>
                <Text size="sm">{i}</Text>
              </Group>
            </Flex>
          ))}
        </Stack>
      </Stack>
      <Divider color="gray.3" />
      <Stack gap={"xs"} p={"sm"}>
        <Text c={"dimmed"} size="xs">
          Quick Actions
        </Text>
        <Stack gap={"sm"}>
          {quickActions.map((i) => (
            <Flex key={i}>
              <Group align="center">
                <ThemeIcon variant="light" color="gray" radius={"sm"} size={16}>
                  <IconPlus size={12} />
                </ThemeIcon>
                <Text size="sm">{i}</Text>
              </Group>
            </Flex>
          ))}
        </Stack>
      </Stack>
    </Box>
  );

  return (
    <Box h={"100%"} pos={"relative"} display={"flex"}>
      <Box className={styles.semantic_canvas_box}>
        <MatrixRainCanvas />
      </Box>
      <Box style={{ zIndex: 1 }} w={"100%"} height={"100%"} px={"xs"} py={"xl"}>
        <Box className={styles.search_box_outer}>
          {/* <Box className={styles.search_box_inner}></Box> */}
          {/* search */}
          <Box className={styles.search_input}>
            <Flex w={"100%"} align={"center"} justify={"space-between"}>
              <Group gap={"sm"}>
                <IconSearch size={16} color="var(--mantine-color-dimmed)" />
                <TextMotion
                  size={"sm"}
                  key={queryIndex}
                  initial={{ opacity: 0, x: -3 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 3 }}
                  transition={{ duration: 1 }}
                  ff={"monospace"}
                >
                  {displayedText}
                </TextMotion>{" "}
              </Group>
              <div dir="ltr">
                <Kbd size="xs">⌘</Kbd>
                <Kbd size="xs">K</Kbd>
              </div>
            </Flex>
          </Box>
          <Divider color="gray.3" />
          {/* search box body */}
          <Box h={"100%"} w={"100%"} style={{ overflow: "hidden" }}>
            <AnimatePresence mode="wait">
              <BoxMotion
                key={showView}
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {showView === "default" ? defaultView : searchView}
              </BoxMotion>
            </AnimatePresence>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const SoranixAiChatDisplay = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const renderQuestions = chatQuestions.map((i) => (
    <BoxMotion
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      key={i.id}
      className={styles.chat_question}
      onClick={() => setSelectedQuestion(i)}
    >
      <Text size="sm">{i.question}</Text>
    </BoxMotion>
  ));

  const questionsView = (
    <Stack className={styles.chat_question_cont}>
      <Marquee>{renderQuestions}</Marquee>
      <Marquee speed={65} direction="right">
        {renderQuestions}
      </Marquee>
      <Marquee>{renderQuestions}</Marquee>
      <Marquee speed={65} direction="right">
        {renderQuestions}
      </Marquee>
    </Stack>
  );

  const agentView = (
    <Box className={styles.agent_view_wrapper}>
      <Text>{selectedQuestion && selectedQuestion.question}</Text>
      <AiChatInput/>
    </Box>
  );

  useEffect(() => {
    if (!selectedQuestion?.id) return;

    const timeout = setTimeout(() => {
      setSelectedQuestion(null);
    }, 3000);

    return () => clearTimeout(timeout);
  }, [selectedQuestion?.id]);

  return (
    <Box h={"100%"} pos={"relative"} className={styles.chat_question_wrapper}>
      <Stack w={"100%"}>
        <AnimatePresence mode="wait">
          <BoxMotion
            key={selectedQuestion ? selectedQuestion?.id : ""}
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {selectedQuestion ? agentView : questionsView}
          </BoxMotion>
        </AnimatePresence>
      </Stack>
    </Box>
  );
};
