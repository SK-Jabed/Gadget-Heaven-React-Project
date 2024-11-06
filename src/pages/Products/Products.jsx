import { Helmet } from "react-helmet-async";
import Heading from "../../components/Heading/Heading";
import { useLoaderData } from "react-router-dom";
import Gadget from "../../components/Gadget/Gadget";


const Products = () => {
    const allProductsData = useLoaderData();

    return (
      <div>
        <Helmet>
          <title>Products | Gadget Heaven</title>
        </Helmet>

        <div className="bg-[#9538E2] py-8 w-full">
          <div className="flex flex-col justify-center items-center text-white mb-8">
            <Heading
              title={"All Products"}
              subtitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            ></Heading>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto w-11/12 py-12 ">
          {allProductsData.map((gadget) => (
            <Gadget key={gadget.product_id} gadget={gadget} />
          ))}
        </div>
      </div>
    );
};

export default Products;