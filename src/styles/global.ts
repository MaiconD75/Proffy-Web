import { createGlobalStyle } from 'styled-components';

import colors from './colors';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  };

  :root {
    font-size: 60%;
  };

  html, body, #root {
    height: 100vh;
  }

  body {
    background: ${colors.background}
  }

  #root {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  body,
  input,
  button,
  textarea {
    font-weight: 500;
    font-size: 1.6rem;
    font-family: Poppins;
    color: ${colors.textBase};
  }

  @media ( min-width: 700px ) {
    :root {
      font-size: 62.5%;
    }
  }
`;
