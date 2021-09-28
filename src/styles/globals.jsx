import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
  }

  body {
    background: hsl(217, 28%, 15%);
    font-size: 14px;
    font-family: sans-serif;
  }
`