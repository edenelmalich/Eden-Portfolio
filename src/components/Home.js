import React, { useState, useEffect } from 'react';
// reactstrap import
import { Fade } from 'reactstrap';
// bootstrap import
import { Carousel } from 'react-bootstrap';
// images imports
import imagebrowser from '../images/imagebrowser.png';
import maxfit from '../images/maxfit.png';
import weatherapp from '../images/weatherapp.png';
import gameArea from '../images/gameArea.png';
import portfolio from '../images/portfolio.png';

const Home = () => {
  const projectsImages = [
    maxfit,
    imagebrowser,
    weatherapp,
    gameArea,
    portfolio
  ];
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <div className='Home'>
      <Fade in={isOpen}>
        <header className='Mobile-profile-content'>
          <div className='Mobile-profile'>
            <div className='Mobile-Header'>Eden Elmalich</div>
            <div className='Mobile-position'>Junior Full Stack</div>
            <div className='Main-Padding'></div>
            <div className='Mobile-job'>
              Practical software engineer interested in a junior Full-Stack job.
            </div>
          </div>
        </header>

        <main className='Mobile-Details-content'>
          <div className='Sub-Header '>About me</div>
          <div className='fullPage'>
            <div className='Mobile-Details'>
              Practical software engineer with high self-learning abilities with
              development experience in React.js, Redux.js Node.js, Express.js
              Css3, Html, JavaScript. Proven experience in routine work under
              stress conditions while looking at the small details. Also,
              creating team work interfaces to achieve goals and targets set by
              company management. Decisive, determined to achieve the goal with
              great motivation to learn new fields and succeed by implementing
              My studies.
            </div>
            <Carousel>
              {projectsImages.map((project, i) => (
                <Carousel.Item key={i}>
                  <img className='d-block w-100' src={project} alt='project' />
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </main>
      </Fade>
    </div>
  );
};

export default Home;
