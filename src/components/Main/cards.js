import React from 'react'
import { Projectdata } from '../constants/projectdata';
import { Card } from './card';

export const CardComponent = () => (
  <div className='project-container'>
    {Projectdata.map((e)=>{
      return(
    <>
    <Card PDescription={e.desc} Pimg={e.image}/>
    </>
    );})}
  </div>
)