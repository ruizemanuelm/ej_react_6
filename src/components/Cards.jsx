import React from 'react';
import {  CardGroup } from 'react-bootstrap';
import Caja from './Caja';

const Cards = ({colores}) => {
  return (
    <article className='d-flex'>
        <CardGroup className='col-12'>
        {
          colores.map((color, indice)=> <Caja color={color} key={indice}/>)
          }
        </CardGroup>
    </article>
  );
};

export default Cards;