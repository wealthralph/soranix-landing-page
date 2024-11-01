import { Box, Group, Text } from "@mantine/core";
import styles from "./IphoneMockup.module.css";
import {
  IconAntennaBars5,
  IconBattery4,
  IconWifi,
} from "@tabler/icons-react";
import { useEffect, useState } from "react";

const IPhoneMockup = ({children}) => {
  const [time, setTime] = useState("");

  useEffect(() => {
  const updateClock = () => {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "pm" : "am";

    hours = hours % 12 || 12;

    setTime(`${hours}:${minutes}${ampm}`);
  };

    updateClock();
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box className={styles.outer_frame}>
      <Box className={styles.inner_frame}>
        <Box className={styles.screen}>
          <Box className={styles.screen_content}>{children}</Box>
          <Box className={styles.screen_elements}>
            <Group justify="space-around" align="center">
              <Text fw={"normal"}>{time}</Text>
              <Box className={styles.dynamic_island} />
              <Group gap={2} align="baseline">
                <IconAntennaBars5 size={22} />
                <IconWifi size={22} />
                <IconBattery4 size={22} />
              </Group>
            </Group>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};


export default IPhoneMockup;
