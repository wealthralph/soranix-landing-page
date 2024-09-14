import { createTheme, Divider, MantineProvider, Paper } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import WebLayout from "./components/layout/WebLayout.jsx";

const theme = createTheme({
  primaryColor: "indigo",
  components: {
    Paper: Paper.extend({
      defaultProps: {
        bg:'dark.9',
      },
      styles:{
        root: {
          border: "thin solid var(--mantine-color-dark-7)"
        }
      }
    })
  },
  Divider: Divider.extend({
    defaultProps:{
      color: 'dark.1'
    }
  })
});

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider
        defaultColorScheme="dark"
        theme={theme}
        classNamesPrefix="web"
      >
        <Routes>
          <Route path="/">
            <Route element={<WebLayout />}>
              <Route index element={<Home />} />
            </Route>
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  );
};

export default App;
