import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
import Footer from './Footer';
import Toast from 'react-bootstrap/Toast';
// Redux

const Skills = () => {
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <header className='Mobile-profile-content'>
          <div className='Mobile-profile'>
            <div className='Mobile-Header'>Technical Skills</div>
            <div className='Main-Padding'></div>
            <div className='Mobile-job'>
              Languages ​​that I have learned in my studies And online courses.
            </div>
          </div>
        </header>
        <main className='Mobile-Details-content'>
          <div className='Sub-Header '>My technical skills</div>
          <div className='Mobile-Details'>
            <div className='Main-Flex'>
              <Toast>
                <Toast.Body>React.js.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Redux.js.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Node.js.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Express.js.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Css3.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Html.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>JavaScript.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>SQL</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>PHP.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Java.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Python.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>MysQL</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>C/C++.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>MongoDB.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Github.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Body>Bootstrap.</Toast.Body>
              </Toast>
            </div>
          </div>
        </main>
        <Footer />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
        <div className='Page-Container'>
          <div className='Portfolio-Container'>
            <div className='Portfolio-Header'>Technical Skills</div>
            <div id='Port-Position' className='Portfolio-Header'>
              Languages ​​that I have learned in my studies And online courses.
            </div>
          </div>
          <div className='Portfolio-Content'>
            <div className='Skills-Padding'>
              <Typing className='Typist-Att'>
                <div className='Main-Flex'>
                  <Toast>
                    <Toast.Body>React.js.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Redux.js.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Node.js.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Express.js.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Css3.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Html.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>JavaScript.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>SQL</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>PHP.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Java.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Python.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>MysQL</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>C/C++.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>MongoDB.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>Github.</Toast.Body>
                  </Toast>
                  <Toast>
                    <Toast.Body>VB.Net.</Toast.Body>
                  </Toast>
                </div>
              </Typing>
            </div>
          </div>
        </div>
        <footer className='App-footer'>
          <div>&copy; 2019 Eden Elmalich</div>
        </footer>
      </MediaQuery>
    </Fragment>
  );
};

export default Skills;
