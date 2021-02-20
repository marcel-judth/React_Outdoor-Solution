import { createGlobalStyle } from 'styled-components';
import { Colors } from './Colors';

const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
}
a{
    text-decoration: none;
    font-size: 1.3rem;
    font-family: 'Montserrat', sans-serif;
}
p{
    font-size: 1.2rem;
    color: ${Colors.textColor}
}
h2{
    font-size: 2.5rem;
    font-weight: 400;
}
h3{
    font-size: 2rem;
    font-weight: 400;
}
button{
    font-family: 'Montserrat', sans-serif;
}
@media (max-width: 1000px){
    p{
        font-size: 1rem;
    }
    a{
        font-size: 1rem;
    }
}
`;

export default GlobalStyles;
