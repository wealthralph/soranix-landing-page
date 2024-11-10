import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  CloseButton,
  Container,
  Flex,
  Grid,
  Group,
  Paper,
  Radio,
  Select,
  SimpleGrid,
  Space,
  Stack,
  Text,
  TextInput,
  Input,
  Title,
  Checkbox,
  AppShell,
} from "@mantine/core";
import { IconArrowBack } from "@tabler/icons-react";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import useMultiStepForm from "../../hooks/useMultiStep";
import { occupations } from "../../configs/occupation";
import { AnimatePresence, motion } from "framer-motion";
import { countries } from "../../configs/countries";
import styles from "./EarlyAccess.module.css";

const BoxMotion = motion.create(Box, { forwardMotionProps: true });
const PaperMotion = motion.create(Paper, { forwardMotionProps: true });

const InputModified = TextInput.withProps({
  radius: "md",
});

const EarlyAccess = () => {
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { isLoading, isValid },
    control,
    watch,
    register,
  } = useForm();

  const onSubmit = (data) => {
    try {
      console.log(data, "this is the sacrifice");
    } catch (error) {
      console.log(error);
    }
  };

  const steps = [
    {
      id: 1,
      title: "Bio",
      component: Step1,
    },
    {
      id: 2,
      title: "Bingo",
      component: Step2,
    },
  ];
  const { index, isFirstStep, isLastStep, prev, next } = useMultiStepForm(
    steps.length
  );

  const Component = steps[index - 1].component;

  return (
    <>
      <AppShell header={{ height: 60 }} padding="sm">
        <AppShell.Header>
          <Flex align={"center"} justify={"space-between"} h={"100%"} p={"md"}>
            <Group>
              <CloseButton
                onClick={() => navigate("/")}
                icon={<IconArrowBack />}
                variant="transparent"
                size={"sm"}
              />
              <Text>Back</Text>
            </Group>
          </Flex>
        </AppShell.Header>

        <AppShell.Main className={styles.wrapper}>
          <Container fluid p={0} className={styles.body} my={70}>
            <PaperMotion
              maw={600}
              mx={"auto"}
              layout={"size"}
              transition={"spring"}
              w={"100%"}
              radius={"md"}
              bg={"white"}
              p={"md"}
            >
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  <BoxMotion
                    key={steps[index - 1].id}
                    initial={{ x: 10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -10, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Component
                      register={register}
                      control={control}
                      watch={watch}
                    />
                  </BoxMotion>
                </AnimatePresence>
                <Space h={40} />
                <Group mt="md" justify="space-between">
                  {!isFirstStep ? (
                    <Button
                      variant="default"
                      type="button"
                      onClick={prev}
                      size="xs"
                    >
                      Back
                    </Button>
                  ) : (
                    <Box />
                  )}
                  <Button
                    size="xs"
                    onClick={isLastStep ? null : next}
                    type={isLastStep ? "submit" : "button"}
                  >
                    {isLastStep ? "Submit" : "Next"}
                  </Button>
                </Group>
              </form>
            </PaperMotion>
          </Container>
        </AppShell.Main>
      </AppShell>
    </>
  );
};

export default EarlyAccess;

const Step1 = ({ register, control, watch }) => {
  const employmentStatus = [
    {
      label: "Employed",
      value: "employed",
    },
    {
      label: "Unemployed",
      value: "unemployed",
    },
    {
      label: "Self Employed",
      value: "self-employed",
    },
  ].map((item) => (
    <Radio.Card radius="md" value={item.value} key={item.value} p={5}>
      <Group gap={"xs"} wrap="nowrap" align="center">
        <Radio.Indicator variant="filled" size="xs" />
        <Text size="sm" style={{ textWrap: "nowrap" }}>
          {item.label}
        </Text>
      </Group>
    </Radio.Card>
  ));

  const status = watch("employmentStatus");

  const countriesData = Object.entries(countries).map((i) => {
    return i[1];
  });

  return (
    <Stack>
      <Box>
        <Title order={2}>Tell us a bit about yourself</Title>
        <Text> Feel the thrill of, faster and better payment </Text>
      </Box>
      <Stack>
        <SimpleGrid cols={{ base: 1, sm: 1, md: 2 }}>
          <InputModified
            label={"First Name"}
            name="firstName"
            placeholder="First Name"
            required
            {...register("firstName")}
          />
          <InputModified
            label={"Last Name"}
            name="lastName"
            placeholder="Last Name"
            required
            {...register("lastName")}
          />
        </SimpleGrid>
        <Stack>
          <InputModified
            label={"Email"}
            placeholder="Enter Email"
            name="email"
            type="email"
            required
            {...register("email")}
          />

          <Controller
            name="employmentStatus"
            control={control}
            render={({ field }) => {
              return (
                <Radio.Group
                  label="Employment Status "
                  required
                  value={field.value}
                  onChange={field.onChange}
                >
                  <SimpleGrid cols={{ base: 2, sm: 2, md: 3 }}>
                    {employmentStatus}
                  </SimpleGrid>
                </Radio.Group>
              );
            }}
          />
          <AnimatePresence mode="wait">
            {status === "employed" && (
              <Select
                label="Occupation"
                name="occupation"
                placeholder="Select your occupation"
                data={occupations.map((i) => i.label)}
                required
                {...register("occupation")}
              />
            )}
          </AnimatePresence>

          <Controller
            name="country"
            control={control}
            render={({ field }) => {
              return (
                <Select
                  label="Country"
                  placeholder="Country of residence"
                  data={countriesData}
                  name="country"
                  searchable
                  required
                  value={field.value}
                  onChange={field.onChange}
                />
              );
            }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

const Step2 = ({ register, control }) => {
  const [selectedFinancialGoals, setSelectedFinancialGoals] = useState([]);

  const handleCheckboxChange = (value) => {
    if (selectedFinancialGoals.includes(value)) {
      // Deselect if already selected
      setSelectedFinancialGoals((prev) =>
        prev.filter((goal) => goal !== value)
      );
    } else if (selectedFinancialGoals.length < 3) {
      // Only add if less than 3 selected
      setSelectedFinancialGoals((prev) => [...prev, value]);
    }
  };

  const financialGoals = [
    {
      id: 1,
      title: "Build an Emergency Fund",
    },

    {
      id: 3,
      title: "Budgeting and Managing Daily Expenses",
    },
    {
      id: 4,
      title: "Grow My Investments",
    },
    {
      id: 5,
      title: "Reduce Debt",
    },
    {
      id: 6,
      title: "Plan for Retirement",
    },
    {
      id: 7,
      title: "Manage Multiple Income Sources",
    },
    {
      id: 8,
      title: "Achieve Financial Freedom",
    },
    {
      id: 9,
      title: "Organize my finances",
    },
    {
      id: 10,
      title: "Improve my savings",
    },
  ];

  const financialReview = ["Daily", "Weekly", "Monthly", "Rarely"];

  const financialPainPoints = [
    { id: 1, title: "Scattered Financial Data" },
    { id: 2, title: "Difficulty tracking income sources" },
    { id: 3, title: "No access to analytics on spending/investments" },
    { id: 4, title: "Too many manual tasks" },
    { id: 5, title: "Lack of insight into financial growth" },
    { id: 6, title: "Difficulty in automating finances" },
  ];

 const features = [
   { id: 1, title: "Personal Banking" },
   { id: 2, title: "Portfolio Management" },
   { id: 3, title: "Money Controls" },
   { id: 4, title: "Virtaul Card" },
   { id: 5, title: "Soranix AI" },
   { id: 6, title: "Flows Automation" },
   { id: 7, title: "Payments" },
 ];


  return (
    <Stack>
      <Box>
        <Title order={2}>Finances</Title>
        <Text> Feel the thrill of, faster and better payment </Text>
      </Box>
      <Stack>
        <Controller
          name="financialGoals"
          rules={{ required: true }}
          control={control}
          render={({ field }) => {
            return (
              <Checkbox.Group
                label={"What are your main financial goals?"}
                required
                description="Select 3 that apply."
                onChange={(values) => {
                  setSelectedFinancialGoals(values);
                  field.onChange(values);
                }}
                value={field.value}
                inputWrapperOrder={["label", "input", "description"]}
              >
                <Group gap="xs">
                  {financialGoals.map((item) => (
                    <Checkbox.Card
                      className={styles.checkbox}
                      radius="md"
                      w={"fit-content"}
                      p={5}
                      value={item.title}
                      key={item.id}
                      data-dis={
                        selectedFinancialGoals.length >= 3 &&
                        !selectedFinancialGoals.includes(item.title)
                      }
                      disabled={
                        selectedFinancialGoals.length >= 3 &&
                        !selectedFinancialGoals.includes(item.title)
                      }
                      onClick={() => handleCheckboxChange(item.title)}
                    >
                      <Group gap="xs" wrap="nowrap" align="center">
                        <Checkbox.Indicator variant="filled" size="xs" />
                        <Text size="sm" style={{ textWrap: "nowrap" }}>
                          {item.title}
                        </Text>
                      </Group>
                    </Checkbox.Card>
                  ))}
                </Group>
              </Checkbox.Group>
            );
          }}
        />
        {/* <Controller
          name="review"
          control={control}
          render={({ field }) => {
            return (
              <Radio.Group
                label="How frequently do you review your finances? "
                required
                value={field.value}
                onChange={field.onChange}
              >
                <SimpleGrid cols={{ base: 2, sm: 2, md: 4 }}>
                  {financialReview.map((item) => (
                    <Radio.Card radius="md" value={item} key={item} p={5}>
                      <Group gap={"xs"} wrap="nowrap" align="center">
                        <Radio.Indicator variant="filled" size="xs" />
                        <Text size="sm" style={{ textWrap: "nowrap" }}>
                          {item}
                        </Text>
                      </Group>
                    </Radio.Card>
                  ))}
                </SimpleGrid>
              </Radio.Group>
            );
          }}
        /> */}
        <Controller
          name="painPoints"
          control={control}
          render={({ field }) => {
            return (
              <Checkbox.Group
                label={
                  "What are your current challenges in managing your finances?"
                }
                required
                value={field.value}
                onChange={field.onChange}
              >
                <Group gap={"xs"}>
                  {financialPainPoints.map((i) => (
                    <Checkbox.Card
                      radius="md"
                      w={"fit-content"}
                      p={5}
                      key={i.id}
                      className={styles.checkbox}
                      value={i.title}
                    >
                      <Group gap="xs" wrap="nowrap" align="center">
                        <Checkbox.Indicator variant="filled" size="xs" />
                        <Text size="sm" style={{ textWrap: "nowrap" }}>
                          {i.title}
                        </Text>
                      </Group>
                    </Checkbox.Card>
                  ))}
                </Group>
              </Checkbox.Group>
            );
          }}
        />
        <Controller
          name="manageFinances"
          control={control}
          render={({ field }) => {
            return (
              <Select
                label="How do you currently manage your finances?"
                name="manageFinances"
                placeholder="Select one"
                onChange={field.onChange}
                radius={"md"}
                value={field.value}
                data={[
                  "Traditional Banking",
                  "Multiple Bank Accounts",
                  "Digital Wallets ",
                  "Spreadsheets",
                  "Budegtting Apps",
                  "None",
                ]}
                required
              />
            );
          }}
        />

        <Controller
          name="soranixFeatures"
          control={control}
          render={({ field }) => {
            return (
              <Checkbox.Group
                label={"Which features are you most interested in for Soranix?"}
                required
                value={field.value}
                onChange={field.onChange}
              >
                <Group gap={"xs"}>
                  {features.map((i) => (
                    <Checkbox.Card
                      radius="md"
                      w={"fit-content"}
                      p={5}
                      key={i.id}
                      className={styles.checkbox}
                      value={i.title}
                    >
                      <Group gap="xs" wrap="nowrap" align="center">
                        <Checkbox.Indicator variant="filled" size="xs" />
                        <Text size="sm" style={{ textWrap: "nowrap" }}>
                          {i.title}
                        </Text>
                      </Group>
                    </Checkbox.Card>
                  ))}
                </Group>
              </Checkbox.Group>
            );
          }}
        />
      </Stack>
    </Stack>
  );
};
