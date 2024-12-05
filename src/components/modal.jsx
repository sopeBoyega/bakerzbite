import React from "react";

const Modal = ({ item, onClose }) => {
  if (!item) return null; // Ensure the modal renders only when an item is selected

  const formatIngredients = (ingredients) =>
    ingredients && ingredients.length > 0
      ? ingredients.join(", ")
      : "Not Available";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="text-red-600 font-bold text-xl absolute top-4 right-4"
        >
          &times;
        </button>
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        <h3 className="text-2xl font-semibold mb-2">{item.name}</h3>
        <p className="text-lg text-black mb-2">
          Price: ₦{(item.price * 1795).toFixed(2)}
        </p>
        <p className="text-lg text-black mb-2">
          Discount: {item.discount || "None"}
        </p>
        <p className="text-sm text-gray-700 mb-4">
        Ingredients: {formatIngredients(item.ingredients)}
        </p>
        <button
          onClick={onClose}
          className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-800 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
