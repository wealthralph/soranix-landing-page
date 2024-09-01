import { createTheme, MantineProvider } from "@mantine/core";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import WebLayout from "./components/layout/WebLayout.jsx";

const theme = createTheme({
  primaryColor: "grape",
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
