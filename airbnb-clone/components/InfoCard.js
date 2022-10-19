import React from "react";

function InfoCard({
  image,
  location,
  title,
  description,
  start,
  price,
  total,
}) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{location}</p>
      <p>{description}</p>
    </div>
  );
}

export default InfoCard;
