import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';

const Github = () => {
  const onClick = url => {
    window.open(url);
  };

  return (
    <Fragment>
      <header className='Mobile-profile-content'>
        <div className='Mobile-profile'>
          <div className='Mobile-Header'>Github</div>
          <div className='Main-Padding'></div>
          <div className='Mobile-job'>
            I would love to have you look at my projects in github.
          </div>
        </div>
      </header>
      <main className='Mobile-Details-content'>
        <div className='Sub-Header '>Projects in github</div>
        <div className='fullPage'>
          <div className='Mobile-Details'>
            <Card bg='light' className='Main-Card-width'>
              <Card.Header>Check my projects</Card.Header>
              <Card.Body>
                <Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      onClick('https://github.com/edenelmalich/image-Browser')
                    }
                  >
                    Image Browser
                  </Button>
                </Card.Text>
                <Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      onClick(
                        'https://github.com/edenelmalich/Final-Project-Full'
                      )
                    }
                  >
                    Final Project
                  </Button>
                </Card.Text>
                <Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      onClick('https://github.com/edenelmalich/eden-portfolio')
                    }
                  >
                    Portfolio
                  </Button>
                </Card.Text>
                <Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      onClick(
                        'https://github.com/edenelmalich/Eden-Elmalich-17-11-2019'
                      )
                    }
                  >
                    weatherApp
                  </Button>
                </Card.Text>
                <Card.Text>
                  <Button
                    variant='light'
                    onClick={() =>
                      onClick('https://github.com/edenelmalich/snakeFull')
                    }
                  >
                    Snake game multiplayer
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

export default Github;
