import Container from "../Components/Container";
import iconDownloads from "../assets/icon-downloads.png";
import iconReview from "../assets/icon-review.png";
import iconRatings from "../assets/icon-ratings.png";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";
import LoadingSpinner from "../Components/LoadingSpinner";
import PrimaryBtn from "../Components/PrimaryBtn";
import AppError from "../assets/App-Error.png";

const AppDetails = () => {
  const { apps, loading } = useApps();
  const { prductID } = useParams();
  // const { installeApps, setInstalleApps } = useContext(ApptContext);
  const [installBtn, setInstallBtn] = useState(false);
  const singleApp = apps.find((app) => app.id === Number(prductID));

  useEffect(() => {
    const existingAppsList =
      JSON.parse(localStorage.getItem("installAppslist")) || [];
    const isAlreadyInstalled = existingAppsList.some(
      (app) => app.id === Number(prductID)
    );
    if (isAlreadyInstalled) {
      setInstallBtn(true);
    }
  }, [prductID]);

  const handleAddToInstall = (id) => {
    const existingAppsList =
      JSON.parse(localStorage.getItem("installAppslist")) || [];
    const isDuplicate = existingAppsList.some((app) => app.id === id);
    if (isDuplicate) {
      setInstallBtn(true);
      return Swal.fire({
        title: "Already Installed!",
        text: `${title} is already installed.`,
        icon: "info",
        draggable: true,
      });
    }
    const updatedAppsList = [...existingAppsList, singleApp];
    localStorage.setItem("installAppslist", JSON.stringify(updatedAppsList));
    Swal.fire({
      title: title,
      text: "Installed Successful!",
      icon: "success",
      draggable: true,
    });
    setInstallBtn(true);
  };

  if (loading) return <LoadingSpinner />;
  const {
    id,
    image,
    ratings,
    size,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
  } = singleApp || {};

  if (!singleApp) {
    return (
      <div className="flex my-8 md:my-16 space-y-5 md:space-y-7 flex-col items-center justify-center min-h-[60vh] text-center">
        <img width={300} src={AppError} alt="" />
        <h2 className="text-2xl md:text-4xl font-bold text-red-500">
          OPPS!! APP NOT FOUND
        </h2>
        <p className="text-gray-500">
          The App you are requesting is not found on our system. please try
          another apps
        </p>
        <div className="flex flex-col md:flex-row md:gap-4">
          <div className="w-[160px] mt-5">
            <PrimaryBtn title={"Back to Home!"} link={"/"} />
          </div>
          <div className="w-[160px] mt-5">
            <PrimaryBtn title={"Browse Apps"} link={"/All-Apps"} />
          </div>
        </div>
      </div>
    );
  }

  return singleApp ? (
    <div className="transition-opacity ease-in duration-500 opacity-100">
      <Container>
        {/* detaisl header */}
        <div className=" flex flex-col items-center md:flex-row gap-5 mt-[80px] mb-[40px] md:gap-10">
          <div className="w-[330px] flex items-center justify-center">
            <img width={140} src={image || null} alt="" />
          </div>
          <div className="space-y-[20px] w-full">
            <h3 className="text-2xl font-medium">{title}</h3>

            <p>
              Developed by {""}
              <span className="font-semibold text-color">{companyName}</span>
            </p>
            <hr className="w-full text-gray-400" />
            <div className="flex gap-10">
              <div className="space-y-3">
                <img src={iconDownloads} width={30} alt="" />
                <p className="text-sm">Downloads</p>
                <h4 className="text-xl md:text-3xl font-bold">{downloads}M</h4>
              </div>
              <div className="space-y-3">
                <img src={iconRatings} width={30} alt="" />
                <p className="text-sm">Average Ratings</p>
                <h4 className="text-xl md:text-3xl font-bold">{ratingAvg}</h4>
              </div>
              <div className="space-y-3">
                <img src={iconReview} width={30} alt="" />
                <p className="text-sm">Total Reviews</p>
                <h4 className="text-xl md:text-3xl font-bold">{reviews}k</h4>
              </div>
            </div>
            <button
              onClick={() => handleAddToInstall(id)}
              disabled={installBtn}
              className={`py-2 px-4 rounded font-medium cursor-pointer text-white ${
                installBtn
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#00D390] hover:bg-[#00b87d]"
              } transition`}
            >
              {installBtn ? "Installed" : `Install Now (${size}MB)`}
            </button>
          </div>
        </div>
        {/* detaisl Ratings */}
        <div className="border-t-2 border-b-2 border-gray-200 py-8">
          <h3 className="text-xl font-semibold">Ratings</h3>
          <div className="py-4 h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                layout="vertical"
                width={500}
                height={500}
                data={ratings}
                margin={{
                  top: 10,
                  right: 20,
                  left: -10,
                }}
              >
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" scale="band" />
                <Tooltip />
                <Bar dataKey="count" barSize={20} fill="#FF8811" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* detaisl Description */}
        <div className="my-8">
          <h3 className="text-xl font-semibold mb-6">Descriptions</h3>
          <p className="text-gray-500 text-sm leading-6">{description}</p>
        </div>
      </Container>
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};
export default AppDetails;
