import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;500;600&display=swap');

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    
}


`;

export const theme = {
  colors: {
    GrayBgColor: "#f3f3f3",
    GreenBgColor: "#55b566",
    Gray: "#666",
    Black: "#000",
    White: "#fff",
    red: "#d8000c",
  },
};

export default GlobalStyle;
