import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[1220px] md:h-[1120px] container w-11/12 mx-auto relative pt-8">
      <div className="bg-[#9538E2] rounded-2xl pt-32 pb-64 relative z-10">
        <div className="flex flex-col justify-center items-center text-white">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-center w-3/4">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="text-sm md:text-base py-6 text-center w-7/12">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <Link to={"/dashboard"}>
            <button className="px-7 py-3 bg-white rounded-full text-[#9538E2] text-lg font-bold">
              Shop Now
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#ffffff15] bg-opacity-15 border-2 border-white rounded-3xl w-10/12 mx-auto lg:p-6 p-3 border-solid absolute bottom-16 left-1/2 transform -translate-x-1/2 z-20 ">
        <div className="bg-bannerImage h-[36rem] bg-cover bg-center rounded-3xl">
          {/* Background Image */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
