import { ActionIcon, Box, ColorSwatch, Container, Group, NumberFormatter, Progress, Space, Stack, Text, Title } from "@mantine/core";
import { useState } from "react";
import styles from "./Home.module.css"
import { IconPlus, IconSettingsAutomation } from "@tabler/icons-react";

const NetWorthSection = () => {
    const [netWorthData, setNetWorthData] = useState([
      {
        id: 1,
        value: 25900,
        label: "Deposit",
        color: "orange",
        striped: true,
      },
      {
        id: 2,
        value: 30000,
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
        value: 59000,
        label: "Investment",
        color: "pink",
        striped: false,
      },
    ]);
  
    const addRandomNetWorthData = () => {
      const newId = netWorthData.length + 1;
      const newValue = Math.floor(Math.random() * 100000); // Random value between 0 and 100,000
      const newLabel = `Random Label ${newId}`; // Example label, can be customized
      const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Random hex color
      const newStriped = Math.random() > 0.5;
  
      const newNetWorthItem = {
        id: newId,
        value: newValue,
        label: newLabel,
        color: newColor,
        striped: newStriped,
      };
  
      setNetWorthData((prevData) => [...prevData, newNetWorthItem]);
    };
  
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
  
    const swatches = netWorthData.map((swatch) => {
      return (
        <Group key={swatch.id} gap={"3px"}>
          <ColorSwatch size={15} color={swatch.color} />
          <Text fz={"sm"} fw={"normal"}>
            {swatch.label}
          </Text>
          <Text c={"dimmed"} fw={"lighter"}>
            <NumberFormatter prefix="$" value={swatch.value} thousandSeparator />
          </Text>
        </Group>
      );
    });
  
    return (
      <Container my={200} size={"lg"}>
        <div className={styles.cont}>
        <Title tt={"capitalize"} fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>
        Your networth <br /> visualized in real-time
        </Title>
       
          <div className={styles.networth_box_blur}>
            
            <div className={styles.networth_content}>
              <Group gap={"xs"}>
                <ActionIcon
                  onClick={addRandomNetWorthData}
                  variant="transparent"
                  color="dark"
                  size={"sm"}
                >
                  <IconPlus />
                </ActionIcon>
                <ActionIcon variant="transparent" color="dark" size={"sm"}>
                  <IconSettingsAutomation />
                </ActionIcon>
              </Group>
              <Space h={30} />
              <Group justify="space-between">
                <Box>
                  <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                    Networth
                  </Text>
                  <Title order={1}>
                    <NumberFormatter prefix="$" value={5000} thousandSeparator />
                  </Title>
                </Box>
                <Box>
                  <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                    Diff
                  </Text>
                  <Title c={"red.8"} order={1}>
                    <NumberFormatter suffix="%" value={10} thousandSeparator />
                  </Title>
                </Box>
                <Box>
                  <Text c={"dimmed"} fz={"sm"} tt={"capitalize"}>
                    Target
                  </Text>
                  <Title order={1}>
                    <NumberFormatter prefix="$" value={10000} thousandSeparator />
                  </Title>
                </Box>
              </Group>
              <Stack>
                <Progress.Root
                  size={35}
                  transitionDuration={500}
                  styles={{
                    root: {
                      // display: "flex",
                      // alignItems: "center",
                      gap: "3px",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  {segments}
                </Progress.Root>
                <Group>{swatches}</Group>
              </Stack>
            </div>
          </div>
        </div>
      </Container>
    );
  };
  
  export default NetWorthSection