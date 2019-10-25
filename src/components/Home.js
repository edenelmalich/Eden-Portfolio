import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
// Redux
import { connect } from 'react-redux';
const Home = ({ CheckNav }) => {
  const navPosition = CheckNav
    ? 'Mobile-Details-content-Close'
    : 'Mobile-Details-content';
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <div className='Mobile-Container'>
          <div className='Mobile-profile-content'>
            <div className='Mobile-profile'>
              <div className='Mobile-Header'>Eden Elmalich</div>
              <div className='Mobile-position'>Junior Full Stack</div>
              <div className='Main-Padding'></div>
              <div className='Mobile-job'>
                Practical software engineer is looking for a junior Full-Stack
                to gain experience in the field.
              </div>
            </div>
          </div>
          <div className={navPosition}>
            <div className='Mobile-Text-Content '>
              <div className='Sub-Header '>About me</div>
              <div className='Mobile-Details'>
                <Typing>
                  Practical software engineer with high self-learning abilities
                  with development experience in React.js, Redux.js Node.js,
                  Express.js Css3, Html, JavaScript. Proven experience in
                  routine work under stress conditions while looking at the
                  small details. Also, creating team work interfaces to achieve
                  goals and objectives set by management. Decisive, determined
                  to achieve the goal with great motivation to learn new fields
                  and succeed by implementing My studies.
                </Typing>
              </div>
            </div>
          </div>
          <footer className='app-footer'>
            <div>&copy; 2019 Eden Elmalich</div>
          </footer>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
        <div className='Page-Container'>
          <div className='Portfolio-Container'>
            <div className='Portfolio-Header'>Eden Elmalich</div>
            <div id='Port-Position' className='Portfolio-Header'>
              Junior Full Stack
            </div>
            <div className='Main-Padding'></div>
            <div className='Job-Text'>
              Practical software engineer is looking for a junior Full-Stack to
              gain experience in the field.
            </div>
          </div>

          <div className='Portfolio-Content'>
            <div className='Home-Text'>
              <Typing className='Typist-Att'>
                Practical software engineer with high self-learning abilities
                with development experience in React.js, Redux.js Node.js,
                Express.js Css3, Html, JavaScript. Proven experience in routine
                work under stress conditions while looking at the small details.
                Also, creating team work interfaces to achieve goals and
                objectives set by management. Decisive, determined to achieve
                the goal with great motivation to learn new fields and succeed
                by implementing My studies.
              </Typing>
            </div>
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  CheckNav: state.NavReducer.CheckNav
});
export default connect(mapStateToProps)(Home);
