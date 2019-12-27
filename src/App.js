import React from 'react';
import Home from './components/Home';
import './Css/Portfolio.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Github from './components/Github';

import Projects from './components/Projects';
import Contact from './components/Contact';

import Skills from './components/Skills';
import NavbarMobile from './components/NavbarMobile';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <NavbarMobile />

        <div id='App-flex'>
          <Switch>
            <Route path='/' component={Home} exact />
            <Route path='/Github' component={Github} />
            <Route path='/Projects' component={Projects} />
            <Route path='/Contact' component={Contact} />
            <Route path='/Skills' component={Skills} />
          </Switch>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
