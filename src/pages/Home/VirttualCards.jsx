import { Badge, Box, Container, Paper, Stack, Text, Title } from "@mantine/core";







const VirtualCards = () => {
    return (
      <Container w={'100%'} size={"lg"} my={100}>
        <Stack gap={"xl"}>
          <Box maw={600} w={"100%"}>
            <Stack gap={"xl"}>
              <Box>
                <Badge variant="light">Virtual Cards</Badge>
                <Title
                  tt={"capitalize"}
                  fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
                >
                  Seamless Spending, <br /> Virtually Anywhere{" "}
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
                    Spend with confidence.{" "}
                  </Text>{" "}
                  Our virtual cards provide a smooth, secure way to make
                   payments anywhere, whether you&rsquo;re shopping online or
                  in-store.
                </Text>
              </Box>
            </Stack>
          </Box>
  
          <Paper withBorder h={500}></Paper>
        </Stack>
      </Container>
    );
  };
  

  export default VirtualCards