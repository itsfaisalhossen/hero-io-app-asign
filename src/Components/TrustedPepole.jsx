import Container from "./Container";

const TrustedPepole = () => {
  return (
    <div className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] ">
      <Container>
        <div className="py-10 md:py-14 lg:py-20">
          <h3 className="text-center text-3xl md:text-5xl font-bold text-white">
            Trusted by Millions, Built for You
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mt-6 md:mt-10 px-0 lg:px-44">
            <div className="space-y-3 md:space-y-4 text-center text-white">
              <p className="text-sm font-normal text-gray-200">
                Total Downloads
              </p>
              <h3 className="font-bold text-5xl md:text-6xl">29.6M</h3>
              <p className="text-sm font-normal text-gray-200">
                21% more than last month
              </p>
            </div>
            <div className="space-y-3 md:space-y-4 text-center text-white">
              <p className="text-sm font-normal text-gray-200">Total Reviews</p>
              <h3 className="font-bold text-5xl md:text-6xl">906K</h3>
              <p className="text-sm font-normal text-gray-200">
                46% more than last month
              </p>
            </div>
            <div className="space-y-3 md:space-y-4 text-center text-white">
              <p className="text-sm font-normal text-gray-200">Active Apps</p>
              <h3 className="font-bold text-5xl md:text-6xl">29.6M</h3>
              <p className="text-sm font-normal text-gray-200">
                31 more will Launch
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default TrustedPepole;
