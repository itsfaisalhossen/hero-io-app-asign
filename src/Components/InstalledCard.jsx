import { Download } from "lucide-react";

const InstalledCard = () => {
  return (
    <div className="flex flex-col gap-4 md:flex-row w-full bg-white rounded justify-between p-4 items-center">
      <div className="flex flex-col w-full md:flex-row items-center gap-4">
        <div className="w-full md:w-[140px] rounded h-[140px] md:h-[100px] bg-gray-500">
          <img src="" className="w-full" alt="" />
        </div>
        <div>
          <h4 className="mb-2 md:text-lg md:font-medium">
            Forest: Focus for Productivity
          </h4>
          <div className="flex items-center gap-8">
            <div className="flex gap-2 items-center">
              <Download size={16} />
              <p>9m</p>
            </div>
            <div className="flex gap-2 items-center">
              <Download size={16} />
              <p>9m</p>
            </div>
            <div className="flex gap-2 items-center">
              <Download size={16} />
              <p>9m</p>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer w-full md:w-[140px] px-4 py-2 bg-[#00D390] text-white rounded">
        Uninstall
      </button>
    </div>
  );
};
export default InstalledCard;
