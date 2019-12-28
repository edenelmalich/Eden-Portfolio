import React, { Fragment, useState, useEffect } from 'react';
import Toast from 'react-bootstrap/Toast';
// reactstrap import
import { Fade } from 'reactstrap';

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
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Fragment>
      <Fade in={isOpen}>
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
      </Fade>
    </Fragment>
  );
};

export default Skills;
