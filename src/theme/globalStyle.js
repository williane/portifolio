import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./Colors";

const GlobalStyle = createGlobalStyle`
    #root{
        position:relative;
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Fira Code', sans-serif;
        
        color: ${defaultTheme.colors.white}
    }   
    body{
        background-color: ${defaultTheme.backgrounds.dark};
    }
`;

export default GlobalStyle;
