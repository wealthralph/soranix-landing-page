import { Badge, Box, ColorSwatch, Container, Divider, em, Flex, Grid, Group, Paper, px, rem, SimpleGrid, Skeleton, Stack, Text, Title, useMantineTheme } from "@mantine/core";
import styles from "./VirtualCards.module.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshReflectorMaterial, OrbitControls, Outlines, PerspectiveCamera, RoundedBox, Svg, Text as ThreeText, View } from '@react-three/drei';
import * as THREE from 'three';
import { Suspense } from "react";
import { useMediaQuery } from "@mantine/hooks";


gsap.registerPlugin(ScrollTrigger)


const MotionColorSwatch = motion.create(ColorSwatch, { forwardMotionProps: true })


const VirtualCards = () => {


  const theme = useMantineTheme();
  const containerRef = useRef(null)
  const heroCardRef = useRef(null)



  useGSAP(() => {

    // const tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: containerRef.current,
    //     scrub: 1,
    //     pin: true,
    //     start: 'top ',
    //     end: '+=300',
    //     // markers: {startColor: "green", endColor: "red", },

    // })

    // tl.to(heroCardRef.current, {y: 300,  duration: 1.5, ease: 'sine'})

  })


  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);



  return (
    <Container w={'100%'} size={"lg"} my={50} ref={containerRef} p={0}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={'monospace'}>Virtual Cards</Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Seamless Spending, <br /> Virtually Anywhere{" "}
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
                  Spend with confidence.{" "}
                </Text>{" "}
                Make smooth, secure
                payments anywhere, whether you&rsquo;re shopping online or
                in-store.
              </Text>
            </Box>
          </Stack>
        </Box>
        {/* <CardModel /> */}
    

      </Stack>
    </Container>
  );
};


export default VirtualCards




const CardModel = () => {

  const theme = useMantineTheme();
  const [color, setColor] = useState(theme.colors['grape'])

  const cameraControl = useRef()



  const color_swatch_array = Object.keys(theme.colors).slice(2, 6).map(i => (

    <MotionColorSwatch whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.99 }} onClick={() => setColor(i)} size={25} color={`var(--mantine-color-${i}-filled)`} key={i} />
  ))

  return (
    <Box>
      <CardModelView />
      <Canvas eventSource={document.getElementById('root')} style={{ width: "100%", height: "60dvh" }}>
        <View.Port />
      </Canvas>
      <Flex justify={'center'}>

        <Paper w={'fit-content'} radius={'md'} withBorder shadow="xs" p={'xs'}>
          <Group >
            {
              color_swatch_array
            }
          </Group>
        </Paper>
      </Flex>
    </Box>
  )
}


const CardModelView = ({ index, groupRef, gsapType, controlRef, setRotationRef, }) => {
  return (
    <Box h={'100%'}>
      <View
        index={index}
        id={gsapType}
        style={{ border: "thin solid red", height: '60dvh' }}
      >
        <ambientLight intensity={0.3} />
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <Suspense fallback={<div>loading</div>}>

        </Suspense>
      </View>
    </Box>
  )
}





























// <svg width="42" height="35" viewBox="0 0 42 35" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.250427" y="0.25" width="41.4997" height="34.4997" rx="2.75" fill="none" stroke="var(--mantine-color-dark-6)" strokeWidth="0.5"></rect><path d="M14.4374 11.8115L9.62493 7.87398L0 7.87398M14.4374 11.8115L14.4374 17.4989M14.4374 11.8115L20.5624 11.8115M26.6873 11.8115V17.4989M26.6873 11.8115L31.4998 7.87398L41.1247 7.87398M26.6873 11.8115H20.5624M26.6873 23.1864V17.4989M26.6873 23.1864L31.4998 27.9988L41.1247 27.9988M26.6873 23.1864H20.5624M14.4374 23.1864V17.4989M14.4374 23.1864L9.62493 27.9988H0M14.4374 23.1864H20.5624M14.4374 17.4989H0M26.6873 17.4989L41.1247 17.4989M20.5624 23.1864L20.5624 34.5613M20.5624 11.8115V0.436539" stroke="var(--mantine-color-dark-6)" strokeWidth="0.5"></path></svg>






















