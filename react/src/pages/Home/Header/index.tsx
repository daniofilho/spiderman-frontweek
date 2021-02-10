import React from 'react';

import { LogoSpiderman } from 'assets';

import { IconTwitter, IconFacebook, IconInstagram, IconYoutube } from 'assets';

import { Container } from './styles';

type HeaderProps = {
  refLogo: any;
  refNavList: any;
  refNavSocial: any;
};

const Header: React.FC<HeaderProps> = ({ refLogo, refNavList, refNavSocial }) => {
  return (
    <Container>
      <nav className="navbar">
        <div className="nav-menu">
          <div className="logo" ref={refLogo}>
            <LogoSpiderman />
          </div>

          <ul className="nav-list" ref={refNavList}>
            <li>
              <a href="#!" className="nav-link">
                Home
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                Story
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                Wallpapers
              </a>
            </li>
            <li>
              <a href="#!" className="nav-link">
                #BeYourself
              </a>
            </li>
          </ul>
        </div>

        <div className="nav-social" ref={refNavSocial}>
          <IconFacebook />
          <IconInstagram />
          <IconYoutube />
          <IconTwitter />
        </div>
      </nav>
    </Container>
  );
};

export default Header;
