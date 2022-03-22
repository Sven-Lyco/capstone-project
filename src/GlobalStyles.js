import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-size:112.5% ;
}

input, label, textarea{
    font-size: 1em;
}

`;
