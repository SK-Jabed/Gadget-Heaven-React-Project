import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
      <div className="bg-[#F6F6F6]">
        {/* Navbar */}
        <Navbar></Navbar>
        <div className="min-h-[calc(100vh-565px)] container mx-auto px-12">
          {/* Dynamic Sections */}
          <Outlet></Outlet>
        </div>
        {/* Footer */}
        <Footer></Footer>
      </div>
    );
};

export default MainLayout;