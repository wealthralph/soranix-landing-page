import { Checkbox, createTheme, Divider, Input, MantineProvider, Paper } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import WebLayout from "./components/layout/WebLayout.jsx";
import EarlyAccess from "./pages/earlyAccess/EarlyAccess.jsx";

const theme = createTheme({
  primaryColor: "indigo",
  components: {
    Paper: Paper.extend({
    
  
    })
  },
  Divider: Divider.extend({
    defaultProps:{
      color: 'dark.7'
    }
  }),

});

const App = () => {
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
              <Route path="early_access"  element={<EarlyAccess/>} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
