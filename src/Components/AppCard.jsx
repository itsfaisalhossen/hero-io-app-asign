import { Download, Star } from "lucide-react";
import { Link } from "react-router";

const AppCard = () => {
  const id = "121";
  return (
    <Link
      to={`/App-Details/${id}`}
      className="p-4 w-full bg-white rounded-md space-y-4 hover:scale-105 transition-all duration-300"
    >
      <div className="bg-gray-200 w-full h-[230px] rounded-md">
        <img src="" alt="card_image" />
      </div>
      <h3 className="font-medium">FLIP - Focus Timer for Study</h3>
      <div className="flex justify-between items-center">
        <div className="flex rounded-md text-[#00D390] items-center px-2.5 py-1 gap-2 bg-[#F1F5E8]">
          <Download size={16} />
          <p>9M</p>
        </div>
        <div className="flex text-[#FF8811] rounded-md items-center px-2.5 py-1 gap-2 bg-[#FFF0E1]">
          <Star size={16} />
          <p>5</p>
        </div>
      </div>
    </Link>
  );
};
export default AppCard;
