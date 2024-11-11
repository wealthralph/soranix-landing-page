import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  Highlight,
  Image,
  Paper,
  Space,
  Stack,
  Text,
  Title,
  UnstyledButton,
} from "@mantine/core";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./Home.module.css";

const HeroSection = () => {
  const BoxRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // Animate the title
      tl.fromTo(
        titleRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 }
      )

        // Animate the text after the title
        .fromTo(
          textRef.current,
          { y: -50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 },
          "-=0.3" // Overlap animations slightly by starting the text 0.5 seconds before the title ends
        );
    },
    { scope: BoxRef }
  );

  return (
    <Container fluid h={"100vh"} className={styles.hero_main_wrapper}>
      <Stack gap={'xl'} size={"lg"} className={styles.hero_main_container}>
        {/* Title and text content */}
        <Center>
          <Stack align="center">
            <Title
              ref={titleRef}
              ta={"center"}
              fz={{ xs: "h2", sm: "h1", md: 45, lg: 40 }}
              tt={'capitalize'}
              fw={700}
              maw={600}
            >
              Take control of Your Finances the Modern Way with AI
            </Title>
            <Text ta={"center"} size="xl" ref={textRef} maw={450}>
              Unlock the full potential of your finances .
            </Text>
            <button className={styles["hero_button"]}>Get Early Access</button>
          </Stack>
        </Center>
        {/* Platform graphics */}
        <Box bg={'cyan'}>
    hello
        </Box>
      </Stack>
    </Container>
  );
};

export default HeroSection;

const GraphicsAccount = () => {
  return <div>hello</div>;
};

// <Stack maw={600} ref={BoxRef} justify="center">
//           <Title ta={'center'} fz={{base: 50, sm: "h2", md: "h1"}}>Take control of Your Finances, the Modern Way with AI</Title>

//           <Text maw={500} ref={textRef}>
//             Unlock the full potential of your finances with a platform that
//             goes beyond the basics.
//           </Text>
