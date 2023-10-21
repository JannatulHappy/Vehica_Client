import React from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const singleData = useLoaderData();
    
 
  const handleUpdate = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const type = form.type.value;
    const priceInDollars = form.priceInDollars.value;

    const rating = form.rating.value;
    const image = form.image.value;

 const updateData = {
      name,
      brandName,
      type,
      priceInDollars,
      rating,
      image,
    };

    fetch(
      `https://vehica-server.vercel.app/api/products/update/${singleData._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          Swal.fire("Good job!", "Product Added Successfully!", "success");
        } else {
          Swal.fire({
            icon: "error",
            title: "Failed to Update the product.",
            text: error,
          });
        }
      });
  };

  return (
    <div className="px-5 pb-20 mx-auto my-20 md:w-2/5">
      <h1 className="mb-4 text-4xl font-bold text-center">Update Product</h1>
      <form onSubmit={handleUpdate}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            defaultValue={singleData.name}
            name="name"
            id="name"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="brandName" className="block text-sm font-medium">
            Brand Name
          </label>
          <input
            type="text"
            defaultValue={singleData.brandName}
            name="brandName"
            id="brandName"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="type" className="block text-sm font-medium">
            Type
          </label>
          <input
            type="text"
            defaultValue={singleData.type}
            name="type"
            id="type"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="priceInDollars" className="block text-sm font-medium">
            Price in Dollars
          </label>
          <input
            type="number"
            defaultValue={singleData.priceInDollars}
            name="priceInDollars"
            id="priceInDollars"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-sm font-medium">
            Rating
          </label>
          <input
            type="number"
            defaultValue={singleData.rating}
            name="rating"
            id="rating"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="image" className="block text-sm font-medium">
            Image URL
          </label>
          <input
            type="text"
            defaultValue={singleData.image}
            name="image"
            id="image"
            className="w-full px-3 py-2 text-black border rounded-lg"
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-8 py-3 text-lg font-medium text-white rounded-lg bg-orange hover:bg-blue-700"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
