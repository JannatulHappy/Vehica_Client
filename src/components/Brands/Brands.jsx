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
            className=" rounded-box bg-black02 brand-card"
            onClick={handleBrand}
          >
            <img
              className="rounded-box h-44 w-80"
              src={product.brand_Img}
              alt={product.brandName}
            />
            <div className="flex items-center justify-between px-4 mt-4">
              <p className="text-xl font-semibold ">
                {product.brandName}
              </p>
              <p className="px-3 py-1 font-medium rounded-lg bg-orange">2022</p>
            </div>
          </Link>
        );

      brandCards.push(brandCard);
    }
  });

  return (
    <div className="max-w-[1440px] px-5 mx-auto my-20">
      <h2 className="text-2xl font-medium my-7 text-orange">Handy picked</h2>
      <h1 className="mb-20 text-5xl font-extrabold text-white ">
        Brand We Worked With
      </h1>
      <div className="grid gap-6 pt-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 brand-cards-container">
        {" "}
        {brandCards}
      </div>
    </div>
  );
};

export default Brands;
