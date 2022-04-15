import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
    --color-black: #121212;
    --color-dark-gray: #454545;
    --color-light-gray: #AEBCBF;
    --color-white:#F2F2F2;
    --color-green: #2BD999;
    --color-blue: #3D90D9;
    --color-orange: #F2AF5C;
    --color-red:#F25C78;
    --border-color:#454545;
    --border-radius: 5px;
  }

*{
    box-sizing: border-box;
}

body{
    max-width: 768px;
    margin: 0 auto;
    padding: 0;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
    font-size:112.5% ;
    line-height: 1.5;
    color: var(--color-white);
    background-color: var(--color-black);
}

input, label, textarea{
    font-size: 1em;
}

`;
