import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-white:#F2F2F2;
    --color-light-gray: #AEBCBF;
    --color-dark-gray: #454545;
    --color-black: #121212;
    --color-green: #2BD999;
    --color-blue: #3D90D9;
    --color-red:#F25C78;
    --color-orange: #F2AF5C;
    --border-color:#454545;
    --border-radius: 5px;
  }

*{
    box-sizing: border-box;
}

body{
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    font-size:112.5% ;
    color: var(--color-white);
    background-color: var(--color-black);
}

input, label, textarea{
    font-size: 1em;
}

`;
