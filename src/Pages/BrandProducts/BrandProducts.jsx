import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import carousel01 from "../../assets/carousel_1.jpg";
import carousel03 from "../../assets/carousel_3.jpg";
import carousel04 from "../../assets/carousel_4.jpg";
import carousel05 from "../../assets/carousel_5.jpg";

const BrandProducts = () => {
  const productsData = useLoaderData();

  // console.log(productsData);

  return (
    <div className="px-5">
      <div className="flex overflow-x-auto w-9/12mx-auto carousel">
        <div className="w-3/5 carousel-item">
          <img src={carousel01} className="w-full" alt="Carousel Image 1" />
        </div>
        <div className="w-3/5 carousel-item">
          <img src={carousel03} className="w-full" alt="Carousel Image 2" />
        </div>
        <div className="w-3/5 carousel-item">
          <img src={carousel04} className="w-full" alt="Carousel Image 3" />
        </div>
        <div className="w-3/5 carousel-item">
          <img src={carousel05} className="w-full" alt="Carousel Image 4" />
        </div>
      </div>
      <div className="my-20 grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 max-w-[1440px]">
        {productsData?.map((product, index) => (
          <div
            key={product._id}
            className="overflow-hidden rounded-lg shadow-lg bg-black02"
          >
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-48"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-xl font-bold">{product.name}</div>
              <p className="text-base text-gray-700">
                <strong>Brand Name:</strong> {product.brandName}
              </p>
              <p className="text-base text-gray-700">
                <strong>Type:</strong> {product.type}
              </p>
              <p className="text-base text-gray-700">
                <strong>Price:</strong> ${product.priceInDollars}
              </p>
              <p className="text-base text-gray-700">
                <strong>Rating:</strong> {product.rating}
              </p>
            </div>
            <div className="px-6 py-4">
              <Link
                to={`/api/singleProduct/${product._id}`}
                className="px-4 py-2 mr-2 font-bold text-white bg-black rounded-full hover:bg-blue-700"
              >
                Details
              </Link>
              <Link
                to={`/api/products/update/${product._id}`}
                className="px-4 py-2 font-bold text-white bg-black rounded-full hover:bg-green-700"
              >
                Update
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
