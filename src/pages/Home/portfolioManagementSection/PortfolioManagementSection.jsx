import {
  Box,
  Container,
  Divider,
  em,
  Grid,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { clamp, useMediaQuery, useMove } from "@mantine/hooks";
import { useState } from "react";
import styles from "./PortfolioManagementSection.module.css";
import { IconGripVertical } from "@tabler/icons-react";
import AllocationSlider from "../../../components/allocationSlider/AllocationSlider";
import AssetAllocationSlider from "../../../components/allocationSlider/AllocationSlider";

const PortfolioManagementSection = () => {
  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

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
        <Box>
          <Divider />
          <Grid m={"xs"}>
            <Grid.Col
              span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}
              styles={{
                col: {
                  paddingInlineEnd: !isMobile
                    ? "var(--mantine-spacing-xl)"
                    : null,
                  overflow: "hidden",
                },
              }}
            >
              <Stack maw={450} py={"xl"} h={400}>
                <Box>
                  <Title order={3} fw={"normal"}>
                    Keep Your Portfolio on Target
                  </Title>
                  <Text size="sm">
                    Stay on track with your investments, create your desired
                    target allocation and compare it with your current portfolio
                    distribution.
                  </Text>
                </Box>
                <TargetAllocationGraphics />
              </Stack>
            </Grid.Col>
            <Grid.Col
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
              <Stack maw={450} py={"xl"}>
                <Box>
                  <Title tt={"capitalize"} order={3} fw={"normal"}>
                    connect your bank accounts
                  </Title>
                  <Text size="sm">
                    Keep an eye on all your accounts by linking them with
                    Soranix
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

export default PortfolioManagementSection;

const TargetAllocationGraphics = () => {
  const assests = [
    {
      id: 1,
      name: "Stock A",
      value: 0.2,
      color: "blue",
    },
    {
      id: 2,
      name: "Stock B",
      value: 0.3,
      color: "green",
    },
  ];

  return (
    <Box>
      <AssetAllocationSlider assets={assests} />
    </Box>
  );
};
