import styled from 'styled-components';

import colors from 'styles/common/colors';

import { fadeIndrawIn } from 'styles/common/animations';

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

    animation: ${fadeIndrawIn} 12s ease infinite alternate;
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
