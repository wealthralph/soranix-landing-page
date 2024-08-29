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
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const Section4 = () => {
  return <Box>Virtual card</Box>;
};

const Section3 = () => {

  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Container size={"lg"}>
      <Stack gap={"xl"}>
        <Box maw={600} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Badge variant="light">Accounts</Badge>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                A new home <br /> for Your Money{" "}
              </Title>
            </Box>
            <Box>
              <Title tt={"capitalize"} fz={"lg"} fw={"bold"}>
                Your accounts from a unified point.
              </Title>
              <Text c={"dimmed"}>
                Create, manage and connect all your bank accounts whether
                personal savings or business , Soranix provides the tools you
                need to stay organized and in control.
              </Text>
            </Box>
          </Stack>
        </Box>

        <Paper h={500}></Paper>
        <Box>
          <Box>
            <Divider />
            <Grid m={"xs"}>
              <Grid.Col
                h={400}
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              >
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      A bank account for your every need
                    </Title>
                    <Text c={"dimmed"}>
                      From savings , current to single use options , there’s an
                      account here with your name on it.
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
                      Powerful account tools
                    </Title>
                    <Text c={"dimmed"}>
                      Boost your account experience with a range of smart,
                      easy-to-customize features .
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
          </Box>
          <Divider />
          <Box>
            <Grid p={"xs"}>
              <Grid.Col
                h={400}
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              >
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Real-time, actionable data analytics.
                    </Title>
                    <Text c={"dimmed"}>
                      Stay one step ahead with our real-time analytics, that brings
                      all the data across your account to life, revealing trends
                      and patterns that allow you to make swift, informed
                      decisions about your finances.
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
              ></Grid.Col>
            </Grid>
            {/* <Divider /> */}
          </Box>
        </Box>
        <Paper withBorder h={150} radius={"md"} bg={"transparent"}>
          <SimpleGrid cols={2} h={"100%"}>
            <Box></Box>
            <Stack gap={0} h={"100%"} justify="center" p={"sm"}>
              {/* <Text c={"dimmed"}>Account Insured</Text> */}
              <Text size="xl">Soranix deposit account are NDIC insured </Text>
            </Stack>
          </SimpleGrid>
        </Paper>
      </Stack>
    </Container>
  );
};

const Section2 = () => {
  return (
    <Container size={"lg"} py={70}>
      <SimpleGrid cols={{ base: 1, md: 2 }}>
        <Title tt={"capitalize"} fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>
          Not Just Banking. <br /> this is So Much More.
        </Title>
        <Box>
          <Text>
            Why settle for just banking when you can have so much more? We’ve
            reimagined what a financial platform can do with all the tools you
            need to make your money work harder, smarter, and faster.
            {/* —it’s a complete redefinition of how you interact with your money. */}
          </Text>
        </Box>
      </SimpleGrid>
      <Space h={70} />
      <SimpleGrid cols={2}>
        <Paper h={200} withBorder radius={"md"}></Paper>

        <Paper h={200} withBorder radius={"md"}></Paper>
      </SimpleGrid>
    </Container>
  );
};

const HeroSection = () => {
  return (
    <Container size={"lg"}>
      <Stack gap={"lg"}>
        <Box maw={600}>
          <Title
            fz={{ base: 50, xs: "h1", sm: "h1", md: 50 }}
            tt={"capitalize"}
            fw={"bold"}
          >
            Your trusted ally for financial growth
          </Title>
          <Text>
            Unlock the full potential of your finances with a platform that goes
            beyond the basics.
          </Text>
        </Box>
        <Box>
          <Button variant="default">Get Early Access</Button>
        </Box>
      </Stack>
      <Space h={70} />
      <Paper h={700} withBorder radius={"md"}></Paper>
      <Space h={70} />
    </Container>
  );
};

const Home = () => {
  return (
    <Container fluid p={0}>
      {/* <Space h={70} /> */}

      <HeroSection />
      <Section2 />
      <Section3 />
      <Space h={300} />
    </Container>
  );
};

export default Home;
