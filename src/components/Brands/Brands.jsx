import React from "react";

const Brands = ({ products }) => {
  // Create a Set to store unique brand names
  const uniqueBrands = new Set();
  const brandCards = [];
    const handleBrand = () => {
      console.log("click brand");
    };
  // Iterate through the products to filter out duplicate brand names and render cards
  products.forEach((product) => {
    if (!uniqueBrands.has(product.brandName)) {
      uniqueBrands.add(product.brandName);

      // Create a card for the brand
      const brandCard = (
        <div  key={product.id} className=" brand-card" onClick={handleBrand}>
          <img className="h-32 w-60" src={product.brand_Img} alt={product.brandName} />
          <p>{product.brandName}</p>
        </div>
      );

      brandCards.push(brandCard);
    }
  });

  return (
    <div className="max-w-[1440px] mx-auto my-20">
      <h2 className="text-2xl font-medium my-7 text-orange">Handy picked</h2>
      <h1 className="mb-20 text-5xl font-extrabold text-white ">Featured Listings</h1>
      <div className="flex gap-10 brand-cards-container">{brandCards}</div>
    </div>
  );
};

export default Brands;
