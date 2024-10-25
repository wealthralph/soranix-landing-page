import { Box, Container, Stack, Text, Title } from "@mantine/core";

const FinancialPlan = () => {
  return (
    <Container fluid my={50} p={0}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Financial Plans
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Connect the Dots on Your Income{" "}
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
                  All Your Income, One View.{" "}
                </Text>{" "}
                Organize your income from different sources , whether it’s from
                work, side hustles, or investments, get a clear view of your
                financial inflow and manage it like never before.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export default FinancialPlan