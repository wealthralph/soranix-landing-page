import { useGSAP } from "@gsap/react";
import {
  ColorSwatch,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const IntroSection = ({ part, title, desc, features = [] }) => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const featureRefs = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        // pin: true,
      },
    });

    // Title animation
    tl.fromTo(
      titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power1.inOut" }
    );

    // Description animation
    tl.to(descRef.current, {
      duration: 3,
      text: {
        value: desc,
        delimiter: " ",
      },
    });

    // Stagger animation for features
    tl.from(featureRefs.current, {
      y: 50,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: "power1.inOut",
    });
  });

  const featuresList = features.map((i, index) => (
    <Group
      key={i.name}
      gap={"xs"}
      ref={(el) => (featureRefs.current[index] = el)}
    >
      <ColorSwatch size={10} color={i.color} />
      <Text size="sm">{i.name}</Text>
    </Group>
  ));

  return (
    <Container my={100} ref={containerRef} size={"lg"}>
      <Paper bg={"gray.0"} withBorder radius={"lg"} h={350} p={"xl"}>
        <Stack align="center" justify="center" h={"100%"}>
          <Stack align="center" gap={"sm"} justify="center">
            <Title tt={"capitalize"} fz={"sm"} ff={"monospace"}>
              {`Part ${part}`}
            </Title>
            <Title
              tt={"capitalize"}
              ref={titleRef}
              ta={"center"}
              fz={{ base: 25, xs: "h1", sm: "h1", md: 40 }}
            >
              {title}
            </Title>
            <Text ta={"center"} ff={"monospace"} ref={descRef}></Text>
            <Group>{featuresList}</Group>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default IntroSection;
