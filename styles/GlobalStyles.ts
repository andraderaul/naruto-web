import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#fff',
    white: '#FFFFFF',
    black: '#000',
    gray: '#3E3E3E',
    grayLight: '#efeff1',
    grayBody: '#242424',
    orange: '#f6894d',
    orangeLight: '#F1E3D3',
    opac4: 'hsla(0,0%,100%,0.2)',
    opac6: 'hsla(0,0%,100%,0.3)',
  },
  width: {
    border: '2px',
  },
  fontSize: {
    small: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
  },
};

const GlobalStyle = createGlobalStyle`
    :root{
    }

    * {
        margin: 0;
        padding: 0;
        outline: none;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Inter','Roobert', 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    body {
      background-color: #242424
    }
`;

export default GlobalStyle;
