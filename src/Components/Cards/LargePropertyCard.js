import React from "react";
import Feature from "../Feature/Feature";

export default function LargePropertyCard({
  featured,
  title,
  summary,
  price,
  features,
  image
}) {
  return (
    <div className="card">
      {image && <img className="card-img" src={image} alt="Cover"/>}
      <div className="card-body">
        {featured && <div className="chip chip-primary featured">Featured</div>}
        <h3 className="text__title">{title}</h3>
        <p>{summary}</p>
        <div className="flex-row">
          {features && features.map((feature, i) => (
            <Feature
              key={i}
              title={feature.title}
              icon={feature.icon}
              detail={feature.detail}
            />
          ))}
        </div>
        <div className="text__feature__title">For Sale</div>
        <p className="text__price">
          {price.toLocaleString("en-NG", {
            style: "currency",
            currency: "NGN",
          })}
        </p>
      </div>
    </div>
  );
}
