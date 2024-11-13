import {
  Box,
  Container,
  em,
  Group,
  Highlight,
  Image,
  NumberFormatter,
  Paper,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import styles from "./PortfolioSyncSection.module.css";
import Marquee from "react-fast-marquee";
import { AnimatePresence, color, motion } from "framer-motion";
import {
  adobe,
  airbnb,
  amazon,
  apple,
  google,
  meta,
  msft,
  netflix,
  paypal,
  reddit,
  spotify,
  tesla,
} from "../../../assets/images";
import { useEffect, useRef, useState } from "react";
import SlotCounter from "react-slot-counter";
import { useMediaQuery } from "@mantine/hooks";

const BoxMotion = motion.create(Box, { forwardMotionProps: true });

const asset = [
  {
    id: 1,
    symbol: "GOOG",
    name: "Alphabet Inc. Class A",
    price: "120.0",
    change: 2.5,
    logo: google,
  },
  {
    id: 2,
    symbol: "META",
    name: "Meta Platforms, Inc.",
    price: "2000.0",
    change: 90.2,
    logo: meta,
  },
  {
    id: 3,
    symbol: "MSFT",
    name: "Microsoft Corporation",
    price: "418.16",
    change: 0.8,
    logo: msft,
  },
  {
    id: 4,
    symbol: "AMZN",
    name: "Amazon.com, Inc.",
    price: "188.80",
    change: 1.1,
    logo: amazon,
    color: "white",
  },
  {
    id: 5,
    symbol: "ABNB",
    name: "Airbnb, Inc.",
    price: "136.45",
    change: 0.05,
    logo: airbnb,
  },
  {
    id: 6,
    symbol: "AAPL",
    name: "Apple Inc.",
    price: "235.00",
    change: 200.2,
    logo: apple,
  },
  {
    id: 7,
    symbol: "NFLX",
    name: "Netflix, Inc.",
    price: "763.89",
    change: 0.03,
    logo: netflix,
  },
  {
    id: 8,
    symbol: "TSLA",
    price: "220.70",
    change: 45.0,
    name: "Tesla, Inc.",
    logo: tesla,
  },
  {
    id: 9,
    symbol: "PYPL",
    price: "80.90",
    change: 75.7,
    name: "Paypal, Inc.",
    logo: paypal,
  },
  {
    id: 10,
    symbol: "SPTY",
    price: "378.40",
    name: "Spotify Technology S.A.",
    change: 0.65,
    logo: spotify,
  },
  {
    id: 11,
    symbol: "ADBE",
    price: "494.90",
    change: 12.0,
    name: "Adobe Systems Incorporated",
    logo: adobe,
  },
  {
    id: 12,
    symbol: "RDDT",
    price: "50.90",
    name: "Reddit, Inc.",
    change: 5.0,
    logo: reddit,
  },
];

const PortfolioSyncSection = () => {
  const [indexAsset, setIndexAsset] = useState(asset[1]);
  const counterRef = useRef(null);
  const changeRef = useRef(null);

  const assets = asset.map((i, index) => {
    return (
      <Box key={index} className={styles.asset}>
        <Image src={i.logo} h={50} />
      </Box>
    );
  });

  const xDate = ["1D", "1W", "1M", "3M", "1Y", "5Y"].map((i, index) => (
    <Paper
      bg={index === 2 ? "teal" : "transparent"}
      px={"xs"}
      py={2}
      key={i}
      shadow={index === 2 ? "xs" : null}
    >
      <Text c={index === 2 ? "white" : "var(--mantine-color-dark-text)"}>
        {i}
      </Text>
    </Paper>
  ));

  const priceChange = ((indexAsset.change / parseFloat(indexAsset.price)) * 100)
    .toFixed(2)
    .toString();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndexAsset(asset[Math.floor(Math.random() * asset.length)]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isMobile = useMediaQuery(`(max-width: ${em(768)})`);

  return (
    <Container fluid  w={"100%"} p={0} my={50}>
      <Stack gap={"xl"}>
        <Box maw={500} w={"100%"}>
          <Stack gap={"xl"}>
            <Box>
              <Text size="xs" ff={"monospace"}>
                Portfolio Sync
              </Text>
              <Title
                tt={"capitalize"}
                fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
              >
                One Place for All <br /> Your Investments
              </Title>
            </Box>
            <Box>
              <Text c={"dimmed"}>
                <Text
                  span
                  tt={"capitalize"}
                  fz={"lg"}
                  fw={"bold"}
                  c={"var(--mantine-color-text)"}
                >
                  Stop juggling multiple apps{" "}
                </Text>
                <Highlight
                  span
                  highlight={["stocks", "ETfs", ""]}
                  highlightStyles={{
                    backgroundImage:
                      "linear-gradient(45deg, var(--mantine-color-cyan-5), var(--mantine-color-indigo-5))",
                    fontWeight: 700,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Bring all your investments from Stocks, ETfs  
                  across different platforms to Soranix giving you a unified
                  view of your investments .
                </Highlight>
              </Text>
            </Box>
          </Stack>
        </Box>
        {/* Portfolio Sync Display */}
        <Box className={styles.sync_display_wrapper} my={50}>
          <Box className={styles.sync_display_marquee}>
            <Marquee speed={50} autoFill>
              {assets}
            </Marquee>
            <Marquee speed={70} direction="right" autoFill>
              {assets}
            </Marquee>

            <Marquee speed={40} autoFill>
              {assets}
            </Marquee>
            {/* <Marquee speed={30} direction="right" autoFill>
              {assets}
            </Marquee> */}
          </Box>
          <Box className={styles.asset_detail_outer}>
            <Box className={styles.asset_detail_inner}>
              <Stack
                gap={"xs"}
                className={styles.asset_detail_heading}
                p={"xl"}
              >
                <AnimatePresence mode="wait">
                  <BoxMotion
                    key={indexAsset ? indexAsset.id : ""}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {indexAsset && (
                      <Group gap={"xs"}>
                        <Image h={18} src={indexAsset.logo} />
                        <Text>{indexAsset.name}</Text>
                      </Group>
                    )}
                  </BoxMotion>
                </AnimatePresence>
                <Group align="end" gap={4}>
                  <Title order={1}> $</Title>
                  <Title order={1}>
                    <SlotCounter ref={counterRef} value={indexAsset.price} />
                  </Title>
                </Group>
                <Text c={"teal"} fw={"bold"}>
                  <SlotCounter
                    ref={changeRef}
                    value={`$${priceChange}(${indexAsset.change}%)`}
                  />
                </Text>
              </Stack>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={564}
                height={156}
                fill="none"
                viewBox="0 0 564 156"
              >
                <path
                  stroke="var(--mantine-color-teal-filled)"
                  strokeWidth={2}
                  d="m1 21.54 3.903-4.396C8.806 12.749 16.61 3.959 24.417 1.649s15.61 1.863 23.416 7.418c7.806 5.556 15.611 12.496 23.417 10.78 7.806-1.715 15.611-12.085 23.417-4.265 7.805 7.82 15.611 33.832 23.416 49.45 7.806 15.618 15.611 20.844 23.417 20.126 7.806-.717 15.611-7.378 23.417-5.968 7.805 1.41 15.611 10.892 23.416 1.047 7.806-9.846 15.611-39.018 23.417-38.078s15.611 31.99 23.417 34.371c7.805 2.381 15.611-23.907 23.416-28.343 7.806-4.437 15.611 12.98 23.417 17.92 7.806 4.942 15.611-2.591 23.417-9.355 7.805-6.764 15.611-12.758 23.416-15.133 7.806-2.375 15.611-1.13 23.417 16.008s15.611 50.17 23.417 66.555c7.805 16.386 15.611 16.126 23.416 8.406 7.806-7.719 15.611-22.898 23.417-24.906 7.806-2.009 15.611 9.154 23.417 9.878 7.805.725 15.611-8.988 23.416-9.568 7.806-.58 15.611 7.973 23.417 19.044s15.611 24.66 23.417 32.042c7.805 7.382 15.611 8.557 23.416-.464 7.806-9.021 15.611-28.238 19.514-37.846L563 111.16"
                />
              </svg>
              <Group px={"md"} justify="space-between">
                {xDate}
              </Group>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Container>
  );
};

export default PortfolioSyncSection;
