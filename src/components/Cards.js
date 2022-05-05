import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import partneslogo from '../photo/parnters logo.png'
import upload from '../photo/Upload.png'
import logo from '../photo/logo.png'

function Cards() {
  return (
    <div className='cards'>
      <h1>Start your EPIC Journey</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={logo}
              text='About Us'
              label='Adventure'
              path='./products'
            />
            <CardItem
              src={upload}
              text='Upload your resume'
              label='Service'
              path='./sign-up'
            />
           <CardItem
              src={partneslogo}
              text='Partners'
              label='Adventure'
              path='./partners'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
