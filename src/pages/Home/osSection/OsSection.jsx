import {

  Container,

  Stack,
  Title,
} from "@mantine/core";
import styles from "./OsSection.module.css";
import { useCallback } from "react";
import {
  addEdge,
  Position,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from "@xyflow/react";
import {
  AiLayerNode,
  GroupNode,
  OthersLayerNodes,
  PrimitiveNodes,
  SemanticLayerNode,
} from "../../../components/nodes/CustomNode";

const OsSection = () => {
  return (
    <Container size={"xl"} w={"100%"}>
      <Stack w={"100%"} align="center">
        <Title
          ta={"center"}
          tt={"capitalize"}
          fz={{ xs: "h3", sm: "h2", md: 45, lg: 40 }}
          fw={600}
          maw={600}
        >
          The AI Operating system for your personal finance
        </Title>

        <OsLayers />
      </Stack>
    </Container>
  );
};

export default OsSection;

const nodeTypes = {
  primitiveNode: PrimitiveNodes,
  semanticLayer: SemanticLayerNode,
  aiLayer: AiLayerNode,
  otherLayer: OthersLayerNodes,
  groupNode: GroupNode
};

const OsLayers = () => {
  const nodeDefaults = {
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    draggable: false,
  };

  const initialNodes = [
    {
      id: "A",
      type: "primitiveNode",
      data: { title: "Accounts" },
      position: { x: 10, y: 100 },
      ...nodeDefaults,
    },
    {
      id: "B",
      type: "primitiveNode",
      data: { title: "Savings" },
      position: { x: 10, y: 150 },
      ...nodeDefaults,
    },
    {
      id: "C",
      type: "primitiveNode",
      data: { title: "Payments" },
      position: { x: 10, y: 200 },
      ...nodeDefaults,
    },
    {
      id: "D",
      type: "primitiveNode",
      data: { title: "Virtual Card" },
      position: { x: 10, y: 250 },
      ...nodeDefaults,
    },

    {
      id: "E",
      type: "primitiveNode",
      data: { title: "Bills" },
      position: { x: 10, y: 300 },
      ...nodeDefaults,
    },
    {
      id: "F",
      type: "semanticLayer",
      position: { x: 200, y: 180 },

      draggable: false,
    },
    {
      id: "G",
      type: "aiLayer",
      position: { x: 400, y: 180 },

      draggable: false,
    },
    {
      id: "H",
      type: "otherLayer",
      position: { x: 600, y: 100 },
      data: { title: "Bills" },

      ...nodeDefaults,
    },
    {
      id: "I",
      type: "otherLayer",
      position: { x: 600, y: 150 },
      data: { title: "Bills" },

      ...nodeDefaults,
    },
    {
      id: "J",
      type: "otherLayer",
      position: { x: 600, y: 200 },
      data: { title: "Bills" },

      ...nodeDefaults,
    },
    {
      id: "K",
      type: "otherLayer",
      data: { title: "Bills" },
      position: { x: 600, y: 250 },
      ...nodeDefaults,
    },
  ];

  const initialEdges = [
    ...initialNodes
      .filter((node) => node.type === "primitiveNode")
      .map((node) => ({
        id: `${node.id}-F`,
        source: node.id,
        target: "F",
        type: "bezier",
        animated: true
      })),

    { id: "F-G", source: "F", target: "G", type: "bezier", targetHandle: Position.Left , animated: true},

    ...initialNodes
      .filter((node) => node.type === "otherLayer")
      .map((node) => ({
        id: `${node.id}-G`,
        source: node.id,
        target: "G",
        type: "bezier",
        targetHandle: Position.Right,
      })),
  ];


  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  const onConnect = useCallback(
    (params) =>
      setEdges((eds) => addEdge({ ...params, type: "smoothstep" }, eds)),
    []
  );

  return (
    <Container p={0} size={"xl"} w={"100%"} h={400} pos={'relative'}>
      <ReactFlow
        style={{ pointerEvents: "none" }}
        nodes={nodes}
        nodeTypes={nodeTypes}
        edges={edges}
        proOptions={{ hideAttribution: true }}
        onEdgesChange={onEdgesChange}
        onNodesChange={onNodesChange}
        zoomOnDoubleClick={false}
        zoomOnPinch={false}
        zoomOnScroll={false}
        panOnDrag={false}
        panOnScroll={false}
        onConnect={onConnect}
        fitView
      ></ReactFlow>
    </Container>
  );
};

// <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 424" fill="none" class="CubeSchema_CubeSchema__cube__svg__W1JSv"><path stroke="url(#cube-layers_svg__a)" stroke-linecap="round" stroke-linejoin="round" d="M176 16h-68.16c-18.526 0-27.789 0-34.814 3.72A32 32 0 0059.72 33.026C56 40.051 56 49.314 56 67.84v288.32c0 18.526 0 27.789 3.72 34.814a32.003 32.003 0 0013.306 13.307C80.051 408 89.314 408 107.84 408h56.176M304 16h68.16c18.526 0 27.789 0 34.814 3.72a32.003 32.003 0 0113.307 13.306C424 40.051 424 49.314 424 67.84v288.32c0 18.526 0 27.789-3.719 34.814a32.006 32.006 0 01-13.307 13.307C399.949 408 390.686 408 372.16 408h-56.159"></path><defs><linearGradient id="cube-layers_svg__a" x1="56" x2="436.8" y1="238.415" y2="238.415" gradientUnits="userSpaceOnUse"><stop stop-color="#7A77FF"></stop><stop offset="1" stop-color="#FF6492"></stop></linearGradient></defs></svg>
