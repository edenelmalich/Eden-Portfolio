import React, { Fragment, useState, useEffect } from 'react';
import '../Css/Portfolio.css';
import { Card, Button } from 'react-bootstrap';
// reactstrap import
import { Fade } from 'reactstrap';
const Contact = () => {
  const onClick = url => {
    window.open(url);
  };
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    setIsOpen(true);
  }, []);
  return (
    <Fragment>
      <Fade in={isOpen}>
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
          <div className='fullPage'>
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
          </div>
        </main>
      </Fade>
    </Fragment>
  );
};

export default Contact;
