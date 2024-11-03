import { TiThMenu } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

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
                  <NavLink to={"/"} className="text-xl hover:font-bold hover:transition duration-300 hover:ease-in-out">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/statistics"} className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor">
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard"} className="text-xl text-primaryTextColor hover:transition duration-300 ease-in-out hover:font-bold hover:primaryTextColor">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-start text-left">
              <a className="flex items-center gap-2">
                <span className="text-2xl font-bold ">
                  Gadget Heaven
                </span>
              </a>
            </div>
            <div className="navbar-center hidden lg:flex items-center mt-4 md:mt-0">
              <ul className="menu-options flex gap-8 font-medium">
                <li>
                  <NavLink to={"/"} className="text-lg hover:font-semibold hover:transition duration-300 ease-in-out">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/statistics"} className="text-lg hover:transition duration-300 ease-in-out hover:font-semibold">
                    Statistics
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashboard"} className="text-lg hover:transition duration-300 ease-in-out hover:font-semibold">
                    Dashboard
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-end flex gap-3">
              <div className="border-2 border-gray-200 p-3 rounded-full bg-white">
                <a>
                  <AiOutlineShoppingCart className="text-2xl" />
                </a>
              </div>
              <div className="border-2 border-gray-200 p-3 rounded-full bg-white">
                <a>
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