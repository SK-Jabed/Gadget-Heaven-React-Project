import { TiThMenu } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
    return (
      <div className="container w-11/12 mx-auto py-4 lg:py-8">
        <div className="navbar-content">
          <div className="navbar flex justify-between items-center mx-auto">
            <div className="dropdown lg:hidden relative ml-2">
              <div
                tabIndex="0"
                role="button"
                className=" lg:hidden hover:bg-userBorderColor"
              >
                <TiThMenu className="text-xl" />
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute left-0"
              >
                <li>
                  <a
                    className="text-xl hover:font-bold hover:transition duration-300 hover:ease-in-out"
                    href="#index.html"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor"
                    href="#best-freind"
                  >
                    Statistics
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor"
                    href="#footer-section"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-start text-left">
              <a className="flex items-center gap-2" href="index.html">
                <span className="text-2xl md:text-3xl font-extrabold text-primaryTextColor">
                  Gadget Heaven
                </span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex items-center mt-4">
              <ul className="menu-options flex gap-8 font-medium">
                <li>
                  <a
                    className="text-xl text-primaryTextColor hover:font-semibold hover:transition duration-300 ease-in-out"
                    href="#index.html"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-semibold"
                    href="#best-freind"
                  >
                    Statistics
                  </a>
                </li>
                <li>
                  <a
                    className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-semibold"
                    href="#footer-section"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex">
              <div className="item gap-2 items-center">
                <a href="#index.html">
                  <AiOutlineShoppingCart className="text-2xl" />
                </a>
              </div>
              <div className="item gap-2 items-center">
                <a href="#index.html">
                  {/* <i className="fa-regular fa-user p-3 bg-primaryColor rounded-full border-2 border-solid border-userBorderColor hover:bg-userBorderColor"></i> */}
                  <FiHeart className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Navbar;