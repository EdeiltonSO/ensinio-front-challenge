import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Inter, sans-serif;
        font-weight: 400;
    }

    body {
        color: ${props => props.theme['neutral-100']};
        -webkit-font-smoothing: antialiased;
        overflow-x: hidden;
    }

    img, button {
        user-select: none;
    }

    body, input, textarea, button {
        font: 400 1rem Inter, sans-serif;
    }
`;