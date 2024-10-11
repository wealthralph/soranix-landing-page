import { Carousel } from "@mantine/carousel";
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
  NumberFormatter,
  Paper,
  SegmentedControl,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import styles from "./PaymentSection.module.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const BoxMotion = motion.create(Box, { forwardMotionProps: true });

const PaymentSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  const [value, setValue] = useState("send");

  return (
    <Container size={"lg"} my={50}>
      <Stack gap={"xl"}>
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
                size={80}
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
                size={80}
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

        <Box>
          {/* <Divider /> */}
          <Divider />
          <Grid py={"xs"}>
            <Grid.Col h={400} span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Simple and intuitive interface
                  </Title>
                  <Text c={"dimmed"}>
                    Navigate payments with an intuitive, user-friendly interface
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col
              h={400}
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
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Configure Payments Your Way{" "}
                  </Title>
                  <Text c={"dimmed"}>
                    Whether you need to automate recurring payments or schedule
                    transfers our flexible configurations have you covered.{" "}
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider />

          <Divider />
        </Box>
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
        <Grid.Col span={6} className={"box"}>
          <Box
            className={styles.send_transfer_ui_wrapper}
            h={400}
          >
            <SendUiAnimation />
          </Box>
        </Grid.Col>
        <Grid.Col span={6} className={"box"}>
          <Paper h={400} bg={"gray"} radius={"md"}></Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const Receive = () => {
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
        <Grid.Col span={4} className={"box"}>
          <Paper h={400} bg={"gray"}></Paper>
        </Grid.Col>
        <Grid.Col span={4} className={"box"}>
          <Paper h={400} bg={"gray"}></Paper>
        </Grid.Col>
        <Grid.Col span={4} className={"box"}>
          <Paper h={400} bg={"gray"}></Paper>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const SendUiAnimation = () => {



  return (
    <Stack align="center" justify="center" p={'md'} w={'100%'} h={'100%'}>
    {/* <Box className={styles.send_transfer_ui_blur}/> */}

    <Box>
      <Title >Just hit send</Title>
    </Box>
 
    <Box className={styles.send_transfer_ui_cont}>
      <Stack p={"md"}>
      hel
      </Stack>
    </Box>
    </Stack>
  );
};
