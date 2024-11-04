import { useLoaderData, useParams } from "react-router-dom";
import Gadget from "../Gadget/Gadget";
import { useEffect, useState } from "react";


const GadgetCards = () => {
    const data = useLoaderData();
    
    const { category } = useParams();
    const [gadgets, setGadgets] = useState([]);

    useEffect(() => {
        if (category) {
            const filteredByCategory = [...data].filter(
              (gadget) => gadget.category === category
            );
            setGadgets(filteredByCategory);
        }
        else {
            setGadgets(data);
        }
    }, [category, data]);

    console.log(data);

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gadgets.map((gadget) => (
          <Gadget key={gadget.product_id} gadget={gadget}></Gadget>
        ))}
      </div>
    );
};

export default GadgetCards;