const SkeletonLoading = ({ count = 6 }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className="flex flex-col gap4 p-4 w-full bg-white rounded-md space-y-4"
        >
          <div className="skeleton w-full h-[230px] rounded-md"></div>
          <div className="space-y-6">
            <div className="skeleton h-5 w-44"></div>
            <div className="skeleton h-10 w-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default SkeletonLoading;
