import styled from 'styled-components';
import { keyframes } from 'styled-components';

import colors from 'styles/common/colors';

const logoSpiderman = keyframes`
  0% {
    stroke-width: 0;
    stroke-dasharray: 1 100;
    fill: transparent;
  }
  25% {
    stroke-width: 0.3;
    stroke-dasharray: 100 0;
    fill: transparent;
  }
  60%,
  100% {
    stroke-width: 0;
    fill: ${colors.whiteDark};
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;

  z-index: 999;

  display: flex;
  justify-content: center;
  align-items: center;

  background: linear-gradient(225deg, ${colors.red} 0%, ${colors.redDark} 100%);
  overflow: hidden;

  svg {
    max-width: 144px;
  }

  .logo-spiderman {
    fill: transparent;
    transition: 0.7s ease;

    animation: ${logoSpiderman} 12s ease infinite alternate;
  }

  .logo {
    transition: 0.3s ease;
    transform-origin: center center;
    transform-box: fill-box;
    &:hover {
      transform: scale(1.05);
    }
  }
`;
