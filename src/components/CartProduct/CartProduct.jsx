import { useEffect, useState } from "react";
import {
  getAllCartProducts,
  removeCartProduct,
  clearCart,
} from "../../utility/localStorage";
import { useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";

const CartProduct = () => {
  const [gadgets, setGadgets] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const cartProduct = getAllCartProducts();
    setGadgets(cartProduct);
  }, []);

  useEffect(() => {
    const calculateTotalCost = gadgets.reduce(
      (total, gadget) => total + gadget.price,
      0
    );
    setTotalCost(calculateTotalCost);
  }, [gadgets]);

  const handlePurchase = () => {
    if (gadgets.length > 0) {
      // Immediately clear the cart in local storage and reset the UI
      clearCart();
      setGadgets([]); // Reset gadgets state
      setTotalCost(0); // Reset total cost to zero

      // Show the modal
      document.getElementById("my_modal_5").showModal();
    }
  };

  const closeModalAndRedirect = () => {
    navigate("/"); // Redirect to homepage
  };

  const handleRemove = (id) => {
    removeCartProduct(id);
    setGadgets((prevGadgets) =>
      prevGadgets.filter((gadget) => gadget.product_id !== id)
    );
  };

  return (
    <div>
      <div className="container w-11/12 mx-auto flex items-center justify-between mt-12">
        <div>
          <h2 className="font-bold text-xl">Cart</h2>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-bold text-xl">Total Cost: ${totalCost}</p>
          <button
            onClick={handlePurchase}
            disabled={totalCost === 0}
            className={`px-7 py-[14px] rounded-full border-2 border-[#8332C5] text-white font-bold ${
              totalCost === 0
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-violet-600"
            }`}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="container w-11/12 mx-auto mt-6 mb-16">
        {gadgets.map((gadget, idx) => (
          <div
            key={idx}
            className="border-2 border-solid p-2 rounded-2xl flex justify-between items-center mb-2"
          >
            <div className="flex items-center gap-2">
              <img
                className="w-28 h-28 border-1 p-1 rounded-2xl"
                src={gadget.product_image}
                alt="Cart Product"
              />
              <div>
                <h3 className="text-2xl font-bold">{gadget.product_title}</h3>
                <p className="text-lg font-semibold text-gray-600">
                  {gadget.description}
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Price: ${gadget.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(gadget.product_id)}
              className="text-4xl text-red-400"
            >
              <RxCrossCircled />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Congratulations!</h3>
          <p className="py-4">You have successfully purchased all products.</p>
          <div className="modal-action">
            <button className="btn" onClick={() => closeModalAndRedirect()}>
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartProduct;
