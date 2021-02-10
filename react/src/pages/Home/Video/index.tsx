import React from 'react';

import { Container } from './styles';

type VideoProps = {
  refVideo: any;
};

const Video: React.FC<VideoProps> = ({ refVideo }) => {
  return (
    <Container ref={refVideo}>
      <video className="video" autoPlay muted loop>
        <source src="video/spiderman2.mp4" type="video/mp4" />
      </video>
    </Container>
  );
};

export default Video;
