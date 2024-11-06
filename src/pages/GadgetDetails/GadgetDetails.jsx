import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../../components/Heading/Heading";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { addToCart, addToWishList } from "../../utility/localStorage";

const GadgetDetails = () => {
  const allGadgetsData = useLoaderData();
  const { product_id } = useParams();
  const [gadget, setGadget] = useState({});
  const [addedToWishList, setAddedToWishList] = useState(false); // Track if added to wishlist

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    availability,
    rating,
  } = gadget;

  useEffect(() => {
    const singleData = allGadgetsData.find(
      (gadget) => gadget.product_id === parseInt(product_id)
    );
    setGadget(singleData);
  }, [allGadgetsData, product_id]);

  const handleAddToCart = (gadget) => {
    addToCart(gadget);
  };

  const handleAddToWishList = (gadget) => {
    addToWishList(gadget);
    setAddedToWishList(true); // Disable the wishlist button after adding
  };

  return (
    <div className="">
      <div className=" bg-[#9538E2] pt-8 pb-60 w-full">
        <div className="flex flex-col justify-center items-center text-white mb-8">
          <Heading
            title={"Product Details"}
            subtitle={
              "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
            }
          ></Heading>
        </div>
      </div>

      <div className="bg-[#ffffff] p-6 rounded-3xl w-10/12 mx-auto  relative bottom-56 z-10 ">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className=" bg-[#ECECEC] rounded-3xl lg:w-[425px] lg:h-[516px] p-6">
            <img
              className="w-full h-full lg:w-[400px] lg:h-[466px] rounded-3xl"
              src={product_image}
              alt={product_title}
            />
          </div>
          <div className="">
            <h2 className="text-3xl font-bold text-[#09080F]">
              {product_title}
            </h2>
            <p className="text-lg font-semibold text-[#09080F80] mt-3">
              Price: ${price}
            </p>
            <p className="text-base font-semibold text-gray-500 mt-5">
              <span
                className={
                  availability
                    ? "text-[#309C08] py-2 px-4 rounded-full bg-[#309C0820] border-2 border-[#309C08]"
                    : "text-[#de1818] py-2 px-4 rounded-full bg-[#de181820] border-2 border-[#de1818]"
                }
              >
                {availability ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="text-lg font-normal text-[#09080F60] mt-5">
              {description}
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <h2 className="text-lg font-bold mb-1">Specification:</h2>
              <ol className="text-lg font-normal text-[#09080F70] ml-6">
                {specification &&
                  specification.map((item, i) => (
                    <li className="list-decimal" key={i}>
                      {item}
                    </li>
                  ))}
              </ol>
            </div>
            <h2 className="text-lg font-bold mb-1 mt-3">Rating:</h2>
            <button className="text-black font-semibold px-4 py-2 rounded-full bg-[#09080F10]">
              {rating}
            </button>
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-2  py-3 px-6 bg-[#9538E2] text-white rounded-full hover:bg-white hover:text-[#9538E2] hover:border-2 hover:border-[#9538E2]">
                <button
                  onClick={() => handleAddToCart(gadget)}
                  className=" text-lg font-semibold"
                >
                  Add To Cart
                </button>
                <AiOutlineShoppingCart className="text-2xl" />
              </div>
              <div
                onClick={
                  !addedToWishList ? () => handleAddToWishList(gadget) : null
                }
                className={`border-2 border-gray-200 p-3 rounded-full ${
                  addedToWishList
                    ? "bg-gray-400"
                    : "bg-white hover:bg-[#9538E2] hover:text-white"
                }`}
                style={{ cursor: addedToWishList ? "" : "pointer" }}
              >
                <FiHeart className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GadgetDetails;
