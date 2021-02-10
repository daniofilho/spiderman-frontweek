import React, { useRef, useEffect } from 'react';

import { TimelineMax, Back, Expo } from 'gsap';

import Header from './Header';
import Loader from './Loader';
import Video from './Video';
import Content from './Content';

const Home: React.FC = () => {
  // Animations
  const refLoader = useRef<any>(null);
  const refVideo = useRef<any>(null);
  const refLogo = useRef<any>(null);
  const refNavList = useRef<any>(null);
  const refNavSocial = useRef<any>(null);
  const refItem1 = useRef<any>(null);
  const refItem2 = useRef<any>(null);
  const refItem3 = useRef<any>(null);
  const refItem4 = useRef<any>(null);
  const refItem5 = useRef<any>(null);

  useEffect(() => {
    const tl = new TimelineMax();

    tl.fromTo(
      refLoader.current, // referência
      1, // tempo
      { width: '100%' }, // from
      { width: '0%', delay: 5, ease: Expo.easeInOut } // to
    )
      .fromTo(
        refVideo.current,
        2,
        { width: '0%', opacity: 0 },
        { width: '100%', opacity: 1, ease: Expo.easeInOut },
        '-=1' // adia a animação 1s
      )
      .fromTo(
        refLogo.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refNavList.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refNavSocial.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refItem1.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refItem2.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refItem3.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refItem4.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      )
      .fromTo(
        refItem5.current,
        0.7,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, ease: Back.easeOut.config(1.7) },
        '-=0.5'
      );
  }, []);

  return (
    <>
      <Header refLogo={refLogo} refNavList={refNavList} refNavSocial={refNavSocial} />
      <Loader refLoader={refLoader} />
      <Video refVideo={refVideo} />
      <Content
        refItem1={refItem1}
        refItem2={refItem2}
        refItem3={refItem3}
        refItem4={refItem4}
        refItem5={refItem5}
      />
    </>
  );
};

export default Home;
