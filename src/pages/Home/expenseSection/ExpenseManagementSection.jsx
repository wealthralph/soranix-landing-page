import React from 'react'
import { LayoutGroup, motion } from "framer-motion"




const BoxMotion = motion.create(Box, { forwardMotionProps: true })

const ExpenseManagementSection = () => {


  const expenseManagementData = [
    {
      id: 1,
      title: "Budgets",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "teal"
    },
    {
      id: 2,
      title: "Income Source",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "pink"
    },
    {
      id: 3,
      title: "Categories",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "yellow"
    },
    {
      id: 4,
      title: "Alerts",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "cyan"
    },

  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0); // For tracking the height of the indicator

  // Interval for cycling through the items every 2 seconds
  const interval = useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % expenseManagementData.length);
    setProgress(0); // Reset progress at each interval switch
  }, 2000);

  useEffect(() => {
    interval.start();
    return interval.stop;
  }, []);

  // Animation loop to update the height of the indicator
  useEffect(() => {
    let startTime;
    let animationFrame;

    const animateProgress = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Calculate progress in percentage based on the interval time (2000 ms)
      const newProgress = Math.min((elapsed / 2000) * 100, 100); // 100% max
      setProgress(newProgress);

      // Continue animating as long as it's not fully complete
      if (newProgress < 100) {
        animationFrame = requestAnimationFrame(animateProgress);
      }
    };

    // Start the animation loop
    animationFrame = requestAnimationFrame(animateProgress);

    return () => cancelAnimationFrame(animationFrame); // Cleanup
  }, [currentIndex]); // Restart the animation on index change

  const expenseManagement = expenseManagementData.map((i, index) => {
    const currentItem = expenseManagementData[currentIndex];
    const isActive = currentIndex === index;

    return (
      <BoxMotion
        layout
        key={i.id}
        mah={100}
        onMouseOver={isActive ? interval.stop : undefined}
        onClick={() => setCurrentIndex(index)}
        onMouseLeave={interval.start}
      >
        <Flex h={'100%'} gap={'x'}  >
          <Box className={styles.animated_line}  bg={i.bg}/>
          <Box  bg={'dark.9'} p={isActive ? "xs" : 0}>
            <Title
              styles={{
                root: {
                  whiteSpace: "normal",
                  textSizeAdjust: "100%",
                },
              }}
              order={6}
            >
              {i.title}
            </Title>
            {isActive && <Text c={'dimmed'} size="sm">{currentItem?.description}</Text>}
          </Box>
        </Flex>
      </BoxMotion>
    );
  });
  return (
    <Box maw={{ base: 500, xs: '100%', sm: "100%", md: 500, lg: 500 }}>
    <Stack>
      <Stack >
        <Title order={2}>Stay on Top  of Your Spending with powerful expense management tools </Title>
        <Text c={'dimmed'} size="md">Our powerful suite of expense management features automates the hard work of budgeting and tracking your expenditures. </Text>
      </Stack>
   
    </Stack>
  </Box>
  )
}

export default ExpenseManagementSection