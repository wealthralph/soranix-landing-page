import {
  Badge,
  Container,
  Group,
  Paper,
  SimpleGrid,
  Space,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { motion } from "framer-motion";
import FlowSection from "./flowSection/FlowSection";


const PaperMotion = motion.create(Paper, { forwardMotionProps: true });


const AutomationSection = () => {


    const bankingProducts = [
      {
        id: 1,
        title: "Flows",
      },
      {
        id: 2,
        title: "Bots",
      },
      {
        id: 3,
        title: "Sentinels",
      },
    
    ];

    const bankingProductsMap = bankingProducts.map((i) => {
      return (
        <Stack key={i.id} align="center">
          <PaperMotion
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.99 }}
            shadow="xs"
            radius={"md"}
            h={70}
            w={70}
          >
            {" "}
          </PaperMotion>
          <Text ff={"monospace"} size="xs">
            {i.title}
          </Text>
        </Stack>
      );
    });


  return (
    <Container size={"xl"} my={100}>
      <Stack>
        <Badge radius={"sm"} variant="dot">
          Automation
        </Badge>
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
          <Title
            tt={"capitalize"}
            fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
          >
            Put Your Finances <br /> on Autopilot{" "}
          </Title>
          <Stack justify="flex-end">
            <Text>
              Take the stress out of managing your money. With Soranix's
              automation tools, you can effortlessly let our system do the heavy
              lifting even while you sleep.
              {/* —it’s a complete redefinition of how you interact with your money. */}
            </Text>
          </Stack>
        </SimpleGrid>
        {/* <Group>{bankingProductsMap}</Group> */}
      </Stack>
      <Space h={70} />
      <Stack w={"100%"}>
        {/* <FlowSection /> */}
      </Stack>
    </Container>
  );
};

export default AutomationSection;
