import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import YouTube from 'react-youtube';

import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const Projects = () => {
  const { youtube } = useContext(PortfolioContext);
  const { videoId, id } = youtube;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const flameSize = (() => {
    const w = window.innerWidth;
    let size;
    if (w < 600) {
      size =
        w <= 540 ? { height: (w - 50) * (9 / 16), width: w - 50 } : { height: 287, width: 510 };
    } else if (w < 960) {
      size =
        w <= 720 ? { height: (w - 50) * (9 / 16), width: w - 50 } : { height: 377, width: 670 };
    } else if (w >= 960) {
      size = { height: 512, width: 910 };
    }
    return size;
  })();
  console.log('size', flameSize);
  const opts = {
    height: flameSize.height,
    width: flameSize.width,
    autoplay: 1,
  };

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
    <section id="youtube">
      <Container>
        <div className="youtube-wrapper">
          <Row key={id}>
            <Col lg={4} sm={12}>
              <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
                <div className="youtube-wrapper-video">
                  <YouTube
                    id={id}
                    containerclassName="youtube-wrapper__iframe"
                    videoId={videoId}
                    opts={opts}
                    onReady={(e) => e.target.playVideo()}
                  />
                </div>
              </Fade>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
