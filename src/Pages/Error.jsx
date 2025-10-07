import Container from "../Components/Container";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import PrimaryBtn from "../Components/PrimaryBtn";
import SectionTitle from "../Components/SectionTitle";
import errorImage from "../assets/error-404.png";

const Error = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 items-center justify-center ">
        <Container>
          <div className="flex flex-col gap-6 items-center mt-16 justify-center">
            <img src={errorImage} alt="Error_iamge" />
            <SectionTitle
              title={"Oops, page not found!"}
              subTitle={"The page you are looking for is not available."}
            />
            <div className="w-[300px]">
              <PrimaryBtn title={"Go back!"} link={"/"} />
            </div>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
export default Error;
