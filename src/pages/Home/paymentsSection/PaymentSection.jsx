import { Carousel } from "@mantine/carousel";
import {
  Avatar,
  BackgroundImage,
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
  isLightColor,
  NumberFormatter,
  NumberInput,
  Paper,
  Pill,
  PillsInput,
  Progress,
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
} from "../../../assets/images";
import { IconArrowRight } from "@tabler/icons-react";

const BoxMotion = motion.create(Box, { forwardMotionProps: true });

// Todo Provide Graphics to the Send and Receive Cards

const PaymentSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const [value, setValue] = useState("send");

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
            <Box p={"xl"}>
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
            className={styles.receive_notification_ui}
          >
            <Box p={"xl"}>
              <Text
                c={isLightColor("blue") ? "black" : "white"}
                ff={"monospace"}
              >
                Request Links
              </Text>
              <Title
                c={"white"}
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Send Money to anyone anywhere anytime .
              </Title>
            </Box>
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
            src={sendImage}
          ></BackgroundImage>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const SendConfigurationGraphics = () => {
  return (
    <Stack p={"xs"} gap={'xs'}>
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
                <Text fw={500}>
                @BlackJames
                </Text>
              </Group>
            </Box>
          </Group>
        </Box>
      </Box>
      <Box className={styles.send_configuration_card_outer}> 
        <Box className={styles.send_configuration_card_inner}>
            <Title fw={500} order={5}>Schedule Payment</Title> 
            <Switch checked/>
        </Box>
      </Box>
      <Box w={'100%'}>
        <Image src={september}/>
      </Box>
    </Stack>
  );
};
