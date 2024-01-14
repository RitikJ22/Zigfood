const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center m-6 min-h-screen">
      {Array(8)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4"
          >
            <div className="h-72 bg-gray-200 animate-pulse rounded"></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;

