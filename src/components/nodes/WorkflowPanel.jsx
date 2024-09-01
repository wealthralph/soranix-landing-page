import { ActionIcon, Button, Divider, Group, Paper, Text } from "@mantine/core";
import { IconPlayerPlayFilled, IconPlus } from "@tabler/icons-react";

const WorkflowPanel = () => {
  return (
    <Paper bg={"dark.9"} withBorder p={"xs"} w={300}>
      <Group>
        <Button
          styles={{
            section: {
              marginInline: "2px",
            },
          }}
          size="xs"
          variant="subtle"
          color="gray"
          leftSection={<IconPlus size={16} />}
        >
          Block
        </Button>
        <Divider orientation="vertical" />
        <Button
          styles={{
            section: {
              marginInline: "2px",
            },
          }}
          size="xs"
          rightSection={<IconPlayerPlayFilled size={16} />}
        >
          Run
        </Button>
        <Divider orientation="vertical" />
      </Group>
    </Paper>
  );
};

export default WorkflowPanel;
