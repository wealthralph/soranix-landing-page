import { Handle, Position, useHandleConnections, useNodesData, useReactFlow } from "@xyflow/react"
import { useCallback, useEffect, useState } from "react"
import styles from "./Custom.module.css"
import { ActionIcon, Box, Flex,  NumberInput, Stack, Text, ThemeIcon } from "@mantine/core";
import CustomNodeWrapper from "./CustomNodeWrapper";
import { IconGripVertical, IconPercentage, IconPlus, IconTrash } from "@tabler/icons-react";


export const TriggerNode = ({ data, isConnectable }) => {

  // const onChange = useCallback((evt) => {
  //     console.log(evt.current.target)
  // }, [])

  return (
    <CustomNodeWrapper data={{
      type: "Credit Alert",
      event: "Account"
    }}>
      <Handle className={styles['react-flow__handle']} type="source" position={Position.Right} isConnectable={isConnectable} />
      <CustomNodeWrapper.Body>
        <Box p={'xs'} bg={'dark.9'}>
          This feels good
        </Box>
      </CustomNodeWrapper.Body>
    </CustomNodeWrapper>
  );
}


function CustomHandle({ id, label, onChange }) {
  const connections = useHandleConnections({
    type: 'target',
    id,
  });

  const nodeData = useNodesData(connections?.[0]?.source);

  // console.log(nodeData, "node data")/////////
  console.log(connections.length, "node ", { id })

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

  // Get data from the connected source node
  const nodeData = useNodesData(connections?.[0]?.source);

  // Calculate and update individual split values
  useEffect(() => {
    if (nodeData?.data?.value && percentages.reduce((acc, val) => acc + val, 0) <= 100) {
      const inputValue = nodeData.data.value;
      const newSplitValues = percentages.map((p) => (inputValue * parseInt(p)) / 100);

      // Update each connected output with its specific value
      newSplitValues.forEach((splitValue, idx) => {
        updateNodeData(id, { [`output-${idx}`]: splitValue });
      });
    }
  }, [percentages, nodeData]);

  // Handle percentage changes
  const handlePercentageChange = (index, value) => {
    const newPercentages = [...percentages];
    newPercentages[index] = Number(value);
    setPercentages(newPercentages);
  };

  // Delete percentage at a specific index
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
      <Handle type="target" position={Position.Left} id="hello" isConnectable={isConnectable} className={styles['react-flow__handle']}
      />
      <CustomNodeWrapper.Body>
        <Box bg={"dark.8"} py={"xs"} w={300}>
          <Stack gap={3}>
            {percentages.map((percentage, idx) => (
              <div
                key={idx}
                className={styles.split_node_input_wrapper}

              >

                <div className={styles.split_node_input_container}>


                  <div className={styles.split_node_input_box}>

                    <ThemeIcon size={"sm"} variant="light" color="gray">
                      <IconPercentage size={15} />
                    </ThemeIcon>
                    <NumberInput
                      variant="unstyled"
                      size="xs"
                      rightSection={' '}
                      maw={'100%'}
                      w={'100%'}
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
                    className={styles['react-flow__handle']}
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
                      <IconTrash color="var(--mantine-color-red-filled)" stroke={1.5} />
                    </ActionIcon>
                  </div>
                  <ThemeIcon size={"sm"} color="gray" variant="transparent">
                    <IconGripVertical color="gray" stroke={1.5} />
                  </ThemeIcon>
                </div>
              </div>
            ))}
            <Flex px={"sm"} justify={"end"}>
              <ActionIcon size={"sm"} color="dark" variant="subtle" onClick={onAddPercentage}>
                <IconPlus />
              </ActionIcon>
            </Flex>
          </Stack>
        </Box>
      </CustomNodeWrapper.Body>
    </CustomNodeWrapper>
  );
};

export const DisplayNode = () => {
  const connections = useHandleConnections({
    type: "target",
    id: "1", // Specific handle id for the connection
  });

  // Access the node data from the connected source node (which should be the SplitNode)
  const nodeData = useNodesData(connections?.[0]?.source);

  console.log(connections, "Connections to DisplayNode");
  console.log(nodeData, "Node data in DisplayNode");

  return (
    <div className={styles.custom_node}>
      <Handle type="target" position={Position.Left} id="1" className={styles.handle} />

      {/* Display only the individual splitValue from the connected output */}
      <div>
        {nodeData?.data?.[connections?.[0]?.sourceHandle]
          ? nodeData.data[connections?.[0]?.sourceHandle].toFixed(2)
          : 'No data'}
      </div>
    </div>
  );
};

export const TransferNode = ({id, data, isConnectable}) =>{
  return (
    <div>

    </div>
  )
}