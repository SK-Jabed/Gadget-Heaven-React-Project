

const Heading = ({ title, subtitle }) => {
    return (
      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
          {title}
        </h2>
        <p className="text-sm md:text-base mt-3 text-center w-6/12">
          {subtitle}
        </p>
      </div>
    );
};

export default Heading;