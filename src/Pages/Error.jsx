import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PrimaryBtn from "../Components/PrimaryBtn";
import errorImage from "../assets/error-404.png";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 items-center justify-center ">
        <Container>
          <div className="flex flex-col gap- items-center mt-16 justify-center">
            <img width={400} src={errorImage} alt="Error_iamge" />
            <div className="text-center ">
              <h2 className="text-4xl font-bold md:text-5xl text-[#001931]">
                Oops, page not found!
              </h2>
              <p className="text-[#627382] mt-3 md:mt-4">
                The page you are looking for is not available.
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:gap-4">
              <div className="w-[160px] mt-5">
                <PrimaryBtn title={"Back to Home!"} link={"/"} />
              </div>
              <div className="w-[160px] mt-5">
                <PrimaryBtn title={"Browse Apps"} link={"/All-Apps"} />
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Error;
