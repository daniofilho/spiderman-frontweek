import { keyframes } from 'styled-components';

import colors from 'styles/common/colors';

const fadeIndrawIn = keyframes`
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

export { fadeIndrawIn };
