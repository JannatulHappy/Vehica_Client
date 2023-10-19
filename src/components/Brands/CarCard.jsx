import React from "react";

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} />
      <h2>{car.name}</h2>
      <p>Brand: {car.brandName}</p>
      <p>Model: {car.carModelName}</p>
      <p>Type: {car.type}</p>
      <p>Price: ${car.priceInDollars}</p>
      <p>Description: {car.shortDescription}</p>
      <p>Rating: {car.rating}</p>
    </div>
  );
};

export default CarCard;
