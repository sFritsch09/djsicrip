import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

// export const theme = {
// 	color: '#006d77',
// };

// export const invertTheme = styled.css`
// 	color: #edf6f9;
// `;

export default GlobalStyle;
