import {
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Highlight,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import styles from "./OsSection.module.css";
import { useEffect, useRef } from "react";

const OsSection = () => {
  return (
    <Container size={"lg"} w={"100%"}>
      <Stack w={"100%"} gap={"xl"}>
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
          <Title
            tt={"capitalize"}
            fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
          >
            The Operating system for your personal finance{" "}
          </Title>
          <Stack justify="flex-end" maw={500}>
            <Text>
              Why settle for just banking when you can have so much more? We’ve
              reimagined what a financial platform can do with all the tools you
              need to make your money work harder, smarter, and faster.
              {/* —it’s a complete redefinition of how you interact with your money. */}
            </Text>
          </Stack>
        </SimpleGrid>

        <OsLayers />
      </Stack>
    </Container>
  );
};

export default OsSection;

const OsLayers = () => {

    const canvasRef = useRef(null);

  


  return (
    <Container p={0} size={"md"} w={"100%"}>
        {/* <canvas ref={canvasRef} style={{display: "block"}}/> */}
      <Box className={styles.os_display_wrapper}>
        <Box className={styles.os_display_outer}>
          <Box className={styles.os_display_inner}></Box>
        </Box>
      </Box>
    </Container>
  );
};

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 424" fill="none" class="CubeSchema_CubeSchema__cube__svg__W1JSv"><path stroke="url(#cube-layers_svg__a)" stroke-linecap="round" stroke-linejoin="round" d="M176 16h-68.16c-18.526 0-27.789 0-34.814 3.72A32 32 0 0059.72 33.026C56 40.051 56 49.314 56 67.84v288.32c0 18.526 0 27.789 3.72 34.814a32.003 32.003 0 0013.306 13.307C80.051 408 89.314 408 107.84 408h56.176M304 16h68.16c18.526 0 27.789 0 34.814 3.72a32.003 32.003 0 0113.307 13.306C424 40.051 424 49.314 424 67.84v288.32c0 18.526 0 27.789-3.719 34.814a32.006 32.006 0 01-13.307 13.307C399.949 408 390.686 408 372.16 408h-56.159"></path><defs><linearGradient id="cube-layers_svg__a" x1="56" x2="436.8" y1="238.415" y2="238.415" gradientUnits="userSpaceOnUse"><stop stop-color="#7A77FF"></stop><stop offset="1" stop-color="#FF6492"></stop></linearGradient></defs></svg>
