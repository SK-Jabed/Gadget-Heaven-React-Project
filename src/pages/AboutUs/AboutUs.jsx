import { Helmet } from "react-helmet-async";
import Heading from "../../components/Heading/Heading";


const AboutUs = () => {
    return (
      <div>
        <Helmet>
          <title>About Us | Gadget Heaven</title>
        </Helmet>

        <div className=" bg-[#9538E2] w-full pt-8 pb-60">
          <div className="flex flex-col justify-center items-center text-white mb-8">
            <Heading
              title={"About Us"}
              subtitle={
                "Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!"
              }
            ></Heading>
          </div>
        </div>

        <div className="bg-[#ffffff] p-6 rounded-3xl w-10/12 mx-auto  relative bottom-56 z-10 ">
           {/* Our Mission Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-[#9538E2]">Our Mission</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Gadget Heaven is dedicated to helping tech enthusiasts find the perfect gadgets to suit their needs and lifestyles. Whether looking for cutting-edge smartphones, powerful laptops, or unique accessories, our mission is to provide you with high-quality products that blend functionality with style.
        </p>
      </section>

      {/* Why Choose Gadget Heaven Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center text-[#9538E2]">Why Choose Us?</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-start">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
            <h3 className="text-xl font-semibold text-[#9538E2]">Quality and Innovation</h3>
            <p className="mt-2">
              We bring you the best in tech, with a curated selection of top-rated products from trusted brands.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
            <h3 className="text-xl font-semibold text-[#9538E2]">Customer-Centric Approach</h3>
            <p className="mt-2">
              Our goal is to make your shopping experience as smooth and enjoyable as possible. We’re here to guide you every step of the way.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
            <h3 className="text-xl font-semibold text-[#9538E2]">Passion for Technology</h3>
            <p className="mt-2">
              We are as enthusiastic about technology as our customers are, and we strive to stay updated with the latest trends and innovations.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-[#9538E2]">Our Values</h2>
        <div className="mt-8 flex flex-col md:flex-row gap-8 justify-center items-start">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
            <h3 className="text-xl font-semibold text-[#9538E2]">Customer Satisfaction</h3>
            <p className="mt-2">
              We put our customers first and aim to deliver an unparalleled shopping experience.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
            <h3 className="text-xl font-semibold text-[#9538E2]">Innovation and Quality</h3>
            <p className="mt-2">
              We continuously update our catalog to include the most advanced, reliable, and premium-quality gadgets available.
            </p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center max-w-xs">
            <h3 className="text-xl font-semibold text-[#9538E2]">Sustainability</h3>
            <p className="mt-2">
              We are committed to responsible sourcing and aim to include eco-friendly tech products in our selection.
            </p>
          </div>
        </div>
      </section>

      {/* Optional: Our Journey Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center text-[#9538E2]">Our Journey</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-center">
          Gadget Heaven started as a small project with a big dream: to make technology more accessible and enjoyable for everyone. Today, we are proud to serve tech enthusiasts around the world with a commitment to quality and innovation.
        </p>
      </section>

      {/* Optional: Meet the Team Section */}
      <section className="py-12 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-[#9538E2]">Meet the Team</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto text-center">
          Behind Gadget Heaven is a team of tech enthusiasts and professionals, dedicated to bringing you the best products and an exceptional shopping experience.
        </p>
      </section>

      {/* Contact Us Section */}
      <section className="py-12 text-center">
        <h2 className="text-3xl font-semibold text-[#9538E2]">Have Questions?</h2>
        <p className="text-lg mt-4 max-w-xl mx-auto">
          We’d love to hear from you! Feel free to reach out with any questions or feedback.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#9538E2] text-white rounded-full hover:bg-[#7c2bb7] transition duration-200">
          Contact Us
        </button>
      </section>
            
              
          {/* </div> */}
        </div>
      </div>
    );
};

export default AboutUs;