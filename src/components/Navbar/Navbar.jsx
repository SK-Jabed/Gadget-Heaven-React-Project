import { TiThMenu } from "react-icons/ti";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiHeart } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/" || pathname.startsWith("/cards");

  return (
    <div
      className={`container w-11/12 mx-auto  ${
        isHomePage
          ? "absolute top-0 left-1/2 transform -translate-x-1/2 z-20 px-12 pt-12"
          : "py-8"
      }`}
    >
      <div className="navbar flex justify-between items-center mx-auto">
        {/* Mobile Menu Icon */}
        <div className="dropdown lg:hidden relative ml-2">
          <div
            tabIndex="0"
            role="button"
            className="lg:hidden hover:bg-userBorderColor"
          >
            <TiThMenu className="text-xl" />
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow absolute left-0"
          >
            <li>
              <NavLink
                to="/"
                className="text-xl hover:font-bold hover:transition duration-300"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className="text-xl text-primaryTextColor hover:transition duration-300 hover:font-bold"
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className="text-xl text-primaryTextColor hover:transition duration-300 hover:font-bold"
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Logo */}
        <div className="navbar-start text-left">
          <a className="flex items-center gap-2">
            <span
              className={`text-2xl font-bold ${
                isHomePage ? "text-white" : "text-black"
              }`}
            >
              Gadget Heaven
            </span>
          </a>
        </div>

        {/* Navbar Links */}
        <div className="navbar-center hidden lg:flex items-center mt-4 md:mt-0">
          <ul className="menu-options flex gap-8 font-medium">
            <li>
              <NavLink
                to="/"
                className={`text-lg hover:font-semibold hover:transition duration-300 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/statistics"
                className={`text-lg hover:font-semibold hover:transition duration-300 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
              >
                Statistics
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/dashboard"
                className={`text-lg hover:font-semibold hover:transition duration-300 ${
                  isHomePage ? "text-white" : "text-black"
                }`}
              >
                Dashboard
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Icons Section */}
        <div className="navbar-end flex gap-3">
          <div
            className={`border-2 p-3 rounded-full ${
              isHomePage
                ? "bg-transparent border-white"
                : "bg-white border-gray-200"
            }`}
          >
            <a>
              <AiOutlineShoppingCart
                className={`text-2xl ${
                  isHomePage ? "text-white" : "text-black"
                }`}
              />
            </a>
          </div>
          <div
            className={`border-2 p-3 rounded-full ${
              isHomePage
                ? "bg-transparent border-white"
                : "bg-white border-gray-200"
            }`}
          >
            <a>
              <FiHeart
                className={`text-2xl ${
                  isHomePage ? "text-white" : "text-black"
                }`}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
