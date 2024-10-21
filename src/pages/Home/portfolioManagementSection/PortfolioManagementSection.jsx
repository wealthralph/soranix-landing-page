import { Box, Container, Stack, Text, Title } from "@mantine/core";

const PortfolioManagementSection = () => {
  return (
    <Container size={"lg"} w={"100%"} p={0} my={50}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Portfolio Management
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Hands-On Control <br /> for Your Investments
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
                  Precision Control
                </Text>{" "}
                Take control of your investments with powerful tools that help
                you manage your portfolio effortlessly. From rebalancing to
                target allocation and much more.
              </Text>
            </Box>
          </Stack>
        </Box>
        <Box>Management</Box>
      </Stack>
    </Container>
  );
}

export default PortfolioManagementSection