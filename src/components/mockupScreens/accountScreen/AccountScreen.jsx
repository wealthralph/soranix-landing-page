import {
  ActionIcon,
  Avatar,
  Badge,
  Box,
  Button,
  CopyButton,
  Flex,
  Group,
  Indicator,
  NumberFormatter,
  rem,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { avatar1,  NG } from "../../../assets/images";
import {
  IconArrowDown,
  IconArrowUp,
  IconBellFilled,
  IconChevronRight,
  IconCopy,
  IconQuestionMark,
  IconSettings,
} from "@tabler/icons-react";import { Carousel } from "@mantine/carousel";
import styles from "./AccountScreen.module.css";
import { useCallback, useEffect, useState } from "react";

// Todo implement the Linked account screen

const AccountScreen = () => {
  const [embla, setEmbla] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [accountsData, setAccountsData] = useState([
    {
      id: 1,
    name: "Main Account",
      balance: "30000",
      accountNumber: "1234567890",
      type: "Deposit",
      bankName: "Sterling Bank",
    },
    {
      id: 2,
      name: "Japa Account ✈️",
      balance: "15000",
      accountNumber: "0987654321",
      type: "Deposit",
      bankName: "Sterling Bank",
    },
    {
      id: 3,
      name: "Savings",
      balance: "45000",
      accountNumber: "1122334455",
      type: "Virtual",
      bankName: "Wema Bank",
    },
    {
      id: 4,
      name: "Savings",
      balance: "45000",
      accountNumber: "1122334455",
      type: "Linked",
      bankName: "Wema Bank",
    },
  ]);

  // Handle dot button clicks to move the carousel
  const onDotButtonClick = useCallback(
    (index) => {
      if (embla) {
        embla.scrollTo(index);
      }
    },
    [embla]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback(() => {
    if (embla) {
      setSelectedIndex(embla.selectedScrollSnap()); // Ensure `selectedScrollSnap` is available
    }
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    onInit(embla);
    onSelect(embla);
    embla.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [embla, onInit, onSelect]);

  const gradients = {
    1: {
      backgroundColor: "hsla(0, 0%, 100%, 1)",
      backgroundImage: `radial-gradient(
      circle at 91% 11%,
      hsla(241.99999999999997, 100%, 88%, 0.66) 4.038772213247173%,
      transparent 37.2265767974114%
    ),
    radial-gradient(
      circle at 66% 37%,
      hsla(191.91176470588238, 100%, 88%, 1) 0%,
      transparent 63.33640956108327%
    ),
    radial-gradient(
      circle at 36% 87%,
      hsla(136.32352941176467, 100%, 88%, 1) 12.107536057085522%,
      transparent 63.33640956108327%
    )`,
      blendMode: "normal, normal, normal",
    },
    2: {
      backgroundColor: " hsla(132, 0%, 100%, 1)",
      backgroundImage: `radial-gradient(circle at 91% 11%, hsla(13, 100%, 88%, 0.66) 4.038772213247173%, transparent 37.2265767974114%), radial-gradient(circle at 66% 37%, hsla(323, 100%, 88%, 1) 0%, transparent 63.33640956108327%), radial-gradient(circle at 36% 87%, hsla(268, 100%, 88%, 1) 12.107536057085522%, transparent 63.33640956108327%)`,
      blendMode: "normal, normal, normal",
    },
    3: {
      backgroundColor: "  hsla(0, 0%, 60%, 1)",
      backgroundImage: ` radial-gradient(circle at 0% 50%, hsla(112.49999999999999, 37%, 91%, 1) 0%, transparent 50%), radial-gradient(circle at 40% 20%, hsla(27.999999999999577, 0%, 86%, 1) 0%, transparent 50%), radial-gradient(circle at 80% 0%, hsla(189.00000000000065, 0%, 100%, 1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsla(89.69696969696984, 100%, 92%, 1) 0%, transparent 50%)`,
      blendMode: "normal, normal, normal, normal",
    },
  };

  const total = accountsData.reduce(
    (acc, curr) => acc + parseFloat(curr.balance),
    0
  );

  const dotButtons = scrollSnaps?.map((_, index) => (
    <button
      onClick={() => onDotButtonClick(index)}
      data-selected={index === selectedIndex ? "true" : "false"}
      key={index}
      className={styles.dot_button}
    />
  ));

  const accountsCarousel = accountsData.map((account) => (
    <Carousel.Slide key={account.id}>
      <Box
        h={170}
        className={styles.account_display}
        style={{
          backgroundColor: gradients[account.id]?.backgroundColor,
          backgroundImage: gradients[account.id]?.backgroundImage,
          backgroundBlendMode: gradients[account.id]?.blendMode,
        }}
      >
        <Stack h={"100%"} justify="space-between">
          <Flex justify={"space-between"}>
            <Box>
              <Group gap={5}>
                <Avatar size={12} src={NG} />
                <Text tt={"capitalize"} size="sm">
                  {account.name}
                </Text>
              </Group>
            </Box>
            <Badge
              size="xs"
              variant="outline"
              color="dark"
              radius={"sm"}
              styles={{
                root: {
                  borderBlockStyle: "groove",
                },
              }}
            >
              {account.type}
            </Badge>
          </Flex>
          <Box>
            <Text tt={"capitalize"} fz={"xs"} my={-4}>
              Balance
            </Text>
            <Title fw={500} order={2}>
              <NumberFormatter
                thousandSeparator
                prefix="₦"
                value={account.balance}
              />
            </Title>
          </Box>
          <Box>
            <Group justify="space-between" align="end">
              <Box>
                <Text tt={"capitalize"} fz={8} my={-4}>
                  Wema Bank
                </Text>
                <Group gap={3}>
                  <Text tt={"capitalize"} size="xs">
                    {account.accountNumber}
                  </Text>
                  <CopyButton>
                    {(props) => <IconCopy style={{ width: rem(14) }} />}
                  </CopyButton>
                </Group>
              </Box>
                {account.type !== "Linked" && (
              <Group>
                  <ActionIcon
                    radius={"xl"}
                    size={"lg"}
                    variant="outline"
                    color="white"
                  >
                    <IconArrowDown />
                  </ActionIcon>
                <ActionIcon
                  radius={"xl"}
                  size={"lg"}
                  variant="outline"
                  color="white"
                >
                  <IconArrowUp />
                </ActionIcon>
              </Group>
                )}
            </Group>
          </Box>
        </Stack>
      </Box>
    </Carousel.Slide>
  ));

  return (
    <Box>
      <Stack gap="md">
        <Flex align="center" justify="space-between">
          <Group gap="xs">
            <Indicator
              inline
              size={15}
              offset={4}
              position="bottom-end"
              color="teal"
              withBorder
              label={<Text size={8}>2</Text>}
            >
              <Avatar src={avatar1} alt="User Avatar" size={28} />
            </Indicator>
            <Text size="md" fw="normal">
              Hi, Solomon
            </Text>
          </Group>
          <Group gap={3} align="baseline">
            <ActionIcon size="sm" variant="transparent">
              <IconQuestionMark size={18} color="var(--mantine-color-dimmed)" />
            </ActionIcon>
            <Indicator size={7} color="red" processing>
              <IconBellFilled size={18} color="var(--mantine-color-dimmed)" />
            </Indicator>
            <ActionIcon size="sm" variant="transparent">
              <IconSettings size={18} color="var(--mantine-color-dimmed)" />
            </ActionIcon>
          </Group>
        </Flex>
        <Stack>
          <Box>
            <Title order={6} fw="normal" tt="capitalize">
              Total Balance
            </Title>
            <Group align="end" gap={4}>
              <Title order={3}>
                <NumberFormatter thousandSeparator prefix="₦" value={total} />
              </Title>
            </Group>
          </Box>
        </Stack>

        <Carousel
          getEmblaApi={setEmbla}
          slideSize="93%"
          slideGap="md"
          align="start"
          withControls={false}
        >
          {accountsCarousel}
          <Carousel.Slide>
            <Box> hello</Box>
          </Carousel.Slide>
        </Carousel>
        <Flex justify="space-between">
          <Group gap="xs">{dotButtons}</Group>
          <Button size="compact-xs" variant="transparent" color="dark">
            {" "}
            Manage Accounts
          </Button>
        </Flex>
        <Box>
          <Flex justify={"space-between"} align={"center"}>
            <Title order={5} fw={500}>
              All Activities
            </Title>
            <Button
              variant="transparent"
              color="dark"
              size="compact-sm"
              rightSection={<IconChevronRight size={16} />}
            >
              See All
            </Button>
          </Flex>
        </Box>
      </Stack>
    </Box>
  );
};

export default AccountScreen;
