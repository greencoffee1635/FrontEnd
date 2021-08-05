import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
    ${reset};
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
    body * {
        font-family: 'Montserrat', sans-serif;
        letter-spacing: -1.5%;
    }
    html {
        font-size: 62.5%;
    }
`;

export default GlobalStyle;
