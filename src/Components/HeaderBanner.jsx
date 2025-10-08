import { Link } from "react-router";
import googlePlay from "../assets/google-play.png";
import appsStore from "../assets/apps-store.png";
import heroImage from "../assets/hero.png";
import Container from "./Container";

export const HeaderBanner = () => {
  return (
    <div>
      <Container>
        <div className="text-center flex items-center flex-col mt-12 md:mt-16">
          <h3 className="w-full md:w-[590px] mx-auto text-5xl md:text-7xl font-bold">
            We Build{" "}
            <span className="text-color md:leading-24">Productive</span> Apps
          </h3>
          <p className="mt5 w-full lg:w-[850px] text-gray-600 mx-auto">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting. Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="flex my-8 md:my-10 items-center justify-center gap-4">
            <Link
              to="https://play.google.com/"
              target="blank"
              className=" border-1 rounded-md hover:border-gray-400 transition-all duration-300 border-gray-300 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium flex items-center gap-1.5"
            >
              <img width={30} src={googlePlay} alt="" />
              Google Play
            </Link>
            <Link
              to="https://www.apple.com/app-store/"
              target="blank"
              className=" border-1 rounded-md hover:border-gray-400 transition-all duration-300 border-gray-300 px-4 py-2 md:px-6 md:py-3 text-sm md:text-lg font-medium flex items-center gap-1.5"
            >
              <img width={30} src={appsStore} alt="" />
              Apps Store
            </Link>
          </div>
          <img width={800} src={heroImage} alt="" />
        </div>
      </Container>
    </div>
  );
};
