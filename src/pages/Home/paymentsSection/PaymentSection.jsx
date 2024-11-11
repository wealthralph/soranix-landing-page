import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Avatar,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Center,
  CheckIcon,
  ColorSwatch,
  Container,
  Divider,
  em,
  Flex,
  Grid,
  Group,
  Image,
  isLightColor,
  NumberFormatter,
  NumberInput,
  Paper,
  Pill,
  PillsInput,
  Progress,
  rem,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Switch,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./PaymentSection.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  iphoneMockup,
  logoWhite,
  NG,
  sendImage,
  september,
  womanWithPhone,
} from "../../../assets/images";
import {
  IconAnalyze,
  IconArrowRight,
  IconChartAreaLine,
  IconImageInPicture,
  IconPhoto,
} from "@tabler/icons-react";

const BoxMotion = motion.create(Box, { forwardMotionProps: true });

// Todo Provide Graphics to the Send and Receive Cards

const PaymentSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const [value, setValue] = useState("receive");

  return (
    <Container fluid my={50} p={0} w={"100%"}>
      <Stack gap={"xl"} w={"100%"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Payments
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Feel the thrill of, faster and better payment{" "}
              </Title>
            </Box>
            <Box>
              <Text c={"dimmed"}>
                <Text
                  span
                  tt={"capitalize"}
                  fz={"lg"}
                  fw={"bold"}
                  c={"var(--mantine-color-text)"}
                >
                  Move your money.{" "}
                </Text>{" "}
                Payments just got an upgrade! Enjoy the thrill of quicker,
                better transactions that keep your money moving where it needs
                to go!
              </Text>
            </Box>
          </Stack>
        </Box>

        <Stack gap={"xl"}>
          <Flex justify={"center"} gap={"xl"}>
            <Box onClick={() => setValue("send")}>
              <Title
                c={
                  value === "send"
                    ? "var(--mantine-color-text-default)"
                    : "dimmed"
                }
                fz={{ base: 45, xs: "h1", sm: "h1", md: 80 }}
              >
                Send
              </Title>
            </Box>
            <Box onClick={() => setValue("receive")}>
              <Title
                c={
                  value === "receive"
                    ? "var(--mantine-color-text-default)"
                    : "dimmed"
                }
                fz={{ base: 45, xs: "h1", sm: "h1", md: 80 }}
              >
                Receive
              </Title>
            </Box>
          </Flex>
          <AnimatePresence mode="wait">
            <BoxMotion
              key={value ? value : ""}
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -200, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {value === "send" && <Send />}
              {value === "receive" && <Receive />}
            </BoxMotion>
          </AnimatePresence>
        </Stack>
      </Stack>
    </Container>
  );
};

export default PaymentSection;

const Send = () => {
  const containerRef = useRef();

  useGSAP(
    () => {
      gsap.from(".box", {
        y: 50,
        opacity: 0,
        stagger: 0.4,
        duration: 0.5,
        ease: "power1.inOut",
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <Box>
      <Grid ref={containerRef}>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 5, lg: 5 }}
          className={"box"}
        >
          <Paper
            withBorder
            className={styles.send_transfer}
            h={600}
            radius={"lg"}
          >
            <Box p={{ base: "lg", md: "xl" }}>
              <Text ff={"monospace"}>Transfer</Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Send Money to anyone anywhere anytime.
              </Title>
            </Box>
          </Paper>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 3 }}
          className={"box"}
          visibleFrom="md"
        >
          <BackgroundImage
            bgp={"90%"}
            h={600}
            radius={"lg"}
            src={sendImage}
          ></BackgroundImage>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}
          className={"box"}
        >
          <Paper
            h={600}
            radius={"lg"}
            className={styles.receive_configurations}
            withBorder
          >
            <Stack>
              <Box p={"xl"} pb={0}>
                <Text ff={"monospace"}>Configurations</Text>
                <Title
                  tt={"capitalize"}
                  fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
                >
                  Make Payments Flexible with configurations.
                </Title>
              </Box>
              <SendConfigurationGraphics />
            </Stack>
          </Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const Receive = () => {
  const containerRef = useRef();
  const mockupRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".box", {
        y: 50,
        opacity: 0,
        stagger: 0.4,
        duration: 0.5,
        ease: "power1.inOut",
        delay: 0.2,
      });
    },
    { scope: containerRef }
  );

  return (
    <Box>
      <Grid ref={containerRef}>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 5, lg: 5 }}
          className={"box"}
        >
          <Paper
            radius={"lg"}
            h={600}
            className={styles.receive_request_link_ui}
          >
            <Box p={{ base: "lg", md: "xl" }} pb={0}>
              <Text ff={"monospace"}>Request Links</Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Customize How You Get Paid to Suit Your Style
              </Title>
            </Box>
            <RequestLinksGraphicsDisplay />
          </Paper>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 4, lg: 4 }}
          className={"box"}
        >
          <Paper radius={"lg"} h={600} bg={"gray"}></Paper>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 3, lg: 3 }}
          className={"box"}
        >
          <BackgroundImage
            bgp={"90%"}
            h={600}
            radius={"lg"}
            src={womanWithPhone}
            visibleFrom="md"
          ></BackgroundImage>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

