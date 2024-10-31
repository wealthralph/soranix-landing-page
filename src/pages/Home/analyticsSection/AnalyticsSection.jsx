import { Box, Container, Stack, Text, Title } from "@mantine/core";

const AnalyticsSection = () => {
  return (
    <Container size={"xl"} my={50}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Analytics{" "}
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Get Detailed analytics about your finances
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
                  See the Patterns in Your Money{" "}
                </Text>{" "}
                Your finances shouldn’t be a mystery.Use Analytics to zoom in on
                spending, income trends, and patterns you may not even realize,
                helping you gain better control over your money
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default AnalyticsSection;
