import { createTheme, MantineProvider } from "@mantine/core";
import Navbar from "./component/navabar/Navbar";
import { Route, Routes } from "react-router-dom";
import WebLayout from "./component/layout/webLayout";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";

const theme = createTheme({
  primaryColor: "cyan",
});

const App = () => {
  return (
    <BrowserRouter>
      <MantineProvider
        defaultColorScheme="auto"
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
