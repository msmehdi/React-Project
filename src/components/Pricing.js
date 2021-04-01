import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <div className='pricing__container'>
            <Link to='/' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h3>BASIC</h3>
                <h4>$3.95/mo*</h4>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
                <ul className='pricing__container-features'>
                  <li>$20 per month Lorem Ipsum</li>
                  <li>100 transactions Lorem Ipsum</li>
                  <li>Lorem Ipsum ksdfk</li>
                  <li>vitae fermentum quam lorem</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
              </div>
            </Link>
            <Link to='/' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h3>PLUS</h3>
                <h4>$5.95/mo*</h4>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
                <ul className='pricing__container-features'>
                  <li>$20 per month Lorem Ipsum</li>
                  <li>100 transactions Lorem Ipsum</li>
                  <li>Lorem Ipsum ksdfk</li>
                  <li>vitae fermentum quam lorem</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
              </div>
            </Link>
            <Link to='/' className='pricing__container-card'>
              <h2>Recommended</h2>
              <div className='pricing__container-cardInfo'>
                <h3>CHOICE PLUS</h3>
                <h4>$6.95/mo*</h4>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
                <ul className='pricing__container-features'>
                  <li>$20 per month Lorem Ipsum</li>
                  <li>100 transactions Lorem Ipsum</li>
                  <li>Lorem Ipsum ksdfk</li>
                  <li>vitae fermentum quam lorem</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
              </div>
            </Link>
            <Link to='/' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <h3>PRO</h3>
                <h4>$13.95/mo*</h4>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
                <ul className='pricing__container-features'>
                  <li>$20 per month Lorem Ipsum</li>
                  <li>100 transactions Lorem Ipsum</li>
                  <li>Lorem Ipsum ksdfk</li>
                  <li>vitae fermentum quam lorem</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  Select
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
