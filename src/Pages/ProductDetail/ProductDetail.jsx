import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const ProductDetail = () => {
  const { user } = useContext(AuthContext);
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
      const cartData = {
        name,
        image,
        brandName,
        brand_Img,
        priceInDollars,
        rating,
        type,
        email: user.email,
        userName: user.displayName,
        uid: user.uid,
      };
      console.log(cartData, "cart");
      const response = await fetch(
        "https://vehica-server-1ssk5rnln-jannatulhappys-projects.vercel.app/api/product/myCart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartData),
        }
      );

      if (response.ok) {
      
        Swal.fire(
          "Product Added Successfully!",
          "Visit Product Cart!",

          "success"
        );
      } else {
      
       
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Failed to add the product to the cart.",
        text: error,
      });
     
    }
  };

  return (
    <div className="p-4 mx-auto max-w-7xl">
      <div className="flex flex-wrap p-8 bg-white rounded-lg shadow-lg">
        <div className="w-full md:w-1/2">
          <img src={image} alt={name} className="w-full h-auto rounded-lg" />
        </div>
        <div className="w-full p-4 md:w-1/2">
          <h2 className="mb-2 text-3xl font-bold text-gray-800 ">
            <img className="w-16 rounded" src={brand_Img} alt="" /> {name}
          </h2>
          <div className="text-xl font-semibold text-orange">
            {brandName} - {type} - {rating}
          </div>
          <p className="mt-2 text-2xl font-bold text-orange">
            ${priceInDollars}
          </p>
          <p className="mt-4 text-lg text-gray-700">{shortDescription}</p>
          <p className="mt-4 text-gray-700">{longDescription}</p>
          <div className="flex items-center mt-4">
            <button
              onClick={addToCart}
              className="px-6 py-3 text-white rounded-lg bg-orange hover:bg-blue-700"
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
