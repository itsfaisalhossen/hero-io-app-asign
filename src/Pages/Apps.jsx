import { useEffect, useState } from "react";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import useApps from "../Hooks/useApps";
import LoadingSpinner from "../Components/LoadingSpinner";
import PrimaryBtn from "../Components/PrimaryBtn";

const Apps = () => {
  const { apps, loading } = useApps();
  const [search, setSearch] = useState("");
  const [searchApp, setSearchApp] = useState(apps);
  const [isSearchLoading, setIsSearchLoading] = useState(false);

  const term = (search || "").trim().toLowerCase();

  useEffect(() => {
    if (!apps) return;
    setIsSearchLoading(true);
    const timeout = setTimeout(() => {
      const searchedApps = term
        ? apps.filter(
            (app) => app.title && app.title.toLowerCase().includes(term)
          )
        : apps;
      setSearchApp(searchedApps);
      setIsSearchLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, [apps, search, term]);

  return (
    <div>
      <SectionTitle
        title={"Our All Applications"}
        subTitle={
          "Explore All Apps on the Market developed by us. We code for Millions"
        }
      />
      <Container>
        <div className="flex gap-3 mt-10 md:flex-row items-center justify-between">
          <h3 className="font-bold text-lg md:text-xl">
            ({searchApp.length}) Apps Found
          </h3>
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
                className="flex-1 outline-none bg-inherit text-sm w-full"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="Search Apps"
              />
            </label>
          </div>
        </div>
        {loading || isSearchLoading ? (
          <LoadingSpinner />
        ) : searchApp.length === 0 ? (
          <div className="flex gap-5 mt-10 flex-col items-center justify-center">
            <p className="text-3xl font-bold text-gray-500">No apps found</p>
            <div className="w-[200px]">
              <PrimaryBtn title={"Go Back"} link={"/"} />
            </div>
          </div>
        ) : (
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {searchApp.map((appItem) => (
              <AppCard key={appItem.id} appItem={appItem} />
            ))}
          </div>
        )}
      </Container>
    </div>
  );
};
export default Apps;
