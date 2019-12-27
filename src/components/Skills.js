import React, { Fragment } from 'react';
import Toast from 'react-bootstrap/Toast';

const Skills = () => {
  return (
    <Fragment>
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
        <div className='fullPage'>
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
          <div className='icons-container'></div>
        </div>
      </main>
    </Fragment>
  );
};

export default Skills;
