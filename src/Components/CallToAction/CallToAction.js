import React from 'react'
import './CallToAction.scss'

export default function CallToAction({message}) {
  return (
    <div className="callToAction__background">
      <div className="container text-center">
        <p className="text__lead text__white">{message}</p>
        <button className="button-accent mt-4">
          <i className="bx bx-phone"></i> Call Now
        </button>
      </div>
    </div>
  );
}
