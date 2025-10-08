import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useEffect, useState } from "react";

const RootLayouts = () => {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setIsRouteLoading(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setIsRouteLoading(false);
      setShowContent(true);
    }, 600);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* flex-1 h-full w-full */}
      <div className="flex-1 h-full">
        {
          isRouteLoading && (
            <div className="fflex flex-col items-center justify-center transition-opacity duration-500">
              <div className="mb-4">
                <LoadingSpinner />
              </div>
            </div>
          )
          // <LoadingSpinner />
        }
        {showContent && (
          <main
            className={`relative z-0 transition-opacity duration-500 ${
              showContent ? "opacity-100" : "opacity-0"
            }`}
            // className={`${
            //   isRouteLoading ? "opacity-0" : "opacity-100"
            // } transition-opacity duration-300`}
          >
            <Outlet />
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default RootLayouts;
