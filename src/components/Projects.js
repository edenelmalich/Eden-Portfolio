import React, { Fragment, useEffect, useState } from 'react';

import '../Css/Portfolio.css';
import maxfit from '../images/maxfit.png';
import weatherapp from '../images/weatherapp.png';
import FavoritesPage from '../images/FavoritesPage.png';
import portfolio from '../images/portfolio.png';
import { Card, Button } from 'react-bootstrap';
import imagebrowser from '../images/imagebrowser.png';
import gameArea from '../images/gameArea.png';
// reactstrap import
import { Fade } from 'reactstrap';

const Projects = () => {
  const openWindow = url => {
    window.open(url);
  };
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Fragment>
      <Fade in={isOpen}>
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
            <div className='fullPage'>
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

                <div className='Main-Padding'></div>

                <Card bg='light' className='Card-width'>
                  <Card.Header>weatherApp</Card.Header>
                  <Card.Body>
                    <Card.Title>Weather app with Favorites page</Card.Title>
                    <Card.Text>
                      The weather app will allow you to see the weather
                      worldwide and save it to favorites
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
                <div className='Main-Padding'></div>

                <Card bg='light' className='Card-width'>
                  <Card.Header>Snake game multiplayer</Card.Header>
                  <Card.Body>
                    <Card.Title>
                      Snake game multiplayer with socket.io and react, redux
                    </Card.Title>
                    <Card.Text>
                      <Button
                        variant='light'
                        onClick={() =>
                          openWindow(
                            'https://github.com/edenelmalich/snakeFull'
                          )
                        }
                      >
                        Snake multiplayer game
                      </Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
                <div className='Main-Padding'></div>
                <div className='Mobile-box'>
                  <img
                    src={gameArea}
                    className='imageMobile'
                    alt='Snake game Project'
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </Fade>
    </Fragment>
  );
};

export default Projects;
