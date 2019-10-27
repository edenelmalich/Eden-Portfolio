import React from 'react';
import Home from './components/Home';
import './Css/Portfolio.css';
import './Css/Mobile.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import imagePort from './images/imagePort.jpg';
import Github from './components/Github';
import PortfolioNav from './components/PortfolioNav';
import Projects from './components/Projects';
import Contact from './components/Contact';
import MediaQuery from 'react-responsive';
import Skills from './components/Skills';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <MediaQuery maxDeviceWidth={1024}>
          <NavbarMobile />
        </MediaQuery>
        <MediaQuery minDeviceWidth={1280} maxDeviceWidth={2560}>
          <img src={imagePort} alt='Main Background' />
          <PortfolioNav />
        </MediaQuery>
        <div id='App-flex'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Github' component={Github} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Skills' component={Skills} />
          </Switch>
        </div>
        <MediaQuery maxDeviceWidth={1024}>
          <Footer />
        </MediaQuery>
      </div>
    </BrowserRouter>
  );
}

export default App;
