import { BaseEdge, getStraightPath } from '@xyflow/react';

const CustomeEdge = ({ sourceX, sourceY, targetX, targetY, ...props }) => {
  const [edgePath] = getStraightPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return <BaseEdge path={edgePath} {...props} />;
};

export default CustomeEdge