import { Link } from "react-router-dom";


const Footer = () => {
    return (
      <footer className="w-full bg-white py-20">
        <div className=" w-9/12 flex flex-col items-center mx-auto text-center lg:text-balance">
          <h2 className="text-[#09080F] text-3xl font-bold mb-2">
            Gadget Heaven
          </h2>
          <p className="text-[#09080F60] font-medium pb-8 ">
            Leading the way in cutting-edge technology and innovation.
          </p>
        </div>
        <div className="border-b-2 w-10/12 mx-auto"></div>
        <div className="lg:w-8/12 mx-auto px-8 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 pt-6">
            <div className="flex flex-col justify-start gap-1">
              <h2 className="text-lg font-bold text-[#09080F] mb-2">
                Services
              </h2>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Product Support
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Order Tracking
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Shipping & Delivery
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Returns
              </Link>
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-bold text-[#09080F] mb-2">Company</h2>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                About Us
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Careers
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Contact
              </Link>
            </div>
            <div className="flex flex-col justify-start">
              <h2 className="text-lg font-bold text-[#09080F] mb-2">Legal</h2>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Terms of Service
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Privacy Policy
              </Link>
              <Link className="text-[#09080F60] font-medium hover:text-black">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;