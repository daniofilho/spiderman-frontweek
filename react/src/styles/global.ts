import { createGlobalStyle } from 'styled-components';

import colors from './common/colors';
import spacing from './common/spacing';

export default createGlobalStyle`
  ${spacing}

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    font-smooth: always;

    font-family: "Mukta", sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    background: ${colors.blueDark};
  }

  #__next {
     width: 100%;
    height: 100vh;
  }

  img,
  svg {
    display: block;
    width: 100%;
  }

  a {
    text-decoration: none;
    color: ${colors.white};
  }

  p {
    font-size: 14px;
    color: ${colors.gray3};
    letter-spacing: 1px;
    line-height: 140%;
  }

  .flex {
    display: flex;
  }

  .w-auto {
    width: auto;
  }

  .align-items-center {
    align-items: center;
  }
`;
