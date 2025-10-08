import logo from "../assets/logo.png";

const LoadingSpinner = () => {
  return (
    <div className="flex h-[400px] items-center justify-center">
      <h3 className="text-5xl text-gray-300 font-bold flex">
        L
        <img className="animate-spin" width={40} src={logo} alt="" />
        ading...
      </h3>
    </div>
  );
};
export default LoadingSpinner;
