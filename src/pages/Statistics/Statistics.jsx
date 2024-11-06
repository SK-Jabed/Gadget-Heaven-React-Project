import Heading from "../../components/Heading/Heading";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Bar,
  Area,
  Scatter,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const Statistics = () => {
    const data = useLoaderData();

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

        <div className="container w-11/12 mx-auto mt-12">
          <h2 className="font-bold text-2xl">Statistics</h2>
          <div className="mt-8 mb-24 font-semibold text-sm p-6 bg-white rounded-2xl">
            <ResponsiveContainer width="100%" height={400}>
              <ComposedChart data={data}>
                <XAxis dataKey="product_title" />
                <YAxis />
                <Tooltip />
                <Legend />

                {/* Area chart for Price */}
                <Area
                  type="monotone"
                  dataKey="price"
                  fill="#8884d8"
                  stroke="#8884d8"
                />

                {/* Bar chart for Price */}
                <Bar dataKey="price" barSize={22} fill="#7d3bdb" />

                {/* Scatter plot for Rating */}
                <Scatter dataKey="rating" fill="red" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    );
};

export default Statistics;