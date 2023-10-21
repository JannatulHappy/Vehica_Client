import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

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
         alert("Deleted successfully");
         setCartData((prevData) => prevData.filter((item) => item._id !== id));
       }
     })
     .catch((error) => console.error("Error removing item from cart:", error));
 };

  return (
    <div className="container mx-auto mt-8">
      <h1 className="mb-4 text-3xl font-semibold">My Cart</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {cartData.map((item) => (
          <div key={item._id} className="p-4 border rounded-md shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="object-cover w-full h-40 mb-4"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-gray-500">{item.brandName}</p>
            <p className="text-gray-500">{item.type}</p>
            <p className="text-gray-500">Price: ${item.priceInDollars}</p>
            <p className="text-gray-500">Rating: {item.rating}</p>
            <button
              onClick={() => handleRemoveFromCart(item._id)}
              className="p-2 mt-4 text-white bg-red-500 rounded-full hover:bg-red-700"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
