import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
import '../Css/Portfolio.css';
import maxfit from '../images/maxfit.png';
import Card from 'react-bootstrap/Card';
import imagebrowser from '../images/imagebrowser.png';
// Redux
import { connect } from 'react-redux';

const Projects = ({ CheckNav }) => {
  const openWindow = url => {
    window.open(url);
  };
  const navPosition = CheckNav
    ? 'Mobile-Details-content'
    : 'Mobile-Details-content-Close';
  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <div className='Mobile-Container'>
          <div className='Mobile-profile-content'>
            <div className='Mobile-profile'>
              <div className='Mobile-Header'>Projects</div>
              <div className='Main-Padding'></div>
              <div className='Mobile-job'>
                You Should check out My projects.
              </div>
            </div>
          </div>
          <div className={navPosition}>
            <div className='Mobile-Text-Content '>
              <div className='Sub-Header '>Projects</div>
              <div className='Mobile-Details'>
                <div className='Project-box'>
                  <Card bg='light' className='Card-width'>
                    <Card.Header>Maxfit</Card.Header>
                    <Card.Body>
                      <Card.Title>Gym management</Card.Title>
                      <Card.Text>
                        Gym management software will Allow gym owners to get
                        relevant Information about the trainers and Take actions
                        like building a workout Plan.
                        <button
                          type='button'
                          className='btn btn-outline-dark'
                          onClick={() =>
                            openWindow(
                              'https://github.com/edenelmalich/FinalProject-Server-side'
                            )
                          }
                        >
                          <label> View Final Project</label>
                        </button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <div className='Main-Padding'></div>
                  <img src={maxfit} className='image' alt='Maxfit Project' />
                </div>
                <div className='Main-Padding'></div>
                <div className='Project-box'>
                  <Card bg='light' className='Card-width '>
                    <Card.Header>imageBrowser</Card.Header>
                    <Card.Body>
                      <Card.Title>Image search site</Card.Title>
                      <Card.Text>
                        A site for image search that uses Flicker api Uses
                        languages: Vue.js Typescript.
                        <button
                          type='button'
                          className='btn btn-outline-dark'
                          onClick={() =>
                            openWindow(
                              'https://elastic-mcclintock-ef7508.netlify.com/'
                            )
                          }
                        >
                          <label>View Image Browser Project</label>
                        </button>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <div className='Main-Padding'></div>
                  <img
                    src={imagebrowser}
                    className='image'
                    alt='imageBrowser Project'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='app-footer'>
          <div>&copy; 2019 Eden Elmalich</div>
        </footer>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
        <div className='Page-Container'>
          <div className='Portfolio-Container'>
            <div className='Portfolio-Header'>Projects</div>
            <div id='Port-Position' className='Portfolio-Header'>
              You Should check out My projects.
            </div>
            <div className='Project-image'>
              <div className='Project-box'>
                <Card bg='light' className='Card-width'>
                  <Card.Header>Maxfit</Card.Header>
                  <Card.Body>
                    <Card.Title>Gym management</Card.Title>
                    <Card.Text>
                      Gym management software will Allow gym owners to get
                      relevant Information about the trainers and Take actions
                      like building a workout Plan.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className='Main-Padding'></div>
                <img src={maxfit} className='image' alt='Maxfit Project' />

                <div className='Main-Padding'></div>
              </div>
              <div className='Project-box'>
                <Card bg='light' className='Card-width '>
                  <Card.Header>imageBrowser</Card.Header>
                  <Card.Body>
                    <Card.Title>Image search site</Card.Title>
                    <Card.Text>
                      A site for image search that uses Flicker api Uses
                      languages: Vue.js Typescript.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className='Main-Padding'></div>
                <img
                  src={imagebrowser}
                  className='image'
                  alt='imageBrowser Project'
                />
              </div>
            </div>
          </div>
          <div className='Portfolio-Content'>
            <Typing className='Typist-Att'>
              <li>Image Browser:</li>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={() =>
                  openWindow('https://elastic-mcclintock-ef7508.netlify.com/')
                }
              >
                <label>View Image Browser Project</label>
              </button>
              <div className='Main-Padding'></div>
              <li>Final Project</li>
              <button
                type='button'
                className='btn btn-outline-dark'
                onClick={() =>
                  openWindow(
                    'https://github.com/edenelmalich/FinalProject-Server-side'
                  )
                }
              >
                <label> View Final Project</label>
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
export default connect(mapStateToProps)(Projects);