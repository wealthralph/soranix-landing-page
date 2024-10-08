import HeroSection from "./HeroSection";
// import IntroSection from "./introSection/IntroSection";
import VirtualCards from "./virtualCardSection/VirttualCards";
import AutomationSection from "./AutomationSection";
import { Container, Space, Stack } from "@mantine/core";
import AccountSection from "./accountSection/AccountSection";
import NetWorthSection from "./networthSection/NetworthSection";
import ExpenseManagementSection from "./expenseSection/ExpenseManagementSection";
import PaymentSection from "./paymentsSection/PaymentSection";
import OsSection from "./osSection/OsSection";
import IntroSection from "../../components/intro/IntroSection";
import { ReactLenis, useLenis } from 'lenis/react'
import BankingSection from "./bankingSection/BankingSection";

const Home = () => {
  return (
    <Container fluid p={0} >
      <Space h={70} />
      {/* <Stack gap={50} w={'100%'}> */}
        <HeroSection />
        <OsSection/>
        <IntroSection part={1} title={"See the full Picture"} desc={'When You Can See All Your Money, You Can Keep More of It. '} features={[
          {
            name: "Banking",
            color: "var(--mantine-color-blue-6)"
          },
          {
            name: "Portfolio",
            color: "var(--mantine-color-orange-6)"
          },
        
        ]}/>
        <BankingSection/>
        <IntroSection part={2} title={"Track, Track, Track"} desc={'When You Can See All Your Money, You Can Keep More of It. '}/>
        <ExpenseManagementSection />
        <NetWorthSection />
        <VirtualCards />
        <PaymentSection />
        <AutomationSection />
      {/* </Stack> */}
      <Space h={300} />
    </Container>
  );
};

export default Home;
