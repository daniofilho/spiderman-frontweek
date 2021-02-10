import styled from 'styled-components';

import colors from 'styles/common/colors';

export const Container = styled.section`
  max-width: 1440px;
  margin: 0 auto;
  height: 85%;

  padding: 36px 16px;

  display: flex;
  flex-direction: row;
  align-items: center;

  overflow: hidden;

  @media (max-width: 991px) {
    flex-direction: column;
    height: auto;
    overflow: none;
  }

  .container-item-1 {
    max-width: 576px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .btn {
      display: inline-block;
      position: relative;
      margin-right: 16px;

      padding: 12px 32px;
      border-radius: 3px;

      transform: skewX(-10deg);
      text-transform: uppercase;
      background: linear-gradient(225deg, #ea1d22 0%, #b31317 100%);

      transition: 0.7s ease;

      &:before,
      &:after {
        content: '';
        display: block;
        position: absolute;

        width: 20%;
        height: 70%;

        border-radius: 3px;
        opacity: 0;

        transition: 0.7s ease;
      }
      &:after {
        top: -2px;
        left: -2px;

        border-top: 3px solid ${colors.white};
        border-left: 3px solid ${colors.white};
      }
      &:before {
        right: -2px;
        bottom: -2px;

        border-bottom: 3px solid ${colors.white};
        border-right: 3px solid ${colors.white};
      }

      &:hover {
        transform: skewX(-10deg) scale(1.05);
        &:after,
        &:before {
          opacity: 1;
        }
      }
    }

    .btn-secondary {
      display: inline-block;
      position: relative;

      padding: 10px 32px;
      border-radius: 3px;

      transform: skewX(-10deg);
      text-transform: uppercase;
      background: transparent;

      border: 2px solid ${colors.red};

      transition: 0.7s ease;

      &:after {
        content: '';
        display: block;
        position: absolute;
        top: -1px;
        left: -1px;

        width: 0%;
        height: 103%;

        z-index: -1;

        background: linear-gradient(225deg, #ea1d22 0%, #b31317 100%);

        transition: 0.7s ease;
      }

      &:hover {
        &:after {
          width: 102%;
        }
      }
    }

    @media (max-width: 991px) {
      order: 2;
      text-align: center;
      .btn,
      .btn-secondary {
        display: inline-block;
        margin: 10px auto;
      }

      .flex {
        justify-content: center;
        width: 100%;
      }
    }
  }

  .container-item-2 {
    .spiderman {
      width: 130%;
      transform: translate3d(-180px, 0, 0);

      @media (max-width: 991px) {
        width: 100%;
        transform: translate3d(0, 0, 0);
      }
    }
  }
`;
