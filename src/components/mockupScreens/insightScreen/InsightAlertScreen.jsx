import {
  ActionIcon,
  BackgroundImage,
  Box,
  Button,
  Card,
  Chip,
  Flex,
  Group,
  Image,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import IPhoneMockup from "../../iphoneMockup/IphoneMockup";
import styles from "./insightAlertScreen.module.css";
import { iphoneBg, iphoneBg2, logoWhite, snapchat } from "../../../assets/images";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IconX } from "@tabler/icons-react";

const BoxMotion = motion.create(Box, { forwardMotionProps: true });

const InsightAlertScreen = () => {
  const notificationCardRef = useRef([]);
  const [visibleNotifications, setVisibleNotifications] = useState([]);
  const [stacked, setStacked] = useState(true);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true });

  const notificationData = Object.freeze([
    {
      id: 1,
      title: "Tesla Stock is up 10%",
      description:
        "Tesla shares have surged by 10% today. Consider reviewing your holdings and evaluating whether to adjust your portfolio based on this growth.",
      logo: logoWhite,
    },
    {
      id: 2,
      title: "Changes in your spending",
      description:
        "We've detected significant changes in your recent spending patterns. Analyze your expenses to ensure you're staying on track with your budget.",
      logo: logoWhite,
    },
    {
      id: 3,
      title: "Your  portfolio has grown",
      logo: logoWhite,
      description:
        "Good news! Your investment portfolio has increased in value this month. Review detailed insights to understand which assets performed well.",
    },
    {
      id: 4,
      title: "Impulse Spend Detected",
      description:
        "A large transfer to Amaka 🍑 was flagged and stopped by Soranix for your security. Please review and confirm if it was intentional.",
      logo: logoWhite,
    },
  ]);

  const snapChatNotification = {
    id: 1,
    title: "Amaka_Sexy🍑🍑",
    description: "Sent a chat",
    logo: snapchat,
  };

  useGSAP(() => {
    if (visibleNotifications.length > 0) {
      gsap.from(notificationCardRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [visibleNotifications]);

  useEffect(() => {


    if (!isInView) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < notificationData.length) {
        const currentNotification = notificationData[currentIndex];

        setVisibleNotifications((prev) => [currentNotification, ...prev]);

        currentIndex += 1;
      } else {
        console.log("All notifications pushed.");
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isInView]);

    useEffect(() => {
        gsap.set(".snapchat-notification", {opacity:0, y: 50});
      if (visibleNotifications.length === notificationData.length) {
        gsap.to(
          ".snapchat-notification",
          { opacity: 1, y: 0, duration: 0.5, ease: "power1.inOut", delay: 1 }
        );
      }
    }, [visibleNotifications]);

  const snapchatCard = (
    <Box
      className={`${styles.notification_card} snapchat-notification`}
      style={{
        position: stacked ? "absolute" : "relative",
        bottom: stacked ? "0" : "auto",
        top: stacked ? `${visibleNotifications.length * 27}px` : "auto",
      }}
    >
      <Flex align={"start"} gap={"xs"}>
        <Box className={styles.notification_logo} bg={"#FFFC00"}>
          <Image src={snapChatNotification?.logo} h={35} w={35} />
        </Box>
        <Box w={"100%"}>
          <Group justify="space-between">
            <Text size="sm" c={"white"} fw={500}>
              {snapChatNotification?.title}
            </Text>
            <Text c={"dimmed"} size="xs">
              {" "}
              9:36pm
            </Text>
          </Group>
          <Text lineClamp={2} size="xs" c={"gray.2"}>
            {snapChatNotification?.description}
          </Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box h={"100%"} w={"100%"} ref={containerRef}>
      <Box className={styles.real_time_insight_mockup}>
        <IPhoneMockup>
          <Box className={styles.screen} h={"100%"}>
            <BackgroundImage src={iphoneBg} h={"100%"} pos={"relative"}>
              <Box className={styles.notification_card_cont}>
                <Flex justify={"space-between"} align={"center"}>
                  <Text size="lg" c={"white"} fw={500}>
                    {stacked ? "Notification Center" : "Soranix"}
                  </Text>
                  <Group>
                    <Box
                      onClick={() => setStacked((prev) => !prev)}
                      className={styles.showMore}
                    >
                      {stacked ? "show more" : "show less"}
                    </Box>
                    <ActionIcon variant="light" size={"xs"}>
                      <IconX color="white" />
                    </ActionIcon>
                  </Group>
                </Flex>
                <AnimatePresence mode="wait">
                  <Stack gap={"xs"} pos={"relative"}>
                    {!stacked && snapchatCard}
                    {visibleNotifications.map((item, index) => {
                      return (
                        <NotificationCard
                          stacked={stacked}
                          setStacked={setStacked}
                          key={item.id}
                          index={index}
                          item={item}
                          notificationCardRef={notificationCardRef}
                          visibleNotifications={visibleNotifications}
                        />
                      );
                    })}
                    {stacked && snapchatCard}
                  </Stack>
                </AnimatePresence>
              </Box>
            </BackgroundImage>{" "}
          </Box>
        </IPhoneMockup>
      </Box>
    </Box>
  );
};

export default InsightAlertScreen;

const NotificationCard = ({
  stacked,
  item,
  index,
  notificationCardRef,
  visibleNotifications,
  setStacked
}) => {
  const scale = 1 - index * 0.05;
  const zIndex = visibleNotifications?.length - index;

  return (
    <BoxMotion
      className={styles.notification_card}
      data-stacked={stacked ? "stacked" : "column"}
      pos={stacked ? "absolute" : "relative"}
      key={item?.id}
      style={{
        top: stacked ? `${index * 10}px` : 0,
        transform: stacked ? `scale(${scale})` : "",
        zIndex,
      }}
      onClick={() => setStacked(false)}
      ref={(el) => (notificationCardRef.current[index] = el)}
    >
      <Flex align={"center"} justify={"space-between"} gap={"xs"}>
        <Box className={styles.notification_logo} bg={"black"}>
          <Image src={item?.logo} h={25} w={25} />
        </Box>
        <Box>
          <Group justify="space-between">
            <Text size="sm" c={"white"} fw={500}>
              {item?.title}
            </Text>
            <Text c={"dimmed"} size="xs">
              {" "}
              9:3{index + 1}pm
            </Text>
          </Group>
          <Text lineClamp={2} size="xs" c={"gray.2"}>
            {item?.description}
          </Text>
        </Box>
      </Flex>
    </BoxMotion>
  );
};
