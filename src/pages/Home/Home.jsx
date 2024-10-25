import HeroSection from "./HeroSection";
// import IntroSection from "./introSection/IntroSection";
import VirtualCards from "./virtualCardSection/VirttualCards";
import AutomationSection from "./AutomationSection";
import { Container, Space, Stack } from "@mantine/core";
import AccountSection from "./accountSection/AccountSection";
import NetWorthSection from "./networthSection/NetworthSection";
import PaymentSection from "./paymentsSection/PaymentSection";
import OsSection from "./osSection/OsSection";
import IntroSection from "../../components/intro/IntroSection";
import { ReactLenis, useLenis } from 'lenis/react'
import BankingSection from "./bankingSection/BankingSection";
import PortfolioSection from "./portfolioSection/PortfolioSection";
import MoneyManagementSection from "./moneyManagementSection/MoneyManagementSection";

const Home = () => {
  return (
    <Container fluid p={0}>
      <Space h={70} />
      {/* <Stack gap={50} w={'100%'}> */}
      <HeroSection />
      <OsSection />
      <IntroSection
        part={1}
        title={"See the full Picture"}
        desc={"When You Can See All Your Money, You Can Keep More of It. "}
        features={[
          {
            name: "Banking",
            color: "var(--mantine-color-blue-6)",
          },
          {
            name: "Portfolio",
            color: "var(--mantine-color-orange-6)",
          },
        ]}
      />
      <BankingSection />
      <PortfolioSection />
      <IntroSection
        part={2}
        title={"Take Control of your Finances"}
        desc={
          "With Control Comes Confidence, and the Power to Shape Your Financial Future."
        }
        features={[
          {
            name: "Budgeting",
            color: "var(--mantine-color-blue-6)",
          },
          {
            name: "Portfolio",
            color: "var(--mantine-color-orange-6)",
          },
        ]}
      />
      <MoneyManagementSection />
      <IntroSection
        part={3}
        title={"See Beyond the Numbers"}
        desc={
          "Your finances tell a story—gain the insights to write your own financial narrative"
        }
        features={[
          {
            name: "Vector Search",
            color: "var(--mantine-color-blue-6)",
          },
          {
            name: "Networth",
            color: "var(--mantine-color-orange-6)",
          },
          {
            name: "Analytics",
            color: "var(--mantine-color-orange-6)",
          },
          {
            name: "Reports",
            color: "var(--mantine-color-orange-6)",
          },
        ]}
      />
      {/* <NetWorthSection /> */}

      {/* <AutomationSection /> */}
      {/* </Stack> */}
      <Space h={300} />
    </Container>
  );
};

export default Home;
