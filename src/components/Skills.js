import React, { Fragment } from 'react';
import Toast from 'react-bootstrap/Toast';

const Skills = () => {
  const skills = [
    'React.js.',
    'Redux.js.',
    'Node.js.',
    'Express.js.',
    'Css3.',
    'Html.',
    'JavaScript.',
    'SQL.',
    'PHP.',
    'Java.',
    'Python.',
    'MysQL.',
    'C/C++.',
    'MongoDB.',
    'Github.',
    'Bootstrap.'
  ];

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
              {skills.map((skill, i) => (
                <Toast key={i}>
                  <Toast.Body>{skill}</Toast.Body>
                </Toast>
              ))}
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Skills;
