import React, { useState } from "react";

const AddProductForm = () => {
  const initialProduct = {
    name: "",
    brand_Img: "",
    image: "",
    brandName: "",
    type: "",
    priceInDollars: "",
    shortDescription: "",
    longDescription: "",
    rating: "",
  };
  const [product, setProduct] = useState(initialProduct);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send the product data to the Express.js backend here

    try {
      const res = await fetch("http://localhost:5005/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await res.json();
      // console.log(data);
      if (data.acknowledged) {
        alert("Data posted successfully");
        setProduct(initialProduct);
      }
    } catch (error) {
      console.log(error);
    }
  };
  // You can send the 'product' state to your Express.js backend here.
  

  return (
    <div className="p-8 text-white bg-black ">
      <form className="w-full max-w-lg m-auto" onSubmit={handleSubmit}>
        <h2 className="my-10 text-3xl font-bold text-center">Add Product</h2>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Product Name"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="brandName" className="block text-sm font-medium">
            Brand Name
          </label>
          <input
            type="text"
            id="brandName"
            name="brandName"
            value={product.brandName}
            onChange={handleChange}
            placeholder="Brand Name"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="brandImg">
            Brand Image URL
          </label>
          <input
            type="text"
            id="brandImg"
            name="brand_Img"
            value={product.brand_Img}
            onChange={handleChange}
            placeholder="Brand Image URL"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium">
            Type
          </label>
          <input
            type="text"
            id="type"
            name="type"
            value={product.type}
            onChange={handleChange}
            placeholder="Product Type"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block text-sm font-medium">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="priceInDollars"
            value={product.priceInDollars}
            onChange={handleChange}
            placeholder="Product Price"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label className="block" htmlFor="productImg">
            Product Image URL
          </label>
          <input
            type="text"
            id="productImg"
            name="image"
            value={product.image}
            onChange={handleChange}
            placeholder="Product Image URL"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="shortDescription"
            className="block text-sm font-medium"
          >
            Short Description
          </label>
          <input
            type="text"
            id="shortDescription"
            name="shortDescription"
            value={product.shortDescription}
            onChange={handleChange}
            placeholder="Short Description"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="longDescription"
            className="block text-sm font-medium"
          >
            Long Description
          </label>
          <textarea
            id="longDescription"
            name="longDescription"
            value={product.longDescription}
            onChange={handleChange}
            placeholder="Long Description"
            className="w-full px-3 py-2 text-black border rounded-lg"
            rows="4"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium">
            Rating
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            placeholder="Product Rating"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-4 text-lg font-semibold text-white transition-colors rounded-lg hover:bg-white hover:text-black bg-orange"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
