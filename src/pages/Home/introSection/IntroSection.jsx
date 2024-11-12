import { ActionIcon, Avatar, Box, Button, Code, ColorSwatch, Container, Divider, Flex, Grid, Group, Image,  NumberFormatter, Paper, Progress,SimpleGrid, Space, Stack, Text, Title } from "@mantine/core";
import { logoWhite } from "../../../assets/images";
import {  IconBellFilled, IconLayoutSidebarLeftCollapse, IconPlus, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { BarChart } from "@mantine/charts";
import styles from './IntroSection.module.css'



const IntroSection = () => {
  return (
    <Container size={"lg"} py={70}>
      <SimpleGrid  cols={{ base: 1,xs:1, sm:2, md: 2 }}>
        <Title tt={"capitalize"}  fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>
          Not Just Banking. <br /> this is So Much More.
        </Title>
        <Stack justify="flex-end" >
          <Text>
            Why settle for just banking when you can have so much more? We’ve
            reimagined what a financial platform can do with all the tools you
            need to make your money work harder, smarter, and faster.
            {/* —it’s a complete redefinition of how you interact with your money. */}
          </Text>
        </Stack>
      </SimpleGrid>
      <Space h={70} />
      <Container p={0} size={'md'}>
        {/* <GraphicsDashboardDisplay /> */}
      </Container>
  
    </Container>
  );
};


export default IntroSection

// Helper function to prevent negative values for assets like savings, deposits, and investment
const generateRandomValue = (currentValue, range = 1000, allowNegative = false) => {
  const change = Math.floor(Math.random() * range * 2 - range); // Generates values between -range and +range
  const newValue = currentValue + change;

  // Ensure value doesn't drop below zero for assets like savings, deposit, and investment
  return allowNegative ? newValue : Math.max(0, newValue);
};

// Function to calculate net worth based on the current asset and debt values
const generateNetWorthData = (previousNetWorth, currentValues) => {
  const { savings, deposit, debts, investment } = currentValues;

  // Net worth = (deposit + savings + investment) - debts
  const netWorth = deposit + savings + investment - debts;

  return Math.max(0, netWorth);
};



const updateNetWorthData = (currentValues, setNetWorthData, setGraphData) => {
  const newValues = {

    deposit: generateRandomValue(currentValues.deposit, 1000, false),
    savings: generateRandomValue(currentValues.savings, 1000, false),
    investment: generateRandomValue(currentValues.investment, 1000, false),


    debts: generateRandomValue(currentValues.debts, 1000, true),
  };

  const newNetWorth = generateNetWorthData(0, newValues);

  const timestamp = new Date().toLocaleTimeString(); //

  setGraphData((prevGraphData) => [
    ...prevGraphData,
    { date: timestamp, netWorth: newNetWorth },
  ]);

  // Update the component state
  setNetWorthData((prevData) =>
    prevData.map((item) => {
      switch (item.label) {
        case "Deposit":
          return { ...item, value: newValues.deposit };
        case "Savings":
          return { ...item, value: newValues.savings };
        case "Debts":
          return { ...item, value: newValues.debts };
        case "Investment":
          return { ...item, value: newValues.investment };
        default:
          return item;
      }
    })
  );
};


export const GraphicsDashboardDisplay = () => {

  const [netWorthData, setNetWorthData] = useState([
    {
      id: 1,
      value: 500,
      label: "Deposit",
      color: "orange",
      striped: false,
    },
    {
      id: 2,
      value: 3000,
      label: "Savings",
      color: "indigo",
      striped: false,
    },
    {
      id: 3,
      value: 5900,
      label: "Debts",
      color: "violet",
      striped: false,
    },
    {
      id: 4,
      value: 9000,
      label: "Investment",
      color: "pink",
      striped: false,
    },
  ]);

  const segments = netWorthData.map((segment) => {
    return (
      <Progress.Section
        striped={segment.striped}
        key={segment.id}
        value={segment.value / 100}
        label={segment.label}
        color={segment.color}
      />
    );
  });

  const [graphData, setGraphData] = useState([]);

  const TARGET_NET_WORTH = 10000;
  const newNetWorth = graphData[graphData.length - 1]?.netWorth || 5000

  const difference = TARGET_NET_WORTH - newNetWorth;
  const percentageDiff = (newNetWorth / TARGET_NET_WORTH) * 100;

  useEffect(() => {
    const interval = setInterval(() => {
      const currentValues = {
        deposit: netWorthData.find((item) => item.label === "Deposit").value,
        savings: netWorthData.find((item) => item.label === "Savings").value,
        debts: netWorthData.find((item) => item.label === "Debts").value,
        investment: netWorthData.find((item) => item.label === "Investment").value,
      };

      updateNetWorthData(currentValues, setNetWorthData, setGraphData);
    }, 4000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [netWorthData]);

  

  const swatches = netWorthData.map((swatch) => {
    return (
      <Group key={swatch.id} gap={"3px"}>
        <ColorSwatch size={10} color={swatch.color} />
        <Text fz={"9"} fw={"normal"}>
          {swatch.label}
        </Text>
        <Text fz={10} fw={"lighter"}>
          <NumberFormatter prefix="$" value={swatch.value} thousandSeparator />
        </Text>
      </Group>
    );
  });


  return (
    <Paper pos={'relative'}  bg={'transparent'} radius={'md'} withBorder style={{
      overflow: "hidden",
      // border: "none"
    }}>

      <div className={styles.graphics_gradient_cover}></div>
      <div className={styles.box_blur}>
      <div className={styles.content}>
      <Grid p={0} gutter={0} columns={15}>
        <Grid.Col h={500} span={3} py={0} visibleFrom="md">
          <div className={styles.graphics_display_sidebar}>
            <Flex h={30} p={'xs'} align={'center'} justify={'space-between'}>
              <Group gap={'xs'}>
                <Image h={13} src={logoWhite} />
                <Title c={'dimmed'} order={6}>Soranix</Title>
              </Group>
              <ActionIcon color="gray" c={'dimmed'} radius={'lg'} variant="transparent" size={'xs'}>
                <IconLayoutSidebarLeftCollapse />                </ActionIcon>
            </Flex>
            <Divider color="dark.7" />
            <Stack p={'xs'}>
              <Paper p={'4px'} withBorder>
                <Flex justify={'space-between'}>
                  <Group dir="ltr" gap={"xs"}>
                    <IconSearch size={12} />
                    <Text c={'dimmed'} size="xs">Search</Text>
                  </Group>
                  <Code color="dark.8"><Text size="8px">CTRL + K</Text></Code>                </Flex>
              </Paper>
            </Stack>

          </div>
        </Grid.Col >
        <Grid.Col h={500} span={{base:15,xs: 15, sm: 15, md: 15, lg: 12}} m={0} py={0}>
          <Box>
            <Flex h={30} p={'xs'} align={'center'} justify={'space-between'}>
              <Text c={'dimmed'} order={6}></Text>

              <Group gap={'xs'} align="center">
                <ActionIcon color="gray" radius={'lg'} variant="light" size={'xs'}>
                  <IconPlus size={14} />
                </ActionIcon>
                <Divider orientation="vertical" />

                <ActionIcon
                  variant="transparent"
                  size={"xs"}
                  color="gray"
                >
                  <IconBellFilled />
                </ActionIcon>
                <ActionIcon
                  variant="transparent"
                  size={"xs"}
                  // color="gray"
                  radius={'xl'}
                >
                  <Avatar radius={'lg'} size={'sm'} name="ri" />

                </ActionIcon>

              </Group>
            </Flex>
            <Divider color="dark.7" />
            <Box py={'md'} px={'xl'}>
              <Stack>
                {/* Title */}
                <Flex justify={'space-between'}>
                  <Box></Box>
                  <Button size="compact-xs">
                    Create New
                  </Button>
                </Flex>
                {/* Text */}
                <Box>
                  <Title order={2} className={styles.graphics_display_h1}>Hello, ralph</Title>
                  <Title c={'dark.4'} order={2}>Time to get the bag 💰</Title>
                  <Space h={10} />
                  <Divider color="dark.7" />
                </Box>
                {/* Networth */}
                <Box>
                  <Stack>
                    <Group>
                      <Box>
                        <Text c={"dimmed"} fz={10} tt={"capitalize"}>
                          Networth
                        </Text>
                        <Title order={4}>
                          <NumberFormatter prefix="$" value={newNetWorth || 5000} thousandSeparator />
                        </Title>
                      </Box>
                      <Box>
                        <Text c={"dimmed"} fz={10} tt={"capitalize"}>
                          Diff
                        </Text>
                        <Title c={percentageDiff >= 100 ? 'teal' : "yellow"} order={4}>
                          <NumberFormatter suffix="%" value={percentageDiff.toFixed(2)} thousandSeparator />
                        </Title>
                      </Box>
                      <Box>
                        <Text c={"dimmed"} fz={10} tt={"capitalize"}>
                          Target
                        </Text>
                        <Title order={4}>
                          <NumberFormatter prefix="$" value={TARGET_NET_WORTH} thousandSeparator />
                        </Title>
                      </Box>
                    </Group>
                    <Progress.Root
                      size={13}
                      transitionDuration={500}
                      styles={{
                        root: {

                          gap: "2px",
                          backgroundColor: "transparent",
                        },
                      }}
                    >
                      {segments}
                    </Progress.Root>
                    <Group>{swatches}</Group>
                    <Space h={10} />
                    <Box>
                      <BarChart
                        h={150}
                        data={[
                          { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
                          { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
                          { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
                          { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
                          { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
                          { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
                        ]}
                        dataKey="month"
                        withYAxis={false}
                        series={[
                          { name: 'Smartphones', color: 'violet.6' },
                          { name: 'Laptops', color: 'blue.6' },
                          { name: 'Tablets', color: 'teal.6' },
                        ]}
                        withTooltip={false}
                      />
                    </Box>
                  </Stack>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
      </div>
        
      </div>
    </Paper>
  )

}
