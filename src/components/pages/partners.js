import React from 'react';
import '../../components/Products.css';
import CardItem from '../CardItem';
import ToduaImg from '../../photo/todua.png';
import chachavaImg from '../../photo/chachava1.png'
import MetreveliImg from '../../photo/Metreveli.png';
import aversiImg from '../../photo/aversi.png'
import TsmuImg from '../../photo/Tsmu.jpg';
import ingorokvaImg from '../../photo/Ingorokva.png';
import AmeeImg from '../../photo/Amee.JPG'



export default function partners() {
  return (
     <div className='cards'>
      <h1>Review the list of clinics where you can submit a resume </h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={ToduaImg}
              text='Todua clinic'
              label='clinic'
              path='./todua'
            />
            <CardItem
              src={chachavaImg}
              text='Chachava Clinic'
              label='clinic'
              path='./chachava'
            />
            <CardItem
              src={MetreveliImg}
              text='Metreveli Clinic'
              label='clinic'
              path='./Metreveli'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={aversiImg}
              text='Aversi Clinic '
              label='clinic'
              path='./Aversi'
            />
            <CardItem
              src={TsmuImg}
              text='TSMU'
              path='./TSMU'
            />

              <CardItem
              src={ingorokvaImg}
              text='Ingorokva Clinic'
              label='clinic'
              path='./ingorokva'
            />
              <CardItem
              src={AmeeImg}
              text='Amee'
              path='./Amee'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}
