import { Handle, Position } from "@xyflow/react"
import { useCallback } from "react"
import styles from "./Custom.module.css"


const CustomNode = ({data, isConnectable}) => {

    // const onChange = useCallback((evt) => {
    //     console.log(evt.current.target)
    // }, [])

  return (
    <div className={styles.custom_node}>
        <div>{data.label}</div>
      <Handle type="source" position={Position.Right} isConnectable={isConnectable}/>
    </div>
  );
}

export default CustomNode