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
                order={1}
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
                Feel like  money slips through your fingers faster
                than you can earn it, Soranix brings clarity and control to your
                spending habits.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default ExpenseManagementSection;
