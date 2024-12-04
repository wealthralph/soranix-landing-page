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
  Skeleton,
  Space,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { testVideo } from "../../../assets/images";
import styles from "./SoranixAiSection.module.css";
import { useEffect, useRef, useState } from "react";
import MatrixRainCanvas from "../../../components/matrixRain/MatrixRain";
import { IconPlus, IconSearch } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { AnimatePresence, motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { chatQuestions, query } from "./data";
import AiChatInput from "../../../components/AiChatInput/AiChatInput";
import IPhoneMockup from "../../../components/iphoneMockup/IphoneMockup";
import InsightAlertScreen from "../../../components/mockupScreens/insightScreen/InsightAlertScreen";

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
        <AiPulse />
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
              Ask questions across your data
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

const AiPulse = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const accordionData = [
    {
      id: "1",
      title: "Real-Time Ai Alerts ",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
      display: RealTimeAiInsights,
    },
    {
      id: "2",
      title: "Real-time aerts",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
      display: RealTimeAiInsights,
    },
    {
      id: "3",
      title: "Real-time alers",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
      display: RealTimeAiInsights,
    },
    {
      id: "4",
      title: "Real-time lers",
      content:
        "Get alerts on spending, budgets, and investments, plus actions to keep you on track",
      display: RealTimeAiInsights,
    },
  ];

  const [value, setValue] = useState(accordionData[0].id);

  const Display = accordionData.find((item) => item.id === value)?.display;
  const selectedId = accordionData.find((item) => item.id === value)?.id;

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
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
          order={{ base: 2, sm: 2, md: 1 }}
        >
          <Stack justify="center" align="center" h={"100%"}>
            <Box maw={500} w={"100%"}>
              <Accordion
                defaultValue={accordionData[0]?.id}
                variant={isMobile ? "default" : "separated"}
                value={value}
                onChange={setValue}
              >
                {accordionData.map((item) => (
                  <Accordion.Item key={item.id} value={item.id}>
                    <Accordion.Control>{item.title}</Accordion.Control>
                    <Accordion.Panel>{item.content}</Accordion.Panel>
                  </Accordion.Item>
                ))}
              </Accordion>
            </Box>
          </Stack>
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
          order={{ base: 1, sm: 1, md: 2 }}
          h={500}
        >
          <AnimatePresence mode="wait">
            <BoxMotion
              key={selectedId ? selectedId : " " }
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              h={'100%'}
            >
              <Display />
            </BoxMotion>
          </AnimatePresence>
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
      <Stack gap={0}>
        {query[queryIndex]?.transactions?.map((txn, index) => (
          <>
            <BoxMotion
              key={txn.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay: index * 0.1,
              }}
              p={"xs"}
            >
              <Text size="sm">
                {txn.date}: {txn.merchant} - ${txn.amount} ({txn.category})
              </Text>
            </BoxMotion>
            <Divider />
          </>
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
  const promptRef = useRef(null);
  const humanTextRef = useRef(null);
  const aiTextRef = useRef(null);
  const loadingRef = useRef(null);
  const [isRefReady, setIsRefReady] = useState(false);

  const renderQuestions = chatQuestions.map((i) => (
    <BoxMotion
      whileHover={{ scale: 1.04 }}
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
      <Marquee speed={25} direction="right">
        {renderQuestions}
      </Marquee>
      <Marquee>{renderQuestions}</Marquee>
      <Marquee speed={25} direction="right">
        {renderQuestions}
      </Marquee>
    </Stack>
  );

  const agentView = (
    <Box className={styles.agent_view_wrapper}>
      {/* Message display */}
      <Box className={styles.agent_view_message_display}>
        {/* human message */}
        {selectedQuestion && (
          <Text
            p={"xs"}
            size="sm"
            component="span"
            ref={humanTextRef}
            className={styles.text_bubble}
          >
            {selectedQuestion.question}
          </Text>
        )}

        {/* loading */}
        <Box maw={400} w={"100%"} ref={loadingRef}>
          <Skeleton height={8} radius="xl" />
          <Skeleton height={8} mt={6} radius="xl" />
        </Box>

        {/* Ai message */}
        {selectedQuestion && (
          <Text p={"xs"} size="sm" component="span" ref={aiTextRef}></Text>
        )}
      </Box>
      <Box className={styles.agent_view_chat}>
        <AiChatInput
          prompt={selectedQuestion ? selectedQuestion.question : " "}
          promptRef={promptRef}
          onMount={() => setIsRefReady(true)} // Notify readiness
        />
      </Box>
    </Box>
  );

  useEffect(() => {
    setIsRefReady(false);
  }, [selectedQuestion]);

  useGSAP(() => {
    if (!isRefReady || !selectedQuestion?.question) return; // Ensure readiness and a selected question

    gsap.set([humanTextRef.current, aiTextRef.current, loadingRef.current], {
      visibility: "hidden",
      display: "none",
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({ onComplete: () => setSelectedQuestion(null) });

    tl.to(promptRef.current, {
      delay: 0.4,
      duration: 3,
      text: {
        value: selectedQuestion.question,
        delimiter: "",
      },
    });

    tl.to(promptRef.current, {
      delay: 0.5,
      visibility: "hidden",
      display: "none",
    });

    tl.to(humanTextRef.current, {
      opacity: 1,
      visibility: "visible",
      display: "block",
      y: 0,
      ease: "power1.inOut",
    });

    tl.to(loadingRef.current, {
      opacity: 1,
      visibility: "visible",
      display: "block",
      y: 0,
      ease: "power1.inOut",
      delay: 0.5,
    });

    tl.to(loadingRef.current, {
      opacity: 0,
      visibility: "hidden",
      y: -20,
      ease: "power1.inOut",
      display: "none",
      delay: 1,
    });

    tl.to(aiTextRef.current, {
      opacity: 1,
      visibility: "visible",
      y: 0,
      ease: "power1.inOut",
      display: "block",
    });

    tl.to(aiTextRef.current, {
      display: "block",
      delay: 0.5,
      duration: 4,
      text: {
        value: selectedQuestion.agentResponse,
        delimiter: "",
      },
      y: 0,
    });
    tl.add(() => {}, "+=3"); // Adds a 3-second gap
  }, [isRefReady, selectedQuestion?.question]);

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

const RealTimeAiInsights = () => {
  return (
    <Box h={"100%"} style={{ overflow: "hidden" }} pos={"relative"}>
      <InsightAlertScreen/>
    </Box>
  );
};
