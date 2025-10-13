import { Outlet, useLocation } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";
import { useEffect, useState } from "react";
import { ApptContext } from "../Providers/AppContext";

const RootLayouts = () => {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [installeApps, setInstalleApps] = useState([]);

  useEffect(() => {
    setIsRouteLoading(true);
    setShowContent(false);

    const timer = setTimeout(() => {
      setIsRouteLoading(false);
      setShowContent(true);
    }, 800);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <ApptContext.Provider value={{ installeApps, setInstalleApps }}>
      <div className="bg-primary dark:bg-primary-dark flex flex-col min-h-screen">
        {/* Sticky Navbar */}
        <div className="sticky top-0 z-50">
          <Navbar />
        </div>

        {/* Page Content */}
        <div className="flex-1 h-full">
          {isRouteLoading && (
            <div className="flex flex-col items-center justify-center transition-opacity duration-500">
              <div className="mb-4">
                <LoadingSpinner />
              </div>
            </div>
          )}

          {showContent && (
            <main
              className={`relative z-0 transition-opacity duration-1000 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              <Outlet />
            </main>
          )}
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </ApptContext.Provider>
  );
};
export default RootLayouts;
