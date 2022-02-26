import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import GlobalStyle from "./styles/global-styles";

// Theme provider for css variable styled component
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/global-styles";
import Register from "./pages/Register";
import Professionsels from "./pages/Professionnels";
import Contact from "./pages/Contact";

import DetailsDoctor from "./pages/DetailsDoctor";

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/professionnels" element={<Professionsels />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/detailsdoctor/:id" element={<DetailsDoctor />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
};

export default App;
