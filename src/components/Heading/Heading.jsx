

const Heading = ({ title, subtitle }) => {
    return (
      <div className="flex flex-col w-full justify-center items-center">
        <h2 className="text-xl md:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-sm md:text-lg font-medium text-white">{subtitle}</p>
      </div>
    );
};

export default Heading;