import React from "react";
import { Link } from "react-router-dom";

const Brands = ({ products }) => {
  // Create a Set to store unique brand names
  const uniqueBrands = new Set();
  const brandCards = [];
    const handleBrand = () => {
    
    };
  // Iterate through the products to filter out duplicate brand names and render cards
  products.forEach((product) => {
    if (!uniqueBrands.has(product.brandName)) {
      uniqueBrands.add(product.brandName);

      // Create a card for the brand
        const brandCard = (
          <Link
            to={`/api/products/${product.brandName}`}
            key={product._id}
            className="rounded-box bg-black02 brand-card transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none ... "
            data-aos="zoom-in"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            onClick={handleBrand}
          >
            <img
              className="rounded-box h-44 w-80"
              src={product.brand_Img}
              alt={product.brandName}
            />
            <div className="flex items-center justify-between px-4 py-3 text-white">
              <p className="text-xl font-semibold ">{product.brandName}</p>
              <p className="px-3 py-1 font-medium rounded-lg bg-orange">2022</p>
            </div>
          </Link>
        );

      brandCards.push(brandCard);
    }
  });

  return (
    <div
      className="max-w-[1440px] px-5 mx-auto my-20 text-color"
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
    >
      <h2 className="text-2xl font-medium my-7 text-orange">Handy picked</h2>
      <h1 className="mb-20 text-5xl font-extrabold">Brand We Work With</h1>
      <div className="grid gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 brand-cards-container">
        {" "}
        {brandCards}
      </div>
    </div>
  );
};

export default Brands;
