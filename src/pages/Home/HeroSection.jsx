import { Box, Button, Container, Grid, Highlight, Image, Paper, Space, Stack, Text, Title } from "@mantine/core";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import styles from './Home.module.css'

const HeroSection = () => {
  const BoxRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Animate the title
    tl.fromTo(titleRef.current,
      { y: -160, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    )

      // Animate the text after the title
      .fromTo(textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.5" // Overlap animations slightly by starting the text 0.5 seconds before the title ends
      );
  }, { scope: BoxRef });

  return (
    <Box >

      <Container size={"lg"} >
        <Stack gap={"lg"}>
          <Box maw={500} ref={BoxRef}>
            <Title
              fz={{ base: 50, xs: "h1", sm: "h1", md: 50 }}
              tt={"capitalize"}
              fw={"bold"}
              ref={titleRef} // Reference for animation
            >
              One Platform for all your financial needs
              <Highlight
                highlight="powered by ai"
                highlightStyles={{
                  backgroundImage:
                    'linear-gradient(45deg, var(--mantine-primary-color-5), var(--mantine-color-grape-5))',
                  fontWeight: 700,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                inherit
              >
                powered by ai
              </Highlight>
            </Title>
            <Text ref={textRef}>
              Unlock the full potential of your finances with a platform that goes beyond the basics.
            </Text>
          </Box>
          <Box>
            <Button variant="default">Get Early Access</Button>
          </Box>
        </Stack>
        <Space h={70} />
        <div className={styles.translucent_cont}>
          <div className={styles.gradient}>Hello</div>
          <div className={styles.translucent_bg} >
            <Container size={'lg'} p={'xs'}>
              <Grid gutter={0}>
                <Grid.Col h={400}  span={7}  >
                  <div className={styles.hero_image_products}>

                  </div>
                </Grid.Col>
                <Grid.Col h={400} span={5}  >
                  <div className={styles.hero_image_ai}>
                    <svg width="100%" height="100%" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                   
                      <circle cx="100" cy="100" r="60" stroke="var(--mantine-color-default-border)" strokeWidth="0.5" fill="none" />
                    </svg>
                  </div>
                </Grid.Col>
              </Grid>
            </Container>
          </div>
        </div>
        <Space h={70} />
      </Container>
    </Box>
  );
};

export default HeroSection;


const GraphicsAccount = () => {
  return (
    <div>
      hello
    </div>
  )
}