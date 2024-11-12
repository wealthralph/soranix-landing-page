
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


import { useMediaQuery } from "@mantine/hooks";
import "@xyflow/react/dist/style.css";


const FlowSection = () => {


     

        const isMobile = useMediaQuery(`(max-width: ${em(768)})`);


  return (
    <Container size={"xl"} my={50} p={0}>
      <Stack gap={"xl"}>
       
      </Stack>
    </Container>
  );
}

export default FlowSection