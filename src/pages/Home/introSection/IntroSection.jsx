import { ActionIcon, Avatar, Box, Button, Code, ColorSwatch, Container, Divider, Flex, Grid, Group, Image,  NumberFormatter, Paper, Progress,SimpleGrid, Space, Stack, Text, Title } from "@mantine/core";
import { logoWhite } from "../../../assets/images";
import {  IconBellFilled, IconLayoutSidebarLeftCollapse, IconPlus, IconSearch } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { BarChart } from "@mantine/charts";
import styles from './IntroSection.module.css'



const IntroSection = () => {
  return (
    <Container size={"lg"} py={70}>
      <SimpleGrid  cols={{ base: 1,xs:1, sm:2, md: 2 }}>
        <Title tt={"capitalize"}  fz={{ base: 40, xs: "h1", sm: "h1", md: 40 }}>
          Not Just Banking. <br /> this is So Much More.
        </Title>
        <Stack justify="flex-end" >
          <Text>
            Why settle for just banking when you can have so much more? We’ve
            reimagined what a financial platform can do with all the tools you
            need to make your money work harder, smarter, and faster.
            {/* —it’s a complete redefinition of how you interact with your money. */}
          </Text>
        </Stack>
      </SimpleGrid>
      <Space h={70} />
      <Container p={0} size={'md'}>
        {/* <GraphicsDashboardDisplay /> */}
      </Container>
  
    </Container>
  );
};


export default IntroSection
