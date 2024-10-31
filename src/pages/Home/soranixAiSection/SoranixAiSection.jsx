import { Box, Container, Divider, em, Grid, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const SoranixAiSection = () => {

    const isMobile = useMediaQuery(`(max-width: ${em(768)})`);



  return (
    <Container size={"xl"} my={50}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Soranix AI{" "}
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                The Partner your finances deserves
              </Title>
            </Box>
            <Box>
              <Text>
                <Text
                  span
                  tt={"capitalize"}
                  fz={"lg"}
                  fw={"bold"}
                  c={"var(--mantine-color-text)"}
                >
                  Money Co-Pilot.
                </Text>{" "}
                Soranix AI works with you, uncovering opportunities , providing
                actionable insights and automatinig every financial workflows.
                It’s not just AI—it’s the financial partner that helps you grow.{" "}
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Divider />
          <Grid m={"xs"}>
            <Grid.Col
              h={450}
              span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              style={{
                paddingInlineEnd: !isMobile
                  ? "var(--mantine-spacing-xl)"
                  : null,
              }}
            >
              <Stack py={"xl"}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Impact Analysis
                  </Title>
                  <Text>
                    Get a clear view of how your daily decisions like savings,
                    expense affect your net-worth and shape your financial
                    future.
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col
              h={450}
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
                    Net-Worth Drivers
                  </Title>
                  <Text>
                    Boost your account experience with a range of smart,
                    easy-to-customize features .
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider />
        </Box>
      </Stack>
    </Container>
  );
};

export default SoranixAiSection;
