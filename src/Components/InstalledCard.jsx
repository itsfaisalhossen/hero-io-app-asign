import { Download } from "lucide-react";
import iconRatings from "../assets/icon-ratings.png";

const InstalledCard = ({ inCard, handleUninstallApp }) => {
  const { id, title, image, downloads, ratingAvg, size } = inCard || {};
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full bg-white rounded justify-between p-4 items-center">
      <div className="flex flex-col w-full md:flex-row items-center gap-4">
        <div className="w-full flex flex-col items-center justify-center md:w-[130px] bg-gray-50 p-5 rounded-md">
          <img width={120} src={image || null} alt="" />
        </div>
        <div>
          <h4 className="mb-2 md:text-lg md:font-medium">{title}</h4>
          <div className="flex items-center gap-4">
            <div className="text-green-500 flex gap-1 items-center">
              <Download size={16} />
              <p>{downloads}M</p>
            </div>
            <div className="flex gap-1 text-orange-500 items-center">
              <img width={15} src={iconRatings} alt="" />
              <p>{ratingAvg}</p>
            </div>
            <div className="flex gap-1 items-center">
              <p>{size} MB</p>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => handleUninstallApp(id)}
        className="cursor-pointer w-full md:w-[140px] px-4 py-2 bg-[#00D390] text-white rounded"
      >
        Uninstall
      </button>
    </div>
  );
};
export default InstalledCard;
