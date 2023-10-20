import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const ProductDetail = () => {
  const singleProductsData = useLoaderData();

  const {
    image,
    name,
    brandName,
    brand_Img,
    shortDescription,
    longDescription,
    rating,
    priceInDollars,
    carModelName,
    type,
  } = singleProductsData;

  const [cartMessage, setCartMessage] = useState("");

  const addToCart = async () => {
    try {
      const response = await fetch("http://localhost:5005/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(singleProductsData),
      });

      if (response.ok) {
        setCartMessage("Product added to cart!");
      } else {
        setCartMessage("Failed to add the product to the cart.");
      }
    } catch (error) {
      setCartMessage("Failed to add the product to the cart.");
      console.error("Error adding the product to the cart:", error);
    }
  };

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="flex flex-wrap p-8 bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full p-4 md:w-1/2">
          <h2 className="mb-2 text-3xl font-bold text-gray-800">{name}</h2>
          <div className="text-xl font-semibold text-orange">
            {brandName} - {type}
          </div>
          <p className="mt-2 text-2xl font-bold text-orange">
            ${priceInDollars}
          </p>
          <p className="mt-4 text-lg text-gray-700">{shortDescription}</p>
          <p className="mt-4 text-gray-700">{longDescription}</p>
          <div className="flex items-center mt-4">
            <button
              onClick={addToCart}
              className="px-6 py-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Add to Cart
            </button>
            {cartMessage && (
              <div className="ml-4 text-green-600">{cartMessage}</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
