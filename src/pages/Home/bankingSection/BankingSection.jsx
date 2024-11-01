import { Badge, Container, Group, Paper, SimpleGrid, Space, Stack, Text, Title } from "@mantine/core"
import { motion } from "framer-motion";
import AccountSection from "../accountSection/AccountSection";
import PaymentSection from "../paymentsSection/PaymentSection";
import VirtualCards from "../virtualCardSection/VirttualCards";
import SavingsSection from "../savingsSection/SavingsSection";


const PaperMotion = motion.create(Paper, { forwardMotionProps: true });

const BankingSection = () => {

    const bankingProducts = [
        {
          id: 1,
          title: "Accounts",
        },
        {
          id: 2,
          title: "Savings",
        },
        {
          id: 3,
          title: "Payments",
        },
        {
          id: 4,
          title: "Cards",
        },
        {
          id: 5,
          title: "Bills",
        },
      ];
    
      const bankingProductsMap = bankingProducts.map((i) => {
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
              {i.title}
            </Text>
          </Stack>
        );
      });

  return (
    <Container size={'xl'} >
          <Stack>
          <Badge radius={"sm"} variant="dot">
            Banking
          </Badge>
          <SimpleGrid cols={{ base: 1, xs: 1, sm: 2, md: 2 }}>
            <Title
              tt={"capitalize"}
              fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}
            >
              Not Just Banking. <br /> this is So Much More.
            </Title>
            <Stack justify="flex-end">
              <Text>
                Why settle for just banking when you can have so much more?
                We’ve reimagined what a financial platform can do with all the
                tools you need to make your money work harder, smarter, and
                faster.
                {/* —it’s a complete redefinition of how you interact with your money. */}
              </Text>
            </Stack>
          </SimpleGrid>
          <Group>{bankingProductsMap}</Group>
        </Stack>
        <Space h={70}/>
        <Stack w={'100%'}>
        <AccountSection />
        <SavingsSection />
        <PaymentSection/>
        <VirtualCards/>
        </Stack>
    </Container>
  )
}

export default BankingSection