import React from 'react';
import './Feature.scss';
import imgg from '../../Assets/sprint-court.jpeg';
import LargePropertyCard from '../Cards/LargePropertyCard';

export default function FeaturedHomes() {
  return (
    <div className="pad">
      <h2 className="text-heading">Featured Homes</h2>
      <p className="text-description text-center">Lorem Ipsum</p>
      <LargePropertyCard featured={true} title="3 Bedroom Detached Bungalow" price={27000000} image={imgg}/>
    </div>
  )
}
