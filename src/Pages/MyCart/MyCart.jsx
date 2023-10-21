import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5005/api/products/cart/${user.email}`)
      .then((res) => res.json())
      .then((data) => setCartData(data));
  }, [user.email]);

  const handleRemoveFromCart = (id) => {
    fetch(`http://localhost:5005/api/products/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.status === 200) {
          Swal.fire(
           
            "Deleted Successfully!",
            "",
            "success"
          );
          setCartData((prevData) => prevData.filter((item) => item._id !== id));
        }
      })
      .catch((error) =>  Swal.fire({
              icon: "error",
              title: "Failed to add the product to the cart.",
              text: error,
            }));
  };
  if (cartData === 0) {
  }
  return (
    <div className="mx-auto mt-8 max-w-[1440px]">
      {cartData.length === 0 ? (
        <div className="flex items-center justify-center h-screen ">
          <h2 className="text-3xl font-bold ">
            You have not added any product in your Cart!
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 my-40 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {cartData.map((item) => (
            <div key={item._id} className="p-4 border rounded-md shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full h-40 mb-4 rounded-lg"
              />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-500">{item.brandName}</p>
              <p className="text-gray-500">{item.type}</p>
              <p className="text-gray-500">Price: ${item.priceInDollars}</p>
              <p className="text-gray-500">Rating: {item.rating}</p>
              <button
                onClick={() => handleRemoveFromCart(item._id)}
                className="px-4 py-3 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-700"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyCart;
