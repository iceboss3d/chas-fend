import React from "react";

export default function Feature({
  title = "Feature",
  icon = "bed",
  detail = "2",
}) {
  
title.includes(icon.tr)

  return (
    <div className="feature">
      <div className="text-feature-title">{title}</div>
      <p>
        <i className={`bx bx-${icon}`}></i> {detail}
      </p>
    </div>
  );
}
