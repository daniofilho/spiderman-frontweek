import styled from 'styled-components';

import { fadeIndrawIn } from 'styles/common/animations';

import colors from 'styles/common/colors';

export const Container = styled.header`
  width: 100%;
  padding-top: 16px;

  .navbar {
    max-width: 1440px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .logo svg {
    width: 88px;

    path {
      animation: ${fadeIndrawIn} 12s ease infinite alternate;
      animation-delay: 6s;
    }
  }

  .nav-list {
    list-style: none;
    display: flex;

    li {
      margin-left: 24px;
    }

    @media (max-width: 991px) {
      display: none;
    }
  }

  .nav-link {
    display: inline-block;
    position: relative;

    padding: 8px 16px;

    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-weight: 200;
    color: ${colors.gray3};

    transition: 0.7s ease;

    &:after {
      content: '';
      display: block;
      position: absolute;

      left: 50%;
      top: -40px;

      width: 2px;
      height: 0px;
      background: linear-gradient(359.94deg, ${colors.red} 0.06%, rgba(225, 28, 33, 0) 101.91%);

      transition: 0.7s ease;
    }

    &:hover {
      color: ${colors.whiteLight};

      &:after {
        height: 40px;
      }
    }
  }

  .nav-social {
    display: flex;
    padding-right: 20px;

    svg {
      cursor: pointer;
      margin-left: 16px;
      width: 24px;

      path,
      circle {
        transition: 0.7s ease;
      }

      &:hover {
        path,
        circle {
          fill: ${colors.redLight};
          transform: translate3d(0, -3px, 0);
        }
      }
    }
  }
`;
