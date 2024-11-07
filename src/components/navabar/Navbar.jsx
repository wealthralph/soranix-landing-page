import {
  HoverCard,
  Group,
  Button,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  rem,
  useMantineTheme,
  Title,
  Container,
  Stack,
  Flex,
  Image,
  UnstyledButton,
  Grid,
} from "@mantine/core";
import {
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from "@tabler/icons-react";
import styles from "./Navbar.module.css";
import { logoBlack } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const UnstyledButtonMotion = motion.create(UnstyledButton, {
  forwardMotionProps: true,
});

const menuData = [
  {
    id: 1,
    title: "Products",
    submenu: [],
  },


  {
    id: 2,
    title: "Company",
  },
  {
    id: 3,
    title: "Pricing",
  },
];

function Navbar() {
  const theme = useMantineTheme();

  const navigate = useNavigate();

  const menuItems = menuData.map((i) => {
    return (
      <UnstyledButtonMotion
        key={i.id}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {i.submenu ? (
          <HoverCard width={520} shadow="md" withArrow openDelay={200}>
            <HoverCard.Target>
              <Group wrap="nowrap" gap={4}>
                <Title order={5} fw={"500"}>
                  {i.title}
                </Title>
                <IconChevronDown size={18} />
              </Group>
            </HoverCard.Target>
            <HoverCard.Dropdown >
              <Grid h={"100%"} >
                <Grid.Col h={"100%"} span={8}>
                  {" "}
                  hello
                </Grid.Col>
                <Grid.Col
                  h={"100%"}
                  span={4}
                  style={{
                    borderLeft:
                      "thin solid var(--mantine-color-default-border)",
                  }}
                >
                <Box h={300}></Box>
                </Grid.Col>
              </Grid>
            </HoverCard.Dropdown>
          </HoverCard>
        ) : (
          <Title order={5} fw={"500"}>
            {i.title}
          </Title>
        )}
      </UnstyledButtonMotion>
    );
  });

  return (
    <Container size={"xl"} pos={"relative"}>
      <nav className={styles.navbar_root}>
        <Flex h={"100%"} align={"center"} justify={"space-between"}>
          {/* Logo */}
          <Box>
            <Group gap={"xs"} align="baseline">
              <Image src={logoBlack} h={22} />
              <Title order={1}>soranix</Title>
            </Group>
          </Box>
          {/* Menu */}
          <Box>
            <Group gap={"xl"} align="baseline">
              {menuItems}
            </Group>
          </Box>
          {/* CTA */}
          <Box>
            <Button onClick={() => navigate("/early_access")}>
              Get Early Access
            </Button>
          </Box>
        </Flex>
      </nav>
    </Container>
  );
}

export default Navbar;
