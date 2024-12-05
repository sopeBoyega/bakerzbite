import React, { useState } from "react";
import { products } from "../../assets/assets";
import Modal from "../modal";


const Products = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  // Function to handle product click
  const handleItemClick = (item) => {
    setSelectedItem(item); // Pass the selected item to the modal
  };

  // Function to close modal
  const closeModal = () => {
    setSelectedItem(null);
  };

  return (
    <>
      {/* Product Grid */}
      <div className="grid w-full justify-between grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
        {products.map((item, key) => {
          if (category === "All" || category === item.category) {
            return (
              <div
                key={key}
                className="border rounded-lg shadow-lg p-4 bg-white cursor-pointer"
                onClick={() => handleItemClick(item)} // Pass product on click
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full md:w-1/2 h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-lg text-black mb-2">
                  ₦{(item.price * 1795).toFixed(2)}
                </p>
                <p className="text-sm text-bakerzBiteDarkBrown font-bold mb-4">
                  {!item.discount ? "" : `${item.discount} Discount`}
                </p>
                <button className="w-full bg-bakerzBiteDarkBrown text-bakerzBiteLightBrown py-2 px-4 rounded hover:bg-green-600 transition">
                  View Deal
                </button>
              </div>
            );
          }
          return null;
        })}
      </div>

      {/* Use Modal Component */}
      <Modal item={selectedItem} onClose={closeModal} />
    </>
  );
};

export default Products;
