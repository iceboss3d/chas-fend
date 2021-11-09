import React from "react";

export default function Featured({ heading, subtitle, children }) {
  return (
    <div className="container">
      <h2 className="text__heading text-center mt-4">{heading}</h2>
      <p class="text__description text-center">{subtitle}</p>
      {children}
    </div>
  );
}
