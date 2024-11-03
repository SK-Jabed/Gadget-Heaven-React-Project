import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";


const MainLayout = () => {
    return (
        <div className="bg-[#F6F6F6]">
            {/* Navbar */}
            <Navbar></Navbar>
            {/* Dynamic Sections */}
            {/* Footer */}
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;