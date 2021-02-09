import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-size: 62.5%;
    font-family: 'Inter', sans-serif;
}
a{
    text-decoration: none;
    font-size: 1.5rem;
}
p{
    font-size: 1.5rem;
}
`;

export default GlobalStyles;
