import { Outlet, useNavigate } from "react-router";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoadingSpinner from "../Components/LoadingSpinner";

const RootLayouts = () => {
  const navigation = useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1 w-full">
        {navigation.state === "loading" ? (
          <LoadingSpinner />
        ) : (
          <main>
            <Outlet />
          </main>
        )}
      </div>
      <Footer />
    </div>
  );
};
export default RootLayouts;
