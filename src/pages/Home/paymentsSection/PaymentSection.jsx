import { Carousel } from "@mantine/carousel";
import { Badge, Box, Container, Divider, em, Grid, Paper, SegmentedControl, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useState } from "react";



const PaymentSection = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  
    const [value, setValue] = useState("personal");
  
    return (
      <Container size={"lg"} my={50}>
        <Stack gap={"xl"}>
          <Box maw={600} w={"100%"}>
            <Stack gap={"xl"}>
              <Box>
               
                <Title
                  tt={"capitalize"}
                  fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
                >
                  Send Money, <br /> faster and better{" "}
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
                    Pay and get Paid.{" "}
                  </Text>{" "}
                  Our suite of payment solutions allows you to send and receive
                  money in ways that suit your lifestyle—globally and
                  effortlessly.
                </Text>
              </Box>
             
            </Stack>
          </Box>
  
        
          <Box>
            {/* <Divider /> */}
            <Divider />
            <Grid py={"xs"}>
              <Grid.Col h={400} span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Simple and intuitive interface
                    </Title>
                    <Text c={"dimmed"}>
                      Navigate payments with an intuitive, user-friendly interface
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col
                h={400}
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
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Configure Payments Your Way{" "}
                    </Title>
                    <Text c={"dimmed"}>
                      Whether you need to automate recurring payments or schedule
                      transfers our flexible configurations have you covered.{" "}
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
            <Divider />
            <Grid py={"xs"}>
              <Grid.Col
                h={400}
                span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                styles={{
                  col: {
                    paddingInlineEnd: !isMobile
                      ? "var(--mantine-spacing-xl)"
                      : null,
                  },
                }}
              >
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Stylize Your Payments{" "}
                    </Title>
                    <Text c={"dimmed"}>
                      Customize the look and feel of your payment interface with
                      customizable designs and styling options creating a look
                      that&rsquo;s uniquely yours.
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
              <Grid.Col
                h={400}
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
                <Stack py={"xl"}>
                  <Box>
                    <Title order={3} fw={"normal"}>
                      Payment Integration
                    </Title>
                    <Text c={"dimmed"}>
                      Whether you need to automate recurring payments or schedule
                      transfers our flexible configurations have you covered.{" "}
                    </Text>
                  </Box>
                </Stack>
              </Grid.Col>
            </Grid>
            <Divider />
          </Box>
        </Stack>
      </Container>
    );
  };
  

  export default PaymentSection