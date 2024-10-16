import { Carousel } from "@mantine/carousel";
import {
  Avatar,
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
  NumberFormatter,
  NumberInput,
  Paper,
  Pill,
  PillsInput,
  Progress,
  SegmentedControl,
  SimpleGrid,
  Stack,
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
} from "../../../assets/images";

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
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
          className={"box"}
        >
          <SendUiAnimation />
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
          className={"box"}
        >
          <Paper h={450} bg={"gray"} radius={"md"}></Paper>
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

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(mockupRef.current, {
        y: 250,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
        delay: 0.2,
      });
      tl.from(".title", {
        y: 50,
        opacity: 0,
        stagger: 0.4,
        duration: 0.5,
        ease: "power1.inOut",
        delay: 0.2,
      });
      // tl.from(".title", {
      //   y: 150,
      //   stagger: 0.4,
      //   duration: 0.3,
      //   ease: "power1.inOut",
      //   delay: 0.2,
      // });
    },
    {
      scope: containerRef,
    }
  );

  return (
    <Box>
      <Grid ref={containerRef}>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
          className={"box"}
        >
          <Box h={450} className={styles.receive_notification_ui}>
            <Stack gap={1} align="center" mt={"md"}>
              <Group align="end" className="title">
                <Title
                  className={`${styles.receive_notification_ui_title} `}
                  fz={42}
                >
                  Receive More{" "}
                </Title>

                <Image
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f4b8/512.webp"
                  h={45}
                />
              </Group>
              <Group align="end" className="title">
                <Title
                  className={`${styles.receive_notification_ui_title} `}
                  fz={42}
                >
                  Stress Less{" "}
                </Title>

                <Image
                  srcSet="https://fonts.gstatic.com/s/e/notoemoji/latest/1f60e/512.webp"
                  h={45}
                />
              </Group>
            </Stack>
            <Box ref={mockupRef} className={styles.iphone_mockup_wrapper}>
              <Box className={styles.iphone_mockup_cont}>
                <Box className={styles.receive_notification_alert_card}>
                  <Group w={'100%'} h={"100%"} align="top" justify="space-between">
                    <Group align="top">

                    <Paper h={'fit-content'} bg={"dark.9"} radius={"md"} p={"sm"}>
                      <Image src={logoWhite} h={20} />
                    </Paper>
                    <Box h={'fit-content'}>
                      <Title c={'dimmed'} order={6}>Account Credited</Title>
                      <Text c={"white"} size="xs"  >Your NGN account has been  Credited</Text>
                    </Box>
                    </Group>
                      <Text size="sm" c={'white'} ff={'text'}>Just Now</Text>
                  </Group>
                </Box>
                <Image src={iphoneMockup} w="auto" />
              </Box>
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col
          span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
          className={"box"}
        >
          <Box h={450} bg={"gray"}></Box>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

const SendUiAnimation = () => {
  const titleRef = useRef(null);
  const sendUi = useRef(null);
  const formRef = useRef(null);
  const avatarRefs = useRef([]);
  // const isInView = useInView(sendUi);

  useGSAP(() => {
    function intro() {
      var tl = gsap.timeline({ defaults: { duration: 0.4 } });
      tl.from(titleRef.current, { opacity: 0, y: 50, delay: 0.3 });
      tl.from(avatarRefs.current, {
        opacity: 0,
        scale: 0.5,
        stagger: 0.2,
        ease: "power1.inOut",
      });
      tl.from("#cursor", { opacity: 0 });
      tl.to("#cursor", { x: -15, y: -100, ease: "power3" });
      tl.fromTo(
        "#cursor",
        { scale: 1, ease: "power3" },
        { scale: 0.8, ease: "power3", duration: 0.2 }
      );
      tl.to("#cursor", { scale: 1, ease: "power3", duration: 0.2 });
      tl.to(avatarRefs.current[0], { scale: 1.3, ease: "power3.in" });
      tl.to(avatarRefs.current, {
        opacity: 0,
        scale: 0.5,
        stagger: 0.1,
        ease: "expo.out",
      });
      tl.to(titleRef.current, { opacity: 0, y: 50, duration: 0.2 });
      tl.to("#cursor", { opacity: 0, duration: 0.2 });
      //  tl.to(sendUi.current, { opacity: 0, display: "none" }, );
      return tl;
    }

    function middle() {
      console.log("Middle animation triggered");

      var tl = gsap.timeline();
      tl.from(formRef.current, {
        display: "block",
        opacity: 0,
        y: 100,
        duration: 0.5,
      });
      tl.from(".inputBox", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        ease: "power1.inOut",
        delay: 0.2,
      });
      tl.to("#cursor", { opacity: 1, ease: "power1.in" });
      tl.to("#cursor", { x: -150, y: 190, ease: "power3" });
      tl.fromTo(
        "#cursor",
        { scale: 1, ease: "power3" },
        { scale: 0.8, ease: "power3", duration: 0.2 }
      );
      tl.to("#cursor", { scale: 1, ease: "power3", duration: 0.2 });
      tl.to("#send_button", { scale: 0.9, ease: "power3.in" }, "-=0.5");
      tl.to("#send_button", {
        scale: 1,
        ease: "expo.out",
      });
      return tl;
    }

    function conclusion() {
      var tl = gsap.timeline();
      //...add animations here...
      return tl;
    }

    // stitch them together in a master timeline...
    var master = gsap.timeline({ repeat: "-1" });
    master.add(intro()).add(middle(), ">"); //with a gap of 2 seconds
    // .add(conclusion());
  });

  const avatars = [avatar1, avatar2, avatar3, avatar4].map((i, index) => (
    <Box
      key={i}
      className={styles.avatar_box}
      ref={(el) => (avatarRefs.current[index] = el)}
    >
      <img alt="avatar" className={styles.avatar} src={i} size={"lg"} />
    </Box>
  ));

  return (
    <Box className={styles.send_transfer_ui_wrapper} h={450}>
      <Box ref={sendUi} className={styles.send_transfer_intro}>
        {avatars}
        <Title
          ref={titleRef}
          ta={"center"}
          className={styles.send_transfer_ui_title}
          fz={50}
        >
          Send Money, <br /> Anytime, Anywhere{" "}
        </Title>
        <Box ref={formRef} className={styles.send_transfer_ui_form_wrapper}>
          <Box className={styles.send_transfer_ui_form_cont}>
            <Flex justify={"space-between"} w={"100%"} align={"center"}>
              <Title order={4} fw={"normal"}>
                Transfer
              </Title>
              <Group gap={"xs"}>
                <Text
                  styles={{
                    root: {
                      whiteSpace: "nowrap",
                    },
                  }}
                  c={"dimmed"}
                >
                  Step 2/3
                </Text>
                <Box className={styles.progress}></Box>
                <Box className={styles.progress}></Box>
                <Box className={styles.progress}></Box>
              </Group>
            </Flex>
            <Box className={"inputBox"}>
              <PillsInput
                label="Select Acount"
                labelProps={{
                  fz: "sm",
                  fw: "normal",
                  required: true,
                }}
                size="md"
                radius={"md"}
              >
                <Pill.Group>
                  <Text>Main Account</Text>
                </Pill.Group>
              </PillsInput>
            </Box>
            <Box className={"inputBox"}>
              <PillsInput
                label="Beneficiary"
                labelProps={{
                  fz: "sm",
                  fw: "normal",
                  required: true,
                }}
                size="md"
                radius={"md"}
              >
                <Pill.Group>
                  <Paper>
                    <Group gap={"xs"}>
                      <Avatar size={"sm"} src={avatar1} />
                      <Text>Solomon Odiji</Text>
                    </Group>
                  </Paper>
                </Pill.Group>
              </PillsInput>
            </Box>
            <Box className={"inputBox"}>
              <NumberInput
                variant="default"
                labelProps={{
                  fz: "sm",
                  fw: "normal",
                  required: true,
                }}
                radius={"md"}
                label="Amount"
                placeholder="Amount"
                prefix="₦"
                value={10000}
                defaultValue={100}
                size="md"
                mb="md"
                readOnly
                thousandSeparator
              />
            </Box>
            <Box className="inputBox">
              <button id="send_button" className={styles.send_button}>
                Send
              </button>
            </Box>
          </Box>
        </Box>
      </Box>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="48"
        height="48"
        viewBox="0 0 48 48"
        className={styles.send_transfer_ui_icon}
        id="cursor"
      >
        <linearGradient
          id="u9FaNT0xu2h8jTaSkW4MAa_WbSA1BjDR1gY_gr1"
          x1="1.018"
          x2="17.884"
          y1="-10.059"
          y2="-47.631"
          gradientTransform="rotate(-24.536 130.033 -37.036)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#962aff"></stop>
          <stop offset=".781" stopColor="#be85ff"></stop>
          <stop offset="1" stopColor="#c99fff"></stop>
        </linearGradient>
        <path
          fill="url(#u9FaNT0xu2h8jTaSkW4MAa_WbSA1BjDR1gY_gr1)"
          d="M36.194,24.693L13.835,4.878c-1.274-1.129-3.282-0.212-3.263,1.49l0.325,29.866	c0.018,1.688,2.019,2.566,3.274,1.437l5.893-5.299l4.377,9.588c0.45,0.986,1.614,1.42,2.6,0.97l3.57-1.63	c0.986-0.45,1.42-1.614,0.97-2.6L27.2,29.108l7.938-1.001C36.812,27.897,37.456,25.812,36.194,24.693z"
        ></path>
        <g opacity=".1">
          <path
            fill="#821ff1"
            d="M17.176,3.832C16.501,4.137,15.991,4.805,16,5.675l0.331,30.445c0.012,1.132,0.9,1.892,1.869,1.962 l0.452-0.406c0.187-0.168,0.484-0.107,0.588,0.122l0.025,0.055c0.139-0.075,0.277-0.153,0.403-0.267l6.007-5.402l4.462,9.774 c0.459,1.005,1.645,1.448,2.65,0.989l0.924-0.422c1.079-1.41,1.384-3.341,0.595-5.069l-2.474-5.419 c-0.104-0.229,0.043-0.493,0.292-0.525l1.926-0.243l-1.102-2.413l6.526-0.823c0.738-1.822,0.428-4.058-1.294-5.585L17.176,3.832z"
          ></path>
          <path
            fill="#821ff1"
            d="M25.262,46c0.633,0.126,1.29,0.131,1.941,0H25.262z"
          ></path>
        </g>
        <path
          fill="#821ff1"
          d="M16.559,4.288C16.222,4.639,15.994,5.108,16,5.675l0.331,30.445	c0.009,0.784,0.445,1.382,1.03,1.708l1.562-1.405c0.181-0.163,0.468-0.103,0.569,0.118l0.389,0.853l5.795-5.211l4.462,9.774	c0.332,0.727,1.045,1.153,1.794,1.163c1.828-1.083,2.596-3.377,1.693-5.354l-2.905-6.363c-0.101-0.221,0.042-0.477,0.283-0.507	l2.723-0.343l-0.775-1.698l5.65-0.712c0.848-1.606,0.674-3.726-0.915-5.134L16.559,4.288z"
          opacity=".2"
        ></path>
        <path
          fill="#821ff1"
          d="M16.149,4.927C16.06,5.156,15.997,5.401,16,5.675l0.331,30.445	c0.005,0.486,0.183,0.896,0.448,1.223l2.414-2.171c0.175-0.157,0.452-0.1,0.549,0.114l0.723,1.583l5.21-4.685l4.462,9.774	c0.169,0.37,0.437,0.661,0.757,0.862l0.336-0.154c1.739-0.794,2.505-2.848,1.711-4.587l-3.335-7.306	c-0.097-0.214,0.04-0.46,0.273-0.49l3.519-0.444l-0.449-0.983l4.688-0.591c1.018-1.348,1.02-3.391-0.45-4.694L16.149,4.927z"
          opacity=".3"
        ></path>
        <path
          fill="#821ff1"
          d="M16.001,5.798l0.33,30.322c0.002,0.192,0.037,0.37,0.086,0.54l3.047-2.74	c0.168-0.151,0.436-0.096,0.53,0.11l1.056,2.313l4.626-4.16l4.462,9.774c0.05,0.109,0.111,0.208,0.177,0.303l0.605-0.276	c1.362-0.622,1.963-2.231,1.341-3.593l-3.766-8.25c-0.094-0.206,0.039-0.444,0.263-0.472l4.316-0.544l-0.123-0.269l3.451-0.435	c1.388-0.924,1.697-3.041,0.289-4.289L16.001,5.798z"
          opacity=".4"
        ></path>
        <path
          fill="#821ff1"
          d="M31.579,38.701L27.2,29.108l7.938-1c1.674-0.211,2.318-2.296,1.056-3.415L13.836,4.879	l0.356,32.773l5.871-5.279l2.501,5.479l2.361-2.123l3.085,6.759l2.598-1.186C31.595,40.851,32.029,39.687,31.579,38.701z"
          opacity=".05"
        ></path>
        <path
          fill="#821ff1"
          d="M20.063,32.372l2.315,5.071l2.695-2.424l3.328,7.29l2.208-1.008	c0.986-0.45,1.42-1.614,0.97-2.6L27.2,29.108l7.938-1c1.674-0.211,2.318-2.296,1.056-3.415L14.269,5.263l0.348,32.007L20.063,32.372	z"
          opacity=".1"
        ></path>
        <path
          fill="#821ff1"
          d="M20.063,32.372l2.128,4.662l3.029-2.724l3.57,7.821l1.819-0.83	c0.986-0.45,1.42-1.614,0.97-2.6L27.2,29.108l7.938-1c1.674-0.211,2.318-2.296,1.056-3.415L14.702,5.646l0.339,31.242L20.063,32.372	z"
          opacity=".15"
        ></path>
        <path
          fill="#821ff1"
          d="M20.063,32.372l1.942,4.254l3.363-3.024l3.813,8.352l1.429-0.652	c0.986-0.45,1.42-1.614,0.97-2.6L27.2,29.108l7.938-1c1.674-0.211,2.318-2.296,1.056-3.415L15.134,6.03l0.331,30.477L20.063,32.372z"
          opacity=".2"
        ></path>
        <path
          fill="#821ff1"
          d="M20.063,32.372l1.755,3.845l3.697-3.325l4.055,8.883l1.039-0.474	c0.986-0.45,1.42-1.614,0.97-2.6L27.2,29.108l7.938-1c1.674-0.211,2.318-2.296,1.056-3.415L15.567,6.413l0.323,29.712L20.063,32.372	z"
          opacity=".25"
        ></path>
        <path
          fill="#821ff1"
          d="M16,6.808l0.314,28.925l3.736-3.36l0.004,0.008l0.009-0.008l1.569,3.436l4.031-3.625l4.295,9.409	l0.639-0.292c0.986-0.45,1.42-1.614,0.97-2.6l-4.379-9.593l7.938-1c1.674-0.211,2.318-2.296,1.056-3.415L16,6.808z"
        ></path>
        <linearGradient
          id="u9FaNT0xu2h8jTaSkW4MAb_WbSA1BjDR1gY_gr2"
          x1="25.702"
          x2="3.918"
          y1="-24.036"
          y2="-26.251"
          gradientTransform="rotate(-24.536 130.033 -37.036)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#5cbdf7" stop-opacity=".7"></stop>
          <stop offset="1" stopColor="#fff" stop-opacity=".4"></stop>
        </linearGradient>
        <path
          fill="url(#u9FaNT0xu2h8jTaSkW4MAb_WbSA1BjDR1gY_gr2)"
          d="M42.119,24.355L19.326,4.156	C18.028,3.006,15.981,3.94,16,5.675l0.331,30.445c0.019,1.721,2.058,2.616,3.337,1.465l6.007-5.402l4.462,9.774	c0.459,1.005,1.645,1.448,2.65,0.989l3.639-1.661c1.005-0.459,1.448-1.645,0.989-2.65l-4.464-9.779l8.092-1.02	C42.749,27.621,43.406,25.496,42.119,24.355z"
        ></path>
        <linearGradient
          id="u9FaNT0xu2h8jTaSkW4MAc_WbSA1BjDR1gY_gr3"
          x1="14.096"
          x2="33.192"
          y1="26.881"
          y2="20.755"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#fff" stop-opacity=".2"></stop>
          <stop offset="1" stopColor="#71b5ff" stop-opacity=".4"></stop>
        </linearGradient>
        <path
          fill="url(#u9FaNT0xu2h8jTaSkW4MAc_WbSA1BjDR1gY_gr3)"
          d="M18.012,4.149	c0.361,0,0.701,0.132,0.983,0.381l22.792,20.199c0.453,0.402,0.617,0.987,0.438,1.566c-0.179,0.579-0.645,0.969-1.246,1.045	l-8.092,1.02l-0.675,0.085l0.282,0.619l4.464,9.779c0.343,0.752,0.011,1.644-0.742,1.987l-3.639,1.661	c-0.198,0.09-0.407,0.136-0.622,0.136c-0.586,0-1.122-0.344-1.366-0.878l-4.462-9.774l-0.283-0.62l-0.506,0.455l-6.007,5.402	c-0.283,0.254-0.625,0.388-0.991,0.388c-0.735,0-1.502-0.556-1.512-1.487L16.5,5.669c-0.006-0.521,0.226-0.866,0.422-1.064	C17.209,4.315,17.606,4.149,18.012,4.149 M18.012,3.649c-1.039,0-2.025,0.819-2.012,2.026l0.331,30.445	c0.013,1.188,0.988,1.982,2.012,1.982c0.46,0,0.929-0.16,1.325-0.517l6.007-5.402l4.462,9.774c0.336,0.736,1.062,1.17,1.821,1.17	c0.278,0,0.56-0.058,0.829-0.181l3.639-1.661c1.005-0.459,1.448-1.645,0.989-2.65l-4.464-9.779l8.092-1.02	c1.706-0.215,2.363-2.341,1.076-3.481L19.326,4.156C18.931,3.806,18.466,3.649,18.012,3.649L18.012,3.649z"
        ></path>
      </svg>
    </Box>
  );
};
