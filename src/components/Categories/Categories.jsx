import { NavLink } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="flex flex-col gap-6 p-6 bg-white rounded-2xl h-[456px]">
      {/* <button onClick={() => setGadgets(data)} className="btn">All Product</button> */}
      {categories.map((category) => (
        <NavLink
          key={category.category}
          to={`/cards/${category.category}`}
          className={({ isActive }) =>
            ` ${
              isActive
                ? "text-white text-lg font-medium px-7 py-3 rounded-full bg-[#9538E2]"
                : "text-lg font-medium text-[#09080F80] px-7 py-3 rounded-full bg-[#09080F05]"
            }`
          }
        >
          {category.category}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;
