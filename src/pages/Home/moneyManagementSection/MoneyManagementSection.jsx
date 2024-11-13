import React, { useEffect, useState } from 'react'
import { AnimatePresence, LayoutGroup, motion } from "framer-motion"
import { Badge, Box, Container, Divider, Flex, Grid, Group, List, Paper, rem, SimpleGrid, Space, Stack, Text, ThemeIcon, Title } from '@mantine/core'
import { useInterval } from '@mantine/hooks'
import styles from "./MoneyManagementSection.module.css"
import BudgetSection from '../budgetSection/BudgetSection'
import IncomeSource from '../incomeSource/IncomeSource'
import ExpenseManagementSection from '../expenseManagementSection/ExpenseManagementSection'
import FinancialPlan from '../financialPlanSection/FinancialPlan'




const BoxMotion = motion.create(Box, { forwardMotionProps: true })
const PaperMotion = motion.create(Paper, { forwardMotionProps: true });


const MoneyManagementSection = () => {


  const expenseManagementData = [
    {
      id: 1,
      name: (
        <Text ta={"center"}>
          Smart <br /> Budegts
        </Text>
      ),
      features: [],
      title: "Budgets That Work as Hard as You Do",
      description:
        "Organize your income with custom budgets for every aspect of your life.",
      bg: "teal.9",
    },
    {
      id: 2,
      name: (
        <Text ta={"center"}>
          Income <br /> Source
        </Text>
      ),
      title: "Connect the Dots on Your Income",
      description:
        "Get a clear picture of every income source you have—whether from your job, freelance work, or investments.",
      features: [
        {
          id: 1,
          title: "Income Groups",
          description: "Categorize and organize different income streams.",
        },
        {
          id: 2,
          title: "Income Insight & Analytics",
          description:
            "Identify peak income periods and see how your earnings evolve month-to-month or year-to-year.",
        },
      ],
      bg: "pink.9",
    },
    {
      id: 3,
      name: (
        <Text ta={"center"}>
          Expense <br /> management
        </Text>
      ),
      title: "Expense Categories that Make Sense ",
      description:
        "Break down your expenses into clear categories that help you understand your spending habits and make smarter financial choices.",
      features: [],
      bg: "blue.9",
    },
    {
      id: 4,
      name: (
        <Text ta={"center"}>
          Financial <br /> Plans
        </Text>
      ),
      title: "Expense Categories that Make Sense ",
      description:
        "Break down your expenses into clear categories that help you understand your spending habits and make smarter financial choices.",
      features: [],
      bg: "blue.9",
    },

    {
      id: 5,
      name: (
        <Text ta={"center"}>
          Configurations <br /> Control
        </Text>
      ),
      title: "Expense Categories that Make Sense ",
      description:
        "Break down your expenses into clear categories that help you understand your spending habits and make smarter financial choices.",
      features: [],
      bg: "blue.9",
    },
  ];



  const bankingProductsMap = expenseManagementData.map((i) => {
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
          {i.name}
        </Text>
      </Stack>
    );
  });
  return (
    <Container w={"100%"} size={"xl"} my={50}>
      <Stack>
        <Badge radius={"sm"} color='grape' variant="dot">
          Money Controls
        </Badge>
        <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
          <Title
            tt={"capitalize"}
            fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
          >
            Money management Tools That Put Enterprise-Level Control at Your
            Fingertips{" "}
          </Title>
          <Stack justify="center">
            <Text>
              Take full command of your finances with easy-to-use tools that
              give you the control corporations have. From budgeting to payment
              configurations, it’s all designed to help you stay ahead and
              manage your money your way.
              {/* —it’s a complete redefinition of how you interact with your money. */}
            </Text>
          </Stack>
        </SimpleGrid>
        <Group>{bankingProductsMap}</Group>
      </Stack>
      <Space h={70} />
      <BudgetSection/>
      {/* <IncomeSource/> */}
      <ExpenseManagementSection/>
      <FinancialPlan/>
    </Container>
  );
}

export default MoneyManagementSection