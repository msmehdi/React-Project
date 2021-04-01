import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import Price from './components/pages/Price/Price';
import Contact from './components/pages/Contact/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/pages/Footer.js/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/pricing' component={Price} />
        <Route path='/contact-us' component={Contact} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
