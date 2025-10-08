import Container from "../Components/Container";
import detailsImage from "../assets/image.png";
import iconDownloads from "../assets/icon-downloads.png";
import iconReview from "../assets/icon-review.png";
import iconRatings from "../assets/icon-ratings.png";
import useApps from "../Hooks/useApps";
import { useParams } from "react-router";
import {
  ComposedChart,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Bar,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps } = useApps();

  const singleApp = apps.find((app) => app.id === Number(id));
  const {
    // id,
    // image,
    ratings,
    size,
    title,
    companyName,
    description,
    reviews,
    ratingAvg,
    downloads,
  } = singleApp || {};

  return singleApp ? (
    <div className="transition-opacity ease-in duration-500 opacity-100">
      <Container>
        {/* detaisl header */}
        <div className=" flex flex-col items-center md:flex-row gap-5 mt-[80px] mb-[40px] md:gap-10">
          <img className="w-full md:w-[330px]" src={detailsImage} alt="" />
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
            <button className="py-2 px-4 rounded font-medium cursor-pointer text-white bg-[#00D390]">
              Install Now ({size}MB)
            </button>
          </div>
        </div>
        {/* detaisl Ratings */}
        <div className="border-t-2 border-b-2 border-gray-200 py-8">
          <h3 className="text-xl font-semibold">Ratings</h3>
          <div className="py-4 h-80 mt-">
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
