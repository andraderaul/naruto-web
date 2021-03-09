import { createGlobalStyle } from 'styled-components'

export const colorsLight = {
  primary: '#f6894d',
  primaryLight: '#3E3E3E',
  secondary: '#F1E3D3',
  secondaryLight: '#efeff1',
  white: '#FFFFFF',
  black: '#000',
  body: '#fff6ed',
  opac4: 'hsla(0,0%,100%,0.2)',
  opac6: 'hsla(0,0%,100%,0.3)',
  gradientStart: '#997562',
  gradientEnd: '#b59a8d'
}

export const colorsDark = {
  primary: '#f6894d',
  primaryLight: '#F1E3D3',
  secondary: '#3E3E3E',
  secondaryLight: '#efeff1',
  white: '#FFFFFF',
  black: '#000',
  body: '#242424',
  opac4: 'hsla(0,0%,100%,0.2)',
  opac6: 'hsla(0,0%,100%,0.3)',
  gradientStart: '#f2d0a9',
  gradientEnd: '#f1e3d3'
}

export const theme = {
  colors: colorsDark,
  width: {
    border: '2px'
  },
  fontSize: {
    small: '1rem',
    medium: '1.2rem',
    large: '1.5rem',
    extraLarge: '3rem'
  },
  effect: {
    fadeIn: `
      animation: fadeIn ease 1s;
      @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    `,
    grow: `
      animation: grow ease 0.5s;
      @keyframes grow {
      0% {
        width: 2%;
      }
      `
  }
}

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
      background-color: ${theme.colors.body}
    }
`

export default GlobalStyle