// Split payments, recurring payments, batch payemnts and scheduled payments

const SendConfigurationGraphics = () => {
  return (
    <Stack p={"xs"} gap={"xs"}>
      <Box className={styles.send_configuration_card_outer}>
        <Box className={styles.send_configuration_card_inner}>
          <Box>
            <Title order={6} fw={500}>
              Main Acc.
            </Title>
            <Group>
              <Text fz={"xs"}>0002142630</Text>
            </Group>
          </Box>
          <Group align="end">
            <Box>
              <Text fz={"xs"} c={"dimmed"}>
                Sending
              </Text>
              <Group gap={"xs"}>
                <Text fw={500}>
                  <NumberFormatter
                    value={30000}
                    thousandSeparator
                    prefix="₦
"
                  />
                </Text>
                <Avatar size={"xs"} src={NG} />
              </Group>
            </Box>
            <IconArrowRight size={18} color="var(--mantine-color-dimmed)" />
            <Box>
              <Text fz={"xs"} c={"dimmed"}>
                Reciepient
              </Text>
              <Group gap={"xs"}>
                <Avatar size={"xs"} src={avatar1} />
                <Text fw={500}>@BlackJames</Text>
              </Group>
            </Box>
          </Group>
        </Box>
      </Box>
      <Box className={styles.send_configuration_card_outer}>
        <Box className={styles.send_configuration_card_inner}>
          <Title fw={500} order={5}>
            Schedule Payment
          </Title>
          <Switch checked />
        </Box>
      </Box>
      <Box w={"100%"}>
        <Image src={september} />
      </Box>
    </Stack>
  );
};

const RequestLinksGraphicsDisplay = () => {
  const colors = [
    "var(--mantine-color-blue-3)",
    "var(--mantine-color-pink-3)",
    "var(--mantine-color-teal-3)",
    "var(--mantine-color-grape-3)",
  ];

  const [checked, setChecked] = useState(colors[0]);

  return (
    <Stack gap={"xs"} h={"100%"}>
      <Group justify="center" p={"xs"}>
        {colors.map((i) => (
          <ColorSwatch
            onClick={() => setChecked(i)}
            style={{ color: "#fff", cursor: "pointer" }}
            withShadow
            color={i}
            key={i}
            size={30}
          >
            {checked === i && (
              <CheckIcon style={{ width: rem(12), height: rem(12) }} />
            )}
          </ColorSwatch>
        ))}
        {/* Colors */}
        <ActionIcon radius={"xl"} variant="light" color="gray.0" size={30}>
          <IconPhoto size={20} />
        </ActionIcon>
      </Group>
      {/* Browser */}

      <Box pos={"relative"} className={styles.receive_ui_browser}>
        <Box className={styles.receive_ui_browser_inner}>
          {/* Browser header */}
          <Group
            bg={"white"}
            p={5}
            justify="space-between"
            style={{
              borderBottom: "thin solid var(--mantine-color-default-border)",
              borderRadius:
                "var(--mantine-radius-md)  var(--mantine-radius-md) 0 0",
            }}
          >
            <Box>
              <svg
                width="52"
                height="12"
                viewBox="0 0 52 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="6"
                  cy="6"
                  r="4"
                  fill="#ED6A5E"
                  stroke="#CF594E"
                  strokeWidth="0.5"
                ></circle>
                <circle
                  cx="20"
                  cy="6"
                  r="4"
                  fill="#F4BD50"
                  stroke="#D79F3E"
                  strokeWidth="0.5"
                ></circle>
                <circle
                  cx="35"
                  cy="6"
                  r="4"
                  fill="#61C355"
                  stroke="#52A63D"
                  strokeWidth="0.5"
                ></circle>
              </svg>
            </Box>
            <Paper bg={"gray.0"} radius={"md"} py={3} w={"50%"}>
              <Center>
                <Text fw={500} fz={11}>
                  blackJames.soranix.com
                </Text>
              </Center>
            </Paper>
            <IconChartAreaLine size={16} color="var(--mantine-color-dimmed)" />
          </Group>
          {/* Browser body */}
          <Box h={"100%"} bg={"white"}>
            <Stack align="center" h={"100%"} p={"lg"}>
              <Paper
                radius={"md"}
                withBorder
                h={"300px"}
                w={"85%"}
                style={{
      
                  backgroundImage: `linear-gradient(to bottom, ${checked} , #fff 40%  )`,
                }}
              >
                <Box
                  h={"30%"}
                  // make background a linear gradient that goes from top to bottom with the color of the checked color
                ></Box>
              </Paper>
            </Stack>
          </Box>
        </Box>
      </Box>
    </Stack>
  );
};
