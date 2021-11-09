import React from 'react'
import './PageHero.scss';

export default function PageHero({coverImg, title, subTitle, description}) {
  return (
    <section
      className="page-hero"
      style={{
        backgroundImage: `linear-gradient(77.19deg, #1F2536 -8.9%, rgba(0, 112, 215, 0.4) 180.97%), url(${coverImg})`,
      }}
    >
      <div className="container">
        <h1 className="text__heading__light">{title}</h1>
        <p className="text__description text__white">{subTitle}</p>
        {description && <p className="text__white mt-2">{description}</p>}
      </div>
    </section>
  );
}
