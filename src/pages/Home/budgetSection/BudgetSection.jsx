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
 
      </Stack>
    </Container>
  );
};

export default BudgetSection;
