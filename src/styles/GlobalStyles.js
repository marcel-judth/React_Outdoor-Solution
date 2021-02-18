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
    font-size: 1.3rem;
}
p{
    font-size: 1.5rem;
}
@media (max-width: 1000px){
    p{
        font-size: 1rem;
    }
}
`;

export default GlobalStyles;
