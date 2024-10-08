import React, { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Box, Container, Divider, Flex, Grid, Group, List, Paper, rem, Space, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import styles from "./ExpenseManagementSection.module.css"
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons-react'




const BoxMotion = motion.create(Box, { forwardMotionProps: true })

const ExpenseManagementSection = () => {


  const expenseManagementData = [
    {
      id: 1,
      name: "Budgets",
      features: [],
      title: "Budgets That Work as Hard as You Do",
      description: "Organize your income with custom budgets for every aspect of your life.",
      bg: "teal.9"
    },
    {
      id: 2,
      name: "Income Source",
      title: "Connect the Dots on Your Income",
      description: "Get a clear picture of every income source you have—whether from your job, freelance work, or investments.",
      features: [
        {
          id: 1,
          title: 'Income Groups',
          description: "Categorize and organize different income streams."
        },
        {
          id: 2,
          title: 'Income Insight & Analytics',
          description: 'Identify peak income periods and see how your earnings evolve month-to-month or year-to-year.'
        }
      ],
      bg: "pink.9"
    },
    {
      id: 3,
      name: "Expense Categories",
      title: "Expense Categories that Make Sense ",
      description: "Break down your expenses into clear categories that help you understand your spending habits and make smarter financial choices.",
      features: [],
      bg: "blue.9"
    },
    {
      id: 4,
      name: "Financial  Plans",
      title: "Expense Categories that Make Sense ",
      description: "Break down your expenses into clear categories that help you understand your spending habits and make smarter financial choices.",
      features: [],
      bg: "blue.9"
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
          {i.name}
        </Title>
      </BoxMotion>
    );
  });


  return (
    <Container w={'100%'} size={'lg'} >
      <Stack w={'100%'} gap={'xl'} >
        <Stack>
          <Box maw={500} w={'100%'} bg={'bl'}>
            <Title fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>Money management tools so good, even corporations are envious.</Title>
            <Text c={'dimmed'} size="md">Our powerful suite of expense management features automates the hard work of budgeting and tracking your expenditures. </Text>
          </Box>
          <Group gap={'xs'} bg={'dark.8'} p={'4px'} w={'max-content'} style={{ borderRadius: "var(--mantine-radius-sm)" }} className={styles.expense_tools_slider_cont} >
            {/* {expenseManagement} */}
          </Group>
        </Stack>
        <Grid gutter={'xl'}>
          <Grid.Col span={{ base: 12, xs: 12, sm: 4, md: 5, lg: 5 }} order={{ base: 2, xs: 2, sm: 1, lg: 1 }}>
            <AnimatePresence mode='wait'>
              <Stack gap={'xs'}>
                <Title order={2}>{currentItem.title}</Title>
                <Text>{currentItem.description}</Text>
                <List
                  spacing="xs"
                  size="sm"
                  center
                  icon={
                    <ThemeIcon color="teal" size={24} radius="xl">
                      <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>Clone or download repository from GitHub</List.Item>
                  <List.Item>Install dependencies with yarn</List.Item>
                  <List.Item>To start development server run npm start command</List.Item>              
                  <List.Item
                    icon={
                      <ThemeIcon color="blue" size={24} radius="xl">
                        <IconCircleDashed style={{ width: rem(16), height: rem(16) }} />
                      </ThemeIcon>
                    }
                  >
                    Submit a pull request once you are done
                  </List.Item>
                </List>
              </Stack>
            </AnimatePresence>
          </Grid.Col>
          <Grid.Col span={{ base: 12, xs: 12, sm: 8, md: 7, lg: 7 }} order={{ base: 1, xs: 1, sm: 2, lg: 2 }}>
            <AnimatePresence mode='wait'>
              <BoxMotion
                key={currentItem ? currentItem.id : ''}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}>
                {
                  currentItem && <Paper bg={currentItem.bg} h={400}>  {currentItem.name}</Paper>
                }
              </BoxMotion>
            </AnimatePresence>
          </Grid.Col>
        </Grid>
      </Stack>
      <Space h={'lg'} />
      <Divider color='dark.7' />
    </Container>
  )
}

export default ExpenseManagementSection