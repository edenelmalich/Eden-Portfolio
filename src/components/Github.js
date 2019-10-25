import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
// Redux
import { connect } from 'react-redux';
const Github = ({ CheckNav }) => {
  const onClick = url => {
    window.open(url);
  };
  const navPosition = !CheckNav
    ? 'Mobile-Details-content'
    : 'Mobile-Details-content-Close';
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <div className='Mobile-Container'>
          <div className='Mobile-profile-content'>
            <div className='Mobile-profile'>
              <div className='Mobile-Header'>Github</div>
              <div className='Main-Padding'></div>
              <div className='Mobile-job'>
                I'd love to have a look at my projects at github.
              </div>
            </div>
          </div>
          <div className={navPosition}>
            <div className='Mobile-Text-Content '>
              <div className='Sub-Header '>Projects in github</div>
              <div className='Mobile-Details'>
                Gym management software will Allow gym owners to get relevant
                Information about the trainers and Take actions like building a
                workout Plan.
                <li>
                  <button
                    type='button'
                    className='btn btn-outline-dark'
                    onClick={() =>
                      onClick(
                        'https://github.com/edenelmalich/FinalProject-Server-side'
                      )
                    }
                  >
                    <label> View Final Project on Github</label>
                  </button>
                </li>
                <div className='Main-Padding'></div>
                <div className='Mobile-Border'></div>
                <div className='Main-Padding'></div>A site for image search that
                uses Flicker api Uses languages: Vue.js Typescripts.
                <li>
                  <button
                    type='button'
                    className='btn btn-outline-dark'
                    onClick={() =>
                      onClick(
                        'https://github.com/edenelmalich/FinalProject-Server-side'
                      )
                    }
                  >
                    <label> View Final Project on Github</label>
                  </button>
                </li>
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
            <div className='Portfolio-Header'>Github</div>
            <div id='Port-Position' className='Portfolio-Header'>
              I'd love to have a look at my projects at github.
            </div>
          </div>
          <div className='Portfolio-Content'>
            <Typing className='Typist-Att'>
              <li>Image Browser:</li>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={() =>
                  onClick('https://github.com/edenelmalich/image-Browser')
                }
              >
                <label>View Image Browser on Github</label>
              </button>
              <div className='Main-Padding'></div>
              <li>Final Project:</li>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={() =>
                  onClick(
                    'https://github.com/edenelmalich/FinalProject-Server-side'
                  )
                }
              >
                <label> View Final Project on Github</label>
              </button>
            </Typing>
          </div>
        </div>
      </MediaQuery>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  CheckNav: state.NavReducer.CheckNav
});
export default connect(mapStateToProps)(Github);
