import React, { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Box, Container, Divider, Flex, Grid, Group, Paper, SimpleGrid, Stack, Text, Title } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import styles from "./ExpenseManagementSection.module.css"




const BoxMotion = motion.create(Box, { forwardMotionProps: true })

const ExpenseManagementSection = () => {


  const expenseManagementData = [
    {
      id: 1,
      title: "Budgets",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "teal.9"
    },
    {
      id: 2,
      title: "Income Source",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "pink.9"
    },
    {
      id: 3,
      title: "Categories",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "blue.9"
    },
    {
      id: 4,
      title: "Alerts",
      description: "Plan, provision, and track your spending in one place — so every dollar goes where you want it to.",
      bg: "cyan.9"
    },

  ]

  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0); // For tracking the height of the indicator

  // Interval for cycling through the items every 2 seconds
  const interval = useInterval(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % expenseManagementData.length);
    setProgress(0); // Reset progress at each interval switch
  }, 5000);

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

  const currentItem = expenseManagementData[currentIndex];

  const expenseManagement = expenseManagementData.map((i, index) => {
    const isActive = currentIndex === index;

    return (
      <BoxMotion
        key={i.id}
        onMouseOver={isActive ? interval.stop : undefined}
        onClick={() => setCurrentIndex(index)}
        onMouseLeave={interval.start}
        display={'flex'}
        pos={'relative'}
        h={'100%'}
        p={'5px'}
        style={{ cursor: "pointer" }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
      >
        {
          isActive && <BoxMotion bg={i.bg} className={styles.animated_line} layoutId='tools-line'></BoxMotion>
        }
        <Title
          c={isActive ? "white" : "dimmed"}
          order={6}
          fw={"normal"}
          styles={{
            root: { zIndex: '2' }
          }}
        >
          {i.title}
        </Title>
      </BoxMotion>
    );
  });


  return (
    <Container w={'100%'} size={'lg'} >
      <Stack w={'100%'} gap={'xl'} >
        <Stack>
          <Box maw={500} w={'100%'} bg={'bl'}>
            <Title fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>Expense management tools so good, even corporations are envious.</Title>
            <Text c={'dimmed'} size="md">Our powerful suite of expense management features automates the hard work of budgeting and tracking your expenditures. </Text>
          </Box>
          <Group gap={'xs'} bg={'dark.8'} p={'4px'} w={'max-content'} style={{ borderRadius: "var(--mantine-radius-sm)" }} className={styles.expense_tools_slider_cont} >
            {expenseManagement}
          </Group>
        </Stack>
        <Grid gutter={'xl'}>
          <Grid.Col  span={{ base: 12, xs: 12, sm: 4 ,md: 5, lg:5}} order={{ base: 2, xs:2, sm: 1, lg: 1 }}>
            <AnimatePresence mode='wait'>
              <div>
                {currentItem.title} 
                {currentItem.description} 
              </div>
            </AnimatePresence>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 12, sm: 8, md: 7 , lg: 7 }} order={{ base: 1, xs:1, sm: 2, lg: 2 }}>
          <AnimatePresence mode='wait'>
              <BoxMotion 
              key={currentItem ? currentItem.id : ''}
              initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                  {
                    currentItem && <Paper bg={currentItem.bg}  h={400}>  {currentItem.title}</Paper>
                  }
              </BoxMotion>
            </AnimatePresence>
          </Grid.Col>
        </Grid>
      </Stack>
      {/* <Divider color='dark.7' />3 */}
    </Container>
  )
}

export default ExpenseManagementSection