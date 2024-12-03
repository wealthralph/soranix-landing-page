import { Box, Flex, Group, Image, Text, ThemeIcon } from "@mantine/core";
import styles from "./AiChatInput.module.css";
import { IconAt, IconCircleArrowUp, IconPaperclip } from "@tabler/icons-react";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";

gsap.registerPlugin(TextPlugin);

const AiChatInput = ({ prompt, promptRef, onMount }) => {
  useEffect(() => {
    if (onMount) onMount();
  }, []);
  return (
    <Box className={styles.input_wrapper}>
      <Box className={styles.input_container}>
        <Flex justify={"space-between"}>
          <Group>
            <Box contentEditable>
              <Text size={"sm"} component="span" ref={promptRef}></Text>
            </Box>
          </Group>
          <Group gap={"xs"}>
            <ThemeIcon size={"xs"} variant="transparent" color="gray">
              <IconPaperclip size={18} />
            </ThemeIcon>
            <ThemeIcon size={"xs"} variant="transparent" color="gray">
              <IconAt size={18} />
            </ThemeIcon>
            <ThemeIcon size={"sm"} variant="transparent" color="gray">
              <IconCircleArrowUp size={18} strokeWidth={1.5} />
            </ThemeIcon>
          </Group>
        </Flex>
      </Box>
    </Box>
  );
};

export default AiChatInput;
