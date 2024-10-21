import { Box, Container, Stack, Text, Title } from "@mantine/core";

const PortfolioAnalysisSection = () => {
  return (
    <Container size={"lg"} w={"100%"} p={0} my={50}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Portfolio Analysis
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Make sense of <br />  Your Investments
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
                  Your portfolio optimized
                </Text>{" "}
                Soranix helps you analyze every aspect of your portfolio, from
                growth trends to risk exposure. With detailed reports and
                real-time data, you’ll always know where you stand and what to
                do next.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>Analysis</Box>
      </Stack>
    </Container>
  );
};

export default PortfolioAnalysisSection;
