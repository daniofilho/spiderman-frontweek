import React from 'react';

import Tilt from 'react-parallax-tilt';

import iconPS from 'svg/ps.svg';
import iconMarvel from 'svg/marvel.svg';

import { Container } from './styles';

type ContentProps = {
  refItem1: any;
  refItem2: any;
  refItem3: any;
  refItem4: any;
  refItem5: any;
};

const Content: React.FC<ContentProps> = ({ refItem1, refItem2, refItem3, refItem4, refItem5 }) => {
  return (
    <Container>
      <div className="container-item-1" ref={refItem1}>
        <div className="px-1">
          <img src="img/spider-man-text.png" alt="Spider Man" />
        </div>

        <p className="my-2" ref={refItem2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget pharetra odio, id
          varius ipsum. Maecenas sit amet convallis magna. Donec risus ante, vehicula a volutpat sit
          amet, semper ut ligula. Vestibulum fringilla venenatis tempus. Donec rutrum, orci sit amet
          interdum malesuada.
        </p>

        <div ref={refItem3}>
          <a href="#!" className="btn">
            Pre-order now
          </a>
          <a href="#!" className="btn-secondary ml-2">
            Watch the teaser
          </a>
        </div>

        <div className="flex align-items-center mt-2" ref={refItem4}>
          <img src={iconPS} className="w-auto" alt="Playstation" />
          <img src={iconMarvel} className="ml-2 w-auto" alt="Marvel" />
        </div>
      </div>

      <div className="container-item-2" ref={refItem5}>
        <Tilt perspective={2000} scale={1.05}>
          <img src="img/spider-man.png" alt="Spider Man" className="spiderman" />
        </Tilt>
      </div>
    </Container>
  );
};

export default Content;
