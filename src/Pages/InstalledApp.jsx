import { useState } from "react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import InstalledCard from "../Components/InstalledCard";

const InstalledApp = () => {
  const [sortOrder, setSortOrder] = useState("none");
  return (
    <div>
      <Container>
        <SectionTitle
          title={"Your Installed Apps"}
          subTitle={"Explore All Trending Apps on the Market developed by us"}
        />
        <div className="flex gap-3 mt-10 mb-10 items-center justify-between">
          <h3 className="font-bold text-xl">(132) Apps Found</h3>
          <label>
            <select
              className="border-gray-400 text-sm p-2.5 md:p-3.5 w-full sm:w-[250px] rounded border-1"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="price-asc">Low to high</option>
              <option value="price-desc">High to low</option>
            </select>
          </label>
        </div>
        <div className="space-y-4 my-5">
          <InstalledCard />
          <InstalledCard />
          <InstalledCard />
          <InstalledCard />
        </div>
      </Container>
    </div>
  );
};
export default InstalledApp;
