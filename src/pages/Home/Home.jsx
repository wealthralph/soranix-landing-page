import HeroSection from "./HeroSection";
import IntroSection from "./introSection/IntroSection";

import NetWorthSection from "./NetworthSection";
import VirtualCards from "./VirttualCards";
import PaymentSection from "./PaymentSection";
import AutomationSection from "./AutomationSection";
import { Container, Space } from "@mantine/core";
import AccountSection from "./accountSection/AccountSection";


const Home = () => {
  return (
    <Container fluid p={0} >
      <Space h={70} />

      <HeroSection />
      <IntroSection />
      <AccountSection />
      <NetWorthSection />
      <VirtualCards />
      <PaymentSection />
      <AutomationSection />
      <Space h={300} />
    </Container>
  );
};

export default Home;
