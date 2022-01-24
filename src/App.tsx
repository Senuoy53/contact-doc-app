import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global-styles";

// Theme provider for css variable styled component
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/global-styles";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
