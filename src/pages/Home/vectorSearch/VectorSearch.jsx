import { Box, Container, Stack, Text, Title } from "@mantine/core";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const VectorSearch = () => {
  return (
    <Container size={"xl"} my={50}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Vector Search{" "}
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Search & Filter Through Your Financial data, using natural
                language{" "}
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
                Looking for answers in your finances shouldn’t be hard work.
                Simply type a question, and get instant insights across
                accounts, investments, transactions and more.
              </Text>
            </Box>
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
};

export default VectorSearch;
