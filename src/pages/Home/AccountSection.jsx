import { Badge, Box, Container, Divider, em, Grid, Paper, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";




const AccountSection = () => {
    const isMobile = useMediaQuery(`(max-width: ${em(768)})`);
  
    return (
      <Container size={"lg"}>
        <Stack gap={"xl"}>
          <Box maw={600} w={"100%"}>
            <Stack gap={"xl"}>
              <Box>
                <Badge variant="light">Accounts</Badge>
                <Title
                  tt={"capitalize"}
                  fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
                >
                  A new home <br /> for Your Money{" "}
                </Title>
              </Box>
              <Box>
                <Title tt={"capitalize"} fz={"lg"} fw={"bold"}>
                  Your accounts from a unified point.
                </Title>
                <Text c={"dimmed"}>
                  Create, manage and connect all your bank accounts whether
                  personal savings or business , Soranix provides the tools you
                  need to stay organized and in control.
                </Text>
              </Box>
            </Stack>
          </Box>
  
          <Paper h={500}></Paper>
          <Box>
            <Box>
              <Divider />
              <Grid m={"xs"}>
                <Grid.Col
                  h={400}
                  span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                >
                  <Stack py={"xl"}>
                    <Box>
                      <Title order={3} fw={"normal"}>
                        A bank account for your every need
                      </Title>
                      <Text c={"dimmed"}>
                        From savings , current to single use options , there’s an
                        account here with your name on it.
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
                        Powerful account tools
                      </Title>
                      <Text c={"dimmed"}>
                        Boost your account experience with a range of smart,
                        easy-to-customize features .
                      </Text>
                    </Box>
                  </Stack>
                </Grid.Col>
              </Grid>
            </Box>
            <Divider />
            <Box>
              <Grid p={"xs"}>
                <Grid.Col
                  h={400}
                  span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
                >
                  <Stack py={"xl"}>
                    <Box>
                      <Title order={3} fw={"normal"}>
                        Real-time, actionable data analytics.
                      </Title>
                      <Text c={"dimmed"}>
                        Stay ahead with our real-time analytics, that brings all
                        you account data, revealing trends and patterns that allow
                        you to make swift, informed decisions about your finances.
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
                ></Grid.Col>
              </Grid>
              {/* <Divider /> */}
            </Box>
          </Box>
          <Paper withBorder h={150} radius={"md"} bg={"transparent"}>
            <SimpleGrid cols={2} h={"100%"}>
              <Box></Box>
              <Stack gap={0} h={"100%"} justify="center" p={"sm"}>
                {/* <Text c={"dimmed"}>Account Insured</Text> */}
                <Text size="xl">Soranix deposit account are NDIC insured </Text>
              </Stack>
            </SimpleGrid>
          </Paper>
        </Stack>
      </Container>
    );
  };


  export default AccountSection