import Heading from "../../components/Heading/Heading";
import { Helmet } from "react-helmet-async";


const Statistics = () => {
    return (
      <div>
        <Helmet>
          <title>Statistics | Gadget Heaven</title>
        </Helmet>

        <div className=" bg-[#9538E2] py-8 w-full">
          <div className="flex flex-col justify-center items-center text-white mb-8">
            <Heading
              title={"Statistics"}
              subtitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            ></Heading>
          </div>
        </div>

        <div className="container w-11/12 mx-auto my-12">
          <h2 className="font-bold text-xl">Statistics</h2>
        </div>
      </div>
    );
};

export default Statistics;