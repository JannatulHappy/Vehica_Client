import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import carousel01 from "../../assets/carousel_1.jpg";
import carousel03 from "../../assets/carousel_3.jpg";
import carousel04 from "../../assets/carousel_4.jpg";


const BrandProducts = () => {
  const productsData = useLoaderData();

  // console.log(productsData);
  // Check if there are no products available for this brand
  

  return (
    <div>
      {productsData.length < 2 ? (
        <div className="flex items-center justify-center px-5">
          <h1 className="flex items-center justify-center h-screen text-3xl font-bold ">
            No products available for this brand.
          </h1>
        </div>
      ) : (
        <div className="px-5">
          <div className="flex w-9/12 mx-auto overflow-x-auto carousel">
            <div className="w-3/5 carousel-item">
              <img src={carousel01} className="w-full" alt="Carousel Image 1" />
            </div>
            <div className="w-3/5 carousel-item">
              <img src={carousel03} className="w-full" alt="Carousel Image 2" />
            </div>
            <div className="w-3/5 carousel-item">
              <img src={carousel04} className="w-full" alt="Carousel Image 3" />
            </div>
            {/* <div className="w-3/5 carousel-item">
              <img src={carousel05} className="w-full" alt="Carousel Image 4" />
            </div> */}
          </div>
          <div className="my-20 grid grid-cols-1 gap-4 mx-auto sm:grid-cols-2 md:grid-cols-3 max-w-[1440px]">
            {productsData?.map((product, index) => (
              <div
                key={product._id}
                className="overflow-hidden rounded-lg shadow-lg bg-black03"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-cover w-full h-60"
                />
                <div className="px-6 py-4">
                  <div className="mb-2 text-xl font-bold">{product.name}</div>
                  <p className="text-base text-gray-400">
                    <strong>Brand Name:</strong> {product.brandName}
                  </p>
                  <p className="text-base text-gray-400">
                    <strong>Type:</strong> {product.type}
                  </p>
                  <p className="text-base text-gray-400">
                    <strong>Price:</strong> ${product.priceInDollars}
                  </p>

                  <p className="text-base text-gray-400">
                    <strong>Rating:</strong> {product.rating}
                  </p>
                </div>
                <div className="flex justify-between px-6 py-4">
                  <Link
                    to={`/api/singleProduct/${product._id}`}
                    className="px-6 py-3 mr-2 font-semibold text-white bg-black rounded-lg hover:bg-orange"
                  >
                    Details
                  </Link>
                  <Link
                    to={`/api/products/update/${product._id}`}
                    className="px-6 py-3 mr-2 font-semibold text-white bg-black rounded-lg hover:bg-orange"
                  >
                    Update
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrandProducts;
  
