import { Box, Container, Divider, em, Grid, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const BudgetSection = () => {


        const isMobile = useMediaQuery(`(max-width: ${em(768)})`);


  return (
    <Container fluid my={50} p={0}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Smart Budgets
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Real-Time Budgets for Real-Life Needs{" "}
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
                  Stay Ahead with AI-Powered Budgets.
                </Text>{" "}
                Build custom budgets tailored to your lifestyle and spending
                habits with AI-powered system and real-time adjustments that
                ensures you stay on top of your finances no matter what life
                throws your way.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Divider />
          <Grid m={"xs"}>
            <Grid.Col
              span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              styles={{
                col: {
                  paddingInlineEnd: !isMobile
                    ? "var(--mantine-spacing-xl)"
                    : null,
                  overflow: "hidden",
                },
              }}
            >
              <Stack maw={450} py={"xl"} h={400}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Scope Your Budgets{" "}
                  </Title>
                  <Text size="sm">
                    Take control of your investments with powerful tools that
                    help you manage your portfolio effortlessly.
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
            <Grid.Col
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
              <Stack maw={450} py={"xl"}>
                <Box>
                  <Title tt={"capitalize"} order={3} fw={"normal"}>
                    Implement the budegting style that works for you
                  </Title>
                  <Text size="sm">
                    Get detailed real-time analysis of every aspect of your
                    portfolio, from growth trends to risk exposure.
                  </Text>
                </Box>
              </Stack>
            </Grid.Col>
          </Grid>
          <Divider />
       
        </Box>{" "}
      </Stack>
    </Container>
  );
};

export default BudgetSection;
