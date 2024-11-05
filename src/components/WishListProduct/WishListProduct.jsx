import { useEffect, useState } from "react";
import { getAllWishListProducts } from "../../utility/localStorage";
import { RxCrossCircled } from "react-icons/rx";

const WishListProduct = () => {
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
      const wishListProduct = getAllWishListProducts();
      setGadgets(wishListProduct);
    }, []);


    return (
      <div>
        <h2>Wish List Product...</h2>

        <div className="container w-11/12 mx-auto flex items-center justify-between mt-12">
          <div>
            <h2>Wishlist</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="btn">Purchase</button>
          </div>
        </div>

        <div className="container w-11/12 mx-auto my-12">
          {gadgets.map((gadget, idx) => (
            <div
              key={idx}
              className="border-2 border-solid p-2 rounded-2xl flex justify-between items-center mb-2"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <img
                    className="w-28 h-28 border-1 p-1 rounded-2xl"
                    src={gadget.product_image}
                    alt="Cart Product Image"
                  ></img>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-[#131313]">
                    {gadget.product_title}
                  </h3>
                  <p className="text-lg font-semibold text-gray-600">
                    {gadget.description}
                  </p>
                  <p className="text-lg font-semibold text-gray-600">
                    Price: {gadget.price}
                  </p>
                </div>
              </div>
              <div
                
                className=""
              >
                <button className="cursor-pointer">
                  <RxCrossCircled className="text-4xl text-red-400 mr-10" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default WishListProduct;