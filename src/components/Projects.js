import React, { Fragment } from 'react';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
import '../Css/Portfolio.css';
import maxfit from '../images/maxfit.png';
import portfolio from '../images/portfolio.png';
import MobilePortfolio from '../images/MobilePortfolio.png';
import weatherapp from '../images/weatherapp.png';
import FavoritesPage from '../images/FavoritesPage.png';
import { Card, Button } from 'react-bootstrap';
import imagebrowser from '../images/imagebrowser.png';

const Projects = () => {
  const openWindow = url => {
    window.open(url);
  };

  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <div className='Mobile-Container'>
          <header className='Mobile-profile-content'>
            <div className='Mobile-profile'>
              <div className='Mobile-Header'>Projects</div>

              <div className='Main-Padding'></div>
              <div className='Mobile-job'>
                You Should check out My projects.
              </div>
            </div>
          </header>
          <main className='Mobile-Details-content'>
            <div className='Sub-Header '>My projects</div>
            <div className='Mobile-Details'>
              <Card bg='light' className='Card-width'>
                <Card.Header>Maxfit</Card.Header>
                <Card.Body>
                  <Card.Title>Gym management</Card.Title>
                  <Card.Text>
                    Gym management software will Allow gym owners to get
                    relevant Information about the trainers and Take actions
                    like building a workout Plan.
                  </Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      openWindow('https://maxfit-project.herokuapp.com/')
                    }
                  >
                    Final Project
                  </Button>
                </Card.Body>
              </Card>
              <div className='Main-Padding'></div>
              <div className='Mobile-box'>
                <img
                  src={maxfit}
                  className='imageMobile'
                  alt='Maxfit Project'
                />
              </div>
              <div className='Main-Padding'></div>
              <div className='Mobile-box'>
                <Card bg='light' className='Card-width '>
                  <Card.Header>imageBrowser</Card.Header>
                  <Card.Body>
                    <Card.Title>Image search site</Card.Title>
                    <Card.Text>
                      A site for image search that uses Flicker api Uses
                      languages: Vue.js Typescript.
                    </Card.Text>
                    <Card.Text>
                      <Button
                        variant='light'
                        onClick={() =>
                          openWindow(
                            'https://imagebrowser-eden-elmalich.netlify.com/'
                          )
                        }
                      >
                        Image Browser
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className='Main-Padding'></div>
                <img
                  src={imagebrowser}
                  className='imageMobile'
                  alt='imageBrowser Project'
                />
              </div>
              <div className='Main-Padding'></div>
              <div className='Mobile-box'>
                <Card bg='light' className='Card-width '>
                  <Card.Header>Portfolio</Card.Header>
                  <Card.Body>
                    <Card.Title>My portfolio</Card.Title>
                    <Card.Text>
                      My portfolio project is optimized for computer screens.
                      languages: React.js, Css3, Html.
                    </Card.Text>
                    <Card.Text>
                      <Button
                        variant='light'
                        onClick={() =>
                          openWindow('https://eden-portfolio.herokuapp.com/')
                        }
                      >
                        Portfolio
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className='Main-Padding'></div>
                <img
                  src={portfolio}
                  className='imageMobile'
                  alt='portfolio Project'
                />
              </div>
              <Card bg='light' className='Card-width'>
                <Card.Header>Portfolio Mobile</Card.Header>
                <Card.Body>
                  <Card.Title>My portfolio</Card.Title>
                  <Card.Text>
                    My portfolio project is optimized for mobile and tablet
                    screens. languages: React.js, Css3, Html.
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        openWindow('https://eden-portfolio.herokuapp.com/')
                      }
                    >
                      Portfolio
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className='Main-Padding'></div>
              <div className='Mobile-box'>
                <img
                  src={MobilePortfolio}
                  className='Mobile-PortfolioImage'
                  alt='portfolio Project'
                />
              </div>
              <Card bg='light' className='Card-width'>
                <Card.Header>weatherApp</Card.Header>
                <Card.Body>
                  <Card.Title>Weather app with Favorites page</Card.Title>
                  <Card.Text>
                    The weather app will allow you to see the weather worldwide
                    and save it to favorites
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        openWindow(
                          'https://weather-app-eden-elmalich.herokuapp.com/'
                        )
                      }
                    >
                      weatherApp
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className='Main-Padding'></div>
              <div className='Mobile-box'>
                <img
                  src={weatherapp}
                  className='imageMobile'
                  alt='weatherApp Project'
                />
              </div>
              <div className='Mobile-box'>
                <img
                  src={FavoritesPage}
                  className='imageMobile'
                  alt='weatherApp Project'
                />
              </div>
            </div>
          </main>
        </div>
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
        <div className='Page-Container'>
          <div className='Portfolio-Container'>
            <div className='Portfolio-Header'>Projects</div>
            <div id='Port-Position' className='Portfolio-Header'>
              You Should check out My projects.
            </div>
            <div className='Project-image'>
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
              <div className='Project-box'>
                <img src={maxfit} className='image' alt='Maxfit Project' />
              </div>

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
              <div className='Project-box'>
                <img
                  src={imagebrowser}
                  className='image'
                  alt='imageBrowser Project'
                />
              </div>

              <Card bg='light' className='Card-width '>
                <Card.Header>Portfolio</Card.Header>
                <Card.Body>
                  <Card.Title>My portfolio</Card.Title>
                  <Card.Text>
                    My portfolio project is optimized for computer screens.
                    languages: React.js, Css3, Html.
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className='Main-Padding'></div>
              <div className='Project-box'>
                <img
                  src={portfolio}
                  className='image'
                  alt='portfolio Project'
                />
              </div>
              <Card bg='light' className='Card-width'>
                <Card.Header>Portfolio</Card.Header>
                <Card.Body>
                  <Card.Title>Portfolio mobile</Card.Title>
                  <Card.Text>
                    My portfolio project is optimized for mobile and tablet
                    screens. languages: React.js, Css3, Html.
                  </Card.Text>
                </Card.Body>
              </Card>
              <div className='Main-Padding'></div>
              <div className='Project-box'>
                <img
                  src={MobilePortfolio}
                  className='imagePhone'
                  alt='Portfolio mobile Project'
                />
              </div>
            </div>
          </div>
          <div className='Portfolio-Content'>
            <Typing className='Typist-Att'>
              <Card bg='light' className='Main-Card-width'>
                <Card.Header>View my projects</Card.Header>
                <Card.Body>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        openWindow(
                          'https://imagebrowser-eden-elmalich.netlify.com/'
                        )
                      }
                    >
                      Image Browser
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        openWindow('https://maxfit-project.herokuapp.com/')
                      }
                    >
                      Final Project
                    </Button>
                  </Card.Text>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        openWindow('https://eden-portfolio.herokuapp.com/')
                      }
                    >
                      Portfolio
                    </Button>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Typing>
          </div>
        </div>
        <footer className='App-footer'>
          <div>&copy; 2019 Eden Elmalich</div>
        </footer>
      </MediaQuery>
    </Fragment>
  );
};

export default Projects;
