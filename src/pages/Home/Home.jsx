import HeroSection from "./HeroSection";
import IntroSection from "./introSection/IntroSection";
import VirtualCards from "./VirttualCards";
import PaymentSection from "./PaymentSection";
import AutomationSection from "./AutomationSection";
import { Container, Space, Stack } from "@mantine/core";
import AccountSection from "./accountSection/AccountSection";
import NetWorthSection from "./networthSection/NetworthSection";
import ExpenseManagementSection from "./expenseSection/ExpenseManagementSection";


const Home = () => {
  return (
    <Container fluid p={0} >
      <Space h={70} />
      <Stack gap={50} w={'100%'}>

        <HeroSection />
        <IntroSection />
        <AccountSection />
        <ExpenseManagementSection />
        <NetWorthSection />
        <VirtualCards />
        <PaymentSection />
        <AutomationSection />
      </Stack>
      <Space h={300} />
    </Container>
  );
};

export default Home;
