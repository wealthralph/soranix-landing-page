import { AppShell, Stack,  } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Navbar from "../navabar/Navbar";
import { Outlet } from "react-router-dom";

function WebLayout() {
  // eslint-disable-next-line no-unused-vars
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header >
        <Stack h={'100%'} >

        <Navbar />
        </Stack>
      </AppShell.Header>

      <AppShell.Navbar py="md" px={4}></AppShell.Navbar>

      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  );
}

export default WebLayout;
