import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../components/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import { Helmet } from "react-helmet-async";


const HomePage = () => {
    const categories = useLoaderData();
    console.log(categories);

    return (
      <div>
        <Helmet>
          <title>Home | Gadget Heaven</title>
        </Helmet>
        <Banner></Banner>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center pb-12">
          Explore Cutting-Edge Gadgets
        </h2>
        <div className="flex justify-between container w-11/12 mx-auto mb-24">
          {/* Categories Sidebar */}
          <Categories categories={categories}></Categories>
          {/* Dynamic Nested Component (Gadgets Cards) */}
          <Outlet></Outlet>
        </div>
      </div>
    );
};

export default HomePage;