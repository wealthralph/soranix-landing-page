import {  Button, Divider, Group, Paper, Text } from "@mantine/core";
import { IconPlayerPlayFilled, IconPlus } from "@tabler/icons-react";

const WorkflowPanel = () => {
  return (
    <Paper bg={"dark.9"} withBorder p={'xs'} >
      <Group gap={'xs'}>
        <Button
          styles={{
            section: {
              marginInline: "2px",
            },
          }}
          size="compact-xs"
          variant="light"
          color="gray"
          leftSection={<IconPlus size={12} />}
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
          size="compact-xs"
          rightSection={<IconPlayerPlayFilled size={12} />}
        >
          Run
        </Button>
        {/* <Divider orientation="vertical" /> */}
      </Group>
    </Paper>
  );
};

export default WorkflowPanel;
