import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        background: var(--dark-grayish-blue);
    }
    :root {
        --white: #fff;
        --black: #000;
        --gray: #323a49;
        --light-cyan: #CEE3E9;
        --green: #52FFA8;
        --grayish-blue: #4e5d73;
        --dark-grayish-blue: #323a49;
        --dark-blue: #1f2632;
    }
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    
`