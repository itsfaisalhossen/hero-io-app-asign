import { useState } from "react";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import useApps from "../Hooks/useApps";
import SkeletonLoading from "../Components/SkeletonLoading";

const Apps = () => {
  // eslint-disable-next-line no-unused-vars
  const [search, setSearch] = useState("");
  // eslint-disable-next-line no-unused-vars
  const { apps, loading, error } = useApps();

  return (
    <div>
      <SectionTitle
        title={"Our All Applications"}
        subTitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />
      <Container>
        <div className="flex flex-col gap-3 mt-10 md:flex-row items-center justify-between">
          <h3 className="font-bold text-xl">({apps.length}) Apps Found</h3>
          <div>
            <label className="flex items-center border-gray-400 p-1.5 md:p-2 rounded border-1">
              <svg
                className="h-[1.5em] mx-1 opacity-40"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                required
                type="search"
                className="p-1.5 text-sm w-full"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        {loading ? (
          <SkeletonLoading count={25} />
        ) : (
          <div className="my-4 md:my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {apps.map((appItem) => (
              <AppCard key={appItem.id} appItem={appItem} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
export default Apps;
