import React, { useContext, useEffect, useState } from 'react';
import YouTube from 'react-youtube';

import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';



const Projects = () => {
  const { youtube } = useContext(PortfolioContext);
  const { videoId, id } = youtube;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <Container>
      <div className="youtube-wrapper">
        <YouTube videoId={videoId} id={id} />
      </div>
    </Container>
  );
};

export default Projects;
