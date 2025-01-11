import { useEffect, useState } from "react";
import {
  getAllCartProducts,
  removeCartProduct,
  clearCart,
} from "../../utility/localStorage";
import { useNavigate } from "react-router-dom";
import { RxCrossCircled } from "react-icons/rx";
import modalIcon from "../../assets/Group.png";

const CartProduct = () => {
  const [gadgets, setGadgets] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const navigate = useNavigate();

  const [sort, setSort] = useState("");

  const handleSort = (sortType) => {
    setSort(sortType);

    if (sortType === "Price") {
      const sortedPriceList = [...gadgets].sort((a, b) => b.price - a.price);
      setGadgets(sortedPriceList);
    }

    if (sortType === "Rating") {
      const sortedPriceList = [...gadgets].sort((a, b) => b.rating - a.rating);
      setGadgets(sortedPriceList);
    }

    if (sortType === "Popularity") {
      const sortedPriceList = [...gadgets].sort(
        (a, b) => b.popularity - a.popularity
      );
      setGadgets(sortedPriceList);
    }
  };

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
          <h2 className="font-bold text-2xl">Cart</h2>
        </div>
        <div className="flex items-center gap-4">
          <p className="font-bold text-xl">Total Cost: ${totalCost}</p>

          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="px-8 py-3 rounded-full border-[#8332C5] bg-white border-2 text-[#9538E2] font-semibold"
            >
              {sort ? `Sort by: ${sort}` : "Sort by"}
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
            >
              <li onClick={() => handleSort("Price")}>
                <a>Price</a>
              </li>
              <li onClick={() => handleSort("Rating")}>
                <a>Rating</a>
              </li>
              <li onClick={() => handleSort("Popularity")}>
                <a>Popularity</a>
              </li>
            </ul>
          </div>

          <button
            onClick={handlePurchase}
            disabled={totalCost === 0}
            className={`px-7 py-[14px] rounded-full text-white font-bold ${
              totalCost === 0 ? "bg-gray-400" : "bg-violet-600"
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
                className="w-36 h-40 border-1 p-1 rounded-2xl"
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
                <p className="text-lg font-semibold text-gray-600">
                  Rating: {gadget.rating}
                </p>
                <p className="text-lg font-semibold text-gray-600">
                  Popularity: {gadget.popularity}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(gadget.product_id)}
              className="text-5xl text-red-500 mr-12"
            >
              <RxCrossCircled />
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box flex flex-col container w-11/12 mx-auto justify-center items-center">
          <img className="w-16 text-center" src={modalIcon} alt="" />
          <h2 className="font-bold text-xl mt-6 pb-3 border-b-2">
            Payment Successfully
          </h2>
          <p className="py-4 text-gray-500 font-semibold">
            Thanks for purchasing
          </p>
          <div className="modal-action">
            <button
              className="btn w-[122px]"
              onClick={() => closeModalAndRedirect()}
            >
              Close
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartProduct;
