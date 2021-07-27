import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="20px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'I love doing programming , so far i was doing some backend Nodejs projects and also actively participating in contests in codechef and leetcode and went upto round 2 in Google code Jam 2021 ! '}

                </p>
                <b><a href = "https://www.codechef.com/users/ajai_c_r_7">CLICK HERE TO VIEW CODECHEF PROFILE </a></b>
                <b><a href = "https://leetcode.com/ajai_cr_7/"> CLICK HERE TO VIEW LEETCODE PROFILE </a></b>
                <b><a href = "https://www.hackerrank.com/ajaibalu_cr_7" >CLICK HERE TO VIEW HACKERRANK PROFILE</a></b>
                <br></br>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'I love to do webdevelopment in JAVASCRIPT and looking to explore a lot of things with fast learning and problem solving abiliites !'}
                </p>
                
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
