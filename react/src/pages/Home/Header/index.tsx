import React from 'react';

import logoSpiderman from 'svg/logo-spiderman.svg';

import iconTwitter from 'svg/icon-twitter.svg';
import iconFacebook from 'svg/icon-facebook.svg';
import iconInstagram from 'svg/icon-instagram.svg';
import iconYoutube from 'svg/icon-youtube.svg';

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
            <img src={logoSpiderman} alt="Logo" />
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
          <img src={iconFacebook} alt="Facebook" />
          <img src={iconInstagram} alt="Instagram" />
          <img src={iconYoutube} alt="Youtube" />
          <img src={iconTwitter} alt="Twitter" />
        </div>
      </nav>
    </Container>
  );
};

export default Header;
