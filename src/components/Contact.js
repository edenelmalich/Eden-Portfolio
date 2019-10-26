import React, { Fragment } from 'react';
import '../Css/Portfolio.css';
import MediaQuery from 'react-responsive';
import Typing from 'react-typing-animation';
import { Card, Button } from 'react-bootstrap';
import Footer from './Footer';
const Contact = () => {
  const onClick = url => {
    window.open(url);
  };

  return (
    <Fragment>
      <MediaQuery minDeviceWidth={320} maxDeviceWidth={1024}>
        <header className='Mobile-profile-content'>
          <div className='Mobile-profile'>
            <div className='Mobile-Header'>Contact</div>

            <div className='Main-Padding'></div>
            <div className='Mobile-job'>
              Feel free to contact me for any questions or information.
            </div>
          </div>
        </header>
        <main className='Mobile-Details-content'>
          <div className='Sub-Header '>Contact me</div>
          <div className='Mobile-Details'>
            <Card bg='light' className='Main-Card-width'>
              <Card.Header>My details</Card.Header>
              <Card.Body>
                <Card.Text>Name: Eden Elmalich.</Card.Text>
                <Card.Text>Phone: 0543241787.</Card.Text>
                <Card.Text>Email: eelmalich2@gmail.com</Card.Text>
                <Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      onClick(
                        'https://www.linkedin.com/in/eden-elmalich-6ba820192/'
                      )
                    }
                  >
                    Linkedin Profile
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </main>
        <Footer />
      </MediaQuery>
      <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
        <div className='Page-Container'>
          <div className='Portfolio-Container'>
            <div className='Portfolio-Header'>Contact</div>
            <div id='Port-Position' className='Portfolio-Header'>
              Feel free to contact me for any questions or information.
            </div>
          </div>
          <div className='Portfolio-Content'>
            <Typing className='Typist-Att'>
              <Card bg='light' className='Main-Card-width'>
                <Card.Header>Contact me</Card.Header>
                <Card.Body>
                  <Card.Text>Name: Eden Elmalich.</Card.Text>
                  <Card.Text>Phone: 0543241787.</Card.Text>
                  <Card.Text>Email: eelmalich2@gmail.com</Card.Text>
                  <Card.Text>
                    <Button
                      variant='light'
                      onClick={() =>
                        onClick(
                          'https://www.linkedin.com/in/eden-elmalich-6ba820192/'
                        )
                      }
                    >
                      Linkedin Profile
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

export default Contact;
