import { Link } from "react-router-dom";


const Gadget = ({ gadget }) => {
    const { product_id, product_image, product_title, price } = gadget || {};

    

    // const { pathname } = useLocation();
    // console.log(pathname);
    return (
      <div>
        <div className="card shadow-xl p-6 bg-white transition  hover:scale-105 overflow-hidden cursor-pointer">
          <figure className="rounded-2xl">
            <img
              className="h-[182px] w-[282px]"
              src={product_image}
              alt={product_image}
            />
          </figure>
          <div className="border-b-2 pb-3 mt-8">
            <h2 className="text-xl font-semibold">{product_title}</h2>
            <p className="mt-3 text-base font-semibold text-gray-500">
              Price: ${price}
            </p>
          </div>
          <Link to={`/gadget/${product_id}`} className="mt-4">
            <button className="px-6 py-3 border-2 border-[#9538E2] text-[#9538E2] text-lg font-semibold bg-white rounded-full hover:bg-[#9538E2] hover:text-white">
              View Details
            </button>
          </Link>
        </div>

        
      </div>
    );
};

export default Gadget;