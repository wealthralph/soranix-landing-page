import { useGSAP } from "@gsap/react";
import {
  Box,
  Center,
  ColorSwatch,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
import { useRef } from "react";

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
          start: "top",
          pin: true,
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
      <Group key={i.name} gap={'xs'} ref={el => featureRefs.current[index] = el}>
        <ColorSwatch size={10} color={i.color} />
        <Text size="sm">{i.name}</Text>
      </Group>
    ));
  
    return (
      <Container my={50} ref={containerRef} size={"lg"} h={"100dvh"}>
        <Stack align="center" justify="center" h={"100%"}>
          <Stack align="center" gap={"sm"}>
            <Title
              tt={"capitalize"}
              fz={"sm"}
              ff={"monospace"}
            >
              {`Part ${part}`}
            </Title>
            <Title tt={"capitalize"} ref={titleRef} fz={40}>{title}</Title>
            <Text ff={'monospace'} ref={descRef}></Text>
            <Group>
              {featuresList}
            </Group>
          </Stack>
        </Stack>
      </Container>
    );
  };
  
  export default IntroSection;