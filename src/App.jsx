import {
  Checkbox,
  createTheme,
  Divider,
  Input,
  MantineProvider,
  Paper,
} from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import WebLayout from "./components/layout/WebLayout.jsx";
import EarlyAccess from "./pages/earlyAccess/EarlyAccess.jsx";
import posthog from "posthog-js";
import { useEffect } from "react";

const theme = createTheme({
  primaryColor: "indigo",
  components: {
    Paper: Paper.extend({}),
  },
  Divider: Divider.extend({
    defaultProps: {
      color: "dark.7",
    },
  }),
});

const App = () => {

  useEffect(() => {
    posthog.init("phc_plHrpcMhzRVmnsI4YSLuN5kMOyIEInIx63gpDQrxz63", {
      api_host: "https://us.i.posthog.com",
      person_profiles: "identified_only", // or 'always' to create profiles for anonymous users as well
    });
    console.log("sending this event ")
  }, []);

  return (
    <BrowserRouter>
      <MantineProvider
        defaultColorScheme="light"
        theme={theme}
        classNamesPrefix="web"
      >
        <Routes>
          <Route path="/">
            <Route element={<WebLayout />}>
              <Route index element={<Home />} />
            </Route>
            <Route path="early_access" element={<EarlyAccess />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
