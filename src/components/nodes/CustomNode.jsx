import {
  Handle,
  Position,
  useHandleConnections,
  useNodesData,
  useReactFlow,
} from "@xyflow/react";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Custom.module.css";
import {
  ActionIcon,
  Box,
  Combobox,
  Flex,
  Group,
  NumberInput,
  Paper,
  Space,
  Stack,
  Text,
  ThemeIcon,
  useCombobox,
} from "@mantine/core";
import CustomNodeWrapper from "./CustomNodeWrapper";
import {
  IconAccessPoint,
  IconBrackets,
  IconGripVertical,
  IconParentheses,
  IconPercentage,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";


function CustomHandle({ id, label, onChange }) {
  const connections = useHandleConnections({
    type: "target",
    id,
  });

  const nodeData = useNodesData(connections?.[0]?.source);

  // console.log(nodeData, "node data")/////////
  console.log(connections.length, "node ", { id });

  useEffect(() => {
    onChange(nodeData?.data ? nodeData.data.value : 0);
  }, [nodeData]);

  return (
    <div>
      <Handle
        type="target"
        position={Position.Left}
        id={id}
        className={styles.handle}
      />
      <label htmlFor="red" className="label">
        {label}
      </label>
    </div>
  );
}

export const SplitNode = ({ id, data, isConnectable }) => {
  const { updateNodeData } = useReactFlow();
  const [percentages, setPercentages] = useState([0]);

  // Get connections to the SplitNode
  const connections = useHandleConnections({
    type: "target",
    id: "hello",
  });

  const nodeData = useNodesData(connections?.[0]?.source);

  useEffect(() => {
    if (
      nodeData?.data?.value &&
      percentages.reduce((acc, val) => acc + val, 0) <= 100
    ) {
      const inputValue = nodeData.data.value;
      const newSplitValues = percentages.map(
        (p) => (inputValue * parseInt(p)) / 100
      );

      newSplitValues.forEach((splitValue, idx) => {
        updateNodeData(id, { [`output-${idx}`]: splitValue });
      });
    }
  }, [percentages, nodeData]);

  const handlePercentageChange = (index, value) => {
    const newPercentages = [...percentages];
    newPercentages[index] = Number(value);
    setPercentages(newPercentages);
  };

  const onDeletePercentage = (index) => {
    if (percentages.length > 1) {
      const newPercentages = percentages.filter((_, idx) => idx !== index);
      setPercentages(newPercentages);
    }
  };

  // Add a new percentage
  const onAddPercentage = () => {
    setPercentages([...percentages, 0]); // Add a new percentage (default 0)
  };

  return (
    <CustomNodeWrapper data={{ type: "Split Node", event: "Utilities" }}>
      <Handle
        type="target"
        position={Position.Left}
        id="hello"
        isConnectable={isConnectable}
        className={styles["react-flow__handle"]}
      />
      <CustomNodeWrapper.Body>
        <Box bg={"dark.8"} py={"xs"} w={300}>
          <Stack gap={3}>
            {percentages.map((percentage, idx) => (
              <div key={idx} className={styles.split_node_input_wrapper}>
                <div className={styles.split_node_input_container}>
                  <div className={styles.split_node_input_box}>
                    <ThemeIcon size={"sm"} variant="light" color="gray">
                      <IconPercentage size={15} />
                    </ThemeIcon>
                    <NumberInput
                      variant="unstyled"
                      size="xs"
                      rightSection={" "}
                      maw={"100%"}
                      w={"100%"}
                      value={percentage}
                      onChange={(e) => handlePercentageChange(idx, e)}
                      min={0}
                      max={100}
                    />

                    <Text px={"sm"} size="xs">
                      {data[`output-${idx}`] ? data[`output-${idx}`] : "N/A"}
                    </Text>
                  </div>
                  <Handle
                    type="source"
                    position={Position.Right}
                    id={`output-${idx}`}
                    className={styles["react-flow__handle"]}
                    isConnectable={connections.length <= 1}
                  />
                  <Text size="sm" ff={"monospace"}>
                    {idx}
                  </Text>
                  <div className={styles.split_node_input_delete}>
                    <ActionIcon
                      size={"xs"}
                      color="gray"
                      variant="transparent"
                      onClick={() => onDeletePercentage(idx)} // Delete the percentage
                    >
                      <IconTrash
                        color="var(--mantine-color-red-filled)"
                        stroke={1.5}
                      />
                    </ActionIcon>
                  </div>
                  <ThemeIcon size={"sm"} color="gray" variant="transparent">
                    <IconGripVertical color="gray" stroke={1.5} />
                  </ThemeIcon>
                </div>
              </div>
            ))}
            <Flex px={"sm"} justify={"end"}>
              <ActionIcon
                size={"sm"}
                color="dark"
                variant="subtle"
                onClick={onAddPercentage}
              >
                <IconPlus />
              </ActionIcon>
            </Flex>
          </Stack>
        </Box>
      </CustomNodeWrapper.Body>
    </CustomNodeWrapper>
  );
};


export const PrimitiveNodes = ({ id, data }) => {
  return (
    <Box   className={styles.primitive_node_outer} pos={'relative'}>
      <Box className={styles.primitive_node_inner}>
        <Text fz={11} c={'transparent'} className={styles.primitive_node_text}>{data?.title}</Text>
        <Handle
          className={styles["react-flow__handle"]}
          type="source"
          position={Position.Right}
        />
      </Box>
    </Box>
  );
};

export const SemanticLayerNode = ({ id, data }) => {
  return (
    <Box className={styles.semantic_node_outer}>
      <Box className={styles.primitive_node_inner}>
        {/* <MatrixRainCanvas/> */}
        <Text ta={'center'} fz={11} c={'transparent'} className={styles.primitive_node_text}>
          Semantic <br /> layer
        </Text>
      <Handle
        className={styles["react-flow__handle"]}
        type="target"
        position={Position.Left}
      />
      <Handle
        className={styles["react-flow__handle"]}
        type="source"
        position={Position.Right}
      />
      </Box>
    </Box>
  );
};

export const AiLayerNode = () => {
  return (
    <Box className={styles.semantic_node_outer}>
      <Box className={styles.primitive_node_inner}>
        <Text ta={'center'} fz={11} c={"transparent"} className={styles.primitive_node_text}>
Soranix <br /> AI        </Text>
        <Handle
          id="left"
          className={styles["react-flow__handle"]}
          type="target"
          position={Position.Left}
        />
        <Handle
          id="right"
          className={styles["react-flow__handle"]}
          type="target"
          position={Position.Right}
        />
      </Box>
    </Box>
  );
};

export const OthersLayerNodes = ({  data }) => {
  return (
    <Box className={styles.primitive_node_outer}>
      <Box className={styles.primitive_node_inner}>
        <Text fz={10} c={"transparent"} className={styles.primitive_node_text}>
          {data?.title}
        </Text>

        <Handle
          className={styles["react-flow__handle"]}
          type="source"
          position={Position.Left}
        />
      </Box>
    </Box>
  );
};


export const GroupNode = ({ id, data }) => {
  return (
    <Paper withBorder w={350} h={135} >
     
    </Paper>
  );
};




