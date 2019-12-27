import React from 'react';
import { Carousel } from 'react-bootstrap';
// images imports
import imagebrowser from '../images/imagebrowser.png';
import maxfit from '../images/maxfit.png';
import weatherapp from '../images/weatherapp.png';
import gameArea from '../images/gameArea.png';
import portfolio from '../images/portfolio.png';

const Home = () => {
  return (
    <div className='Home'>
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
            stress conditions while looking at the small details. Also, creating
            team work interfaces to achieve goals and targets set by company
            management. Decisive, determined to achieve the goal with great
            motivation to learn new fields and succeed by implementing My
            studies.
          </div>
          <Carousel>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={maxfit}
                alt='maxfit project'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={imagebrowser}
                alt='image browser project'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={weatherapp}
                alt='weather app project'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={gameArea}
                alt='snake game project'
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className='d-block w-100'
                src={portfolio}
                alt='portfolio project'
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </main>
    </div>
  );
};

export default Home;
