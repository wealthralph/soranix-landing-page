import { Box, Container, Stack, Text, Title } from "@mantine/core";

const ExpenseManagementSection = () => {
  return (
    <Container fluid my={50} p={0}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Expense Management{" "}
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Redefine the way you spend Money{" "}
              </Title>
            </Box>
            <Box>
              <Text>
                {/* <Text
                  span
                  tt={"capitalize"}
                  fz={"lg"}
                  fw={"bold"}
                  c={"var(--mantine-color-text)"}
                >
                  All Your Income, One View.{" "}
                </Text>{" "} */}
                If you feel like your money slips through your fingers faster
                than you can earn it, you’re not alone. This tool helps you get
                a handle on your spending, giving you a clear breakdown
                of your expenses. No more guessing, no more stress—just smarter
                spending habits that stick.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ExpenseManagementSection;
