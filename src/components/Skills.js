import React, { Fragment } from 'react';
import Toast from 'react-bootstrap/Toast';
// images imports
import react from '../images/react.png';
import redux from '../images/redux.png';
import node from '../images/node.png';
import css from '../images/css.png';
import html from '../images/html.png';
import js from '../images/js.png';
import sql from '../images/sql.png';
import php from '../images/php.png';
import java from '../images/java.png';
import python from '../images/python.png';
import mysql from '../images/mysql.png';
import cProgram from '../images/cProgram.png';
import mongo from '../images/mongo.png';
import github from '../images/github.png';
import bootstrap from '../images/bootstrap.png';
import MediaQuery from 'react-responsive';

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
      <MediaQuery minDeviceWidth={1024}>
        <main className='Mobile-Details-content'>
          <div className='Sub-Header '>My technical skills</div>
          <div className='fullPage'>
            <div className='Mobile-Details'>
              <div className='Main-Flex'>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={react} alt='react icon' />
                    React.js.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={redux} alt='redux icon' />
                    Redux.js.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={node} alt='node icon' />
                    Node.js.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>Express.js.</Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={css} alt='css icon' />
                    Css3.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={html} alt='html icon' />
                    Html.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={js} alt='js icon' />
                    JavaScript.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={sql} alt='sql icon' />
                    SQL
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={php} alt='php icon' />
                    PHP.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={java} alt='java icon' />
                    Java.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={python} alt='python icon' />
                    Python.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={mysql} alt='mysql icon' />
                    MysQL
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={cProgram} alt='mysql icon' />
                    C/C++.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={mongo} alt='mysql icon' />
                    MongoDB.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={github} alt='github icon' />
                    Github.
                  </Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Body>
                    <img id='img-size' src={bootstrap} alt='github icon' />
                    Bootstrap.
                  </Toast.Body>
                </Toast>
              </div>
            </div>
            <div className='icons-container'></div>
          </div>
        </main>
      </MediaQuery>
      <MediaQuery maxDeviceWidth={1024}>
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
      </MediaQuery>
    </Fragment>
  );
};

export default Skills;
