import { createGlobalStyle } from 'styled-components';



export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  .card-body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) =>theme.text};
   

    justify-content: center;
   
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`