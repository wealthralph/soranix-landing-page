
import {
  Badge,
  Box,
  Container,
  Divider,
  em,
  Grid,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  addEdge,
  Background,
  BackgroundVariant,
  Controls,
  Panel,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";

import { useCallback } from "react";
import { useMediaQuery } from "@mantine/hooks";
import "@xyflow/react/dist/style.css";
import WorkflowPanel from "../../../components/nodes/WorkflowPanel";
import { DisplayNode, NotificationNode, SplitNode, TransferNode, TriggerNode } from "../../../components/nodes/CustomNode";

const nodeTypes = {
  triggerNode: TriggerNode,
  splitNode: SplitNode,
  displayNode: DisplayNode,
  transferNode: TransferNode,
  notificationNode: NotificationNode,
};


const FlowSection = () => {


        const nodeDefaults = {
          sourcePosition: Position.Right,
          targetPosition: Position.Left,
        };

        const initialNodes = [
          {
            id: "A",
            type: "triggerNode",
            position: { x: -100, y: 350 },
            data: { label: "trigger", value: 5000 },
            ...nodeDefaults,
          },
          {
            id: "B",
            type: "splitNode",
            position: { x: 250, y: 350 },
            data: { label: "B" },
            ...nodeDefaults,
          },
          // {
          //   id: "C",
          //   type: "displayNode",
          //   position: { x: 450, y: 250 },
          //   data: { label: "C" },
          //   // ...nodeDefaults,
          // },
          {
            id: "D2",
            type: "transferNode",
            position: { x: 650, y: 150 },
            data: { label: "D" },
            ...nodeDefaults,
          },
          {
            id: "D1",
            type: "transferNode",
            position: { x: 650, y: 350 },
            data: { label: "D" },
            ...nodeDefaults,
          },
          {
            id: "D3",
            type: "transferNode",
            position: { x: 650, y: 550 },
            data: { label: "D" },
            ...nodeDefaults,
          },
          {
            id: "E",
            type: "notificationNode",
            position: { x: 1050, y: 150 },
            data: { label: "E" },
            ...nodeDefaults,
          },
        ];

        const initialEdges = [
          // {
          //   id: "A-B",
          //   source: "A",
          //   target: "B",
          //   animated: true,
          // },
          // {
          //   id: "A-C",
          //   source: "A",
          //   target: "C",
          // },
        ];

        const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
        const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

        const onConnect = useCallback(
          (params) =>
            setEdges((eds) => addEdge({ ...params, type: "smoothstep" }, eds)),
          []
        );

        const isMobile = useMediaQuery(`(max-width: ${em(768)})`);


  return (
    <Container size={"xl"} my={50} p={0}>
      <Stack gap={"xl"}>
        <Box maw={550} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Flows
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                Build , program , Automate, all your financial processes .
              </Title>
            </Box>
            <Box>
              <Title tt={"capitalize"} fz={"lg"} fw={"bold"}>
                {/* Visual  interface for your finances */}
              </Title>
              <Text >
                 Flows provides you with a powerful visual canvas and blocks that sits on top of your finances,
                 allowing you to build and automate virtually any financial workflows or process you can think of. 
              </Text>
            </Box>
          </Stack>
        </Box>

        <Box w={"100%"} h={400}>
          <ReactFlow
            style={{ backgroundColor: "transparent" }}
            nodes={nodes}
            nodeTypes={nodeTypes}
            proOptions={{ hideAttribution: true }}
            onEdgesChange={onEdgesChange}
            onNodesChange={onNodesChange}
            edges={edges}
            onConnect={onConnect}
            fitView
            colorMode="light"

            // preventScrolling={false}
          >
            <Background
              bgColor="transparent"
              gap={100}
              variant={BackgroundVariant.Dots}
              lineWidth={0.2}
              offset={[1, 10]}
            />
            <Controls position="top-right" />
            <Panel position="bottom-left">
              <WorkflowPanel />
            </Panel>
          </ReactFlow>
        </Box>
        <Box>
          <Divider />
          <Grid m={"xs"}>
            <Grid.Col h={400} span={{ base: 12, xs: 12, sm: 6, md: 6, lg: 6 }}>
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
      </Stack>
    </Container>
  );
}

export default FlowSection