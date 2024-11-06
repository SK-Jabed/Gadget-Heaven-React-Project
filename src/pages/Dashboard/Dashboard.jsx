import { Outlet } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { useState } from "react";
import CartProduct from "../../components/CartProduct/CartProduct";
import WishListProduct from "../../components/WishListProduct/WishListProduct";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  const [isActive, setIsActive] = useState({
    product: true,
    status: "cart",
  });

  const handleIsActiveBtn = (status) => {
    if (status === "cart") {
      setIsActive({
        product: true,
        status: "cart",
      });
    } else {
      setIsActive({
        product: false,
        status: "wishlist",
      });
    }
  };

  return (
    <div>
      <Helmet>
        <title>Dashboard | Gadget Heaven</title>
      </Helmet>
      <div className="bg-[#9538E2] py-8 w-full">
        <div className="flex flex-col justify-center items-center text-white mb-8">
          <Heading
            title={"Dashboard"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></Heading>
        </div>
        <div className="flex items-center gap-6 justify-center">
          {/* Cart Button */}
          <button
            onClick={() => handleIsActiveBtn("cart")}
            className={`${
              isActive.status === "cart"
                ? "py-3 px-16 rounded-full bg-white text-[#9538E2] text-lg font-semibold"
                : "py-3 px-16 rounded-full text-white text-lg font-semibold border-2 border-white"
            }`}
          >
            Cart
          </button>

          {/* Wishlist Button */}
          <button
            onClick={() => handleIsActiveBtn("wishlist")}
            className={`${
              isActive.status === "wishlist"
                ? "py-3 px-16 rounded-full bg-white text-[#9538E2] text-lg font-semibold"
                : "py-3 px-16 rounded-full text-white text-lg font-semibold border-2 border-white"
            }`}
          >
            Wishlist
          </button>
        </div>
      </div>

      {/* Conditional rendering based on active status */}
      {isActive.product ? <CartProduct /> : <WishListProduct />}

      <Outlet />
    </div>
  );
};

export default Dashboard;
