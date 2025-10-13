import { useEffect, useState } from "react";
import Container from "../Components/Container";
import SectionTitle from "../Components/SectionTitle";
import InstalledCard from "../Components/InstalledCard";
import Swal from "sweetalert2";

const InstalledApp = () => {
  const [installAppsList, setInstallAppsList] = useState([]);
  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedAppsList = JSON.parse(localStorage.getItem("installAppslist"));
    if (savedAppsList) {
      setInstallAppsList(savedAppsList);
    }
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "size-asc") {
      return [...installAppsList].sort((a, b) => a.size - b.size);
    } else if (sortOrder === "size-desc") {
      return [...installAppsList].sort((a, b) => b.size - a.size);
    } else {
      return installAppsList;
    }
  })();

  const handleUninstallApp = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Uninstall it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Uninstall",
          text: "Your file has been Uninstalled.",
          icon: "success",
        });
        const existingAppsList = JSON.parse(
          localStorage.getItem("installAppslist")
        );
        let updatedAppsList = existingAppsList.filter((app) => app.id !== id);
        // for ui instant update
        setInstallAppsList(updatedAppsList);
        localStorage.setItem(
          "installAppslist",
          JSON.stringify(updatedAppsList)
        );
      }
    });
  };

  return (
    <div>
      <title>Hero-io | Installation Apps</title>
      <Container>
        <SectionTitle
          title={"Your Installed Apps"}
          subTitle={"Explore All Trending Apps on the Market developed by us"}
        />
        <div className="flex dark:text-white gap-3 mt-10 mb-10 items-center justify-between">
          {sortedItem?.length === 0 ? (
            <h3 className="font-bold text-lg md:text-xl">
              ({sortedItem?.length}) Apps Fonud
            </h3>
          ) : (
            <h3 className="font-bold text-lg md:text-xl">
              ({sortedItem?.length}) Apps Fonud
            </h3>
          )}
          <label>
            <select
              className="border-gray-400 dark:border-white/60 text-sm p-2.5 md:p-3.5 w-full sm:w-[250px] rounded border-1 dark:bg-primary-dark"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="none">Sort By Size</option>
              <option value="size-asc">Low to high</option>
              <option value="size-desc">High to low</option>
            </select>
          </label>
        </div>
        <div className="space-y-4 my-5">
          {sortedItem?.map((inCard) => (
            <InstalledCard
              handleUninstallApp={handleUninstallApp}
              inCard={inCard}
              key={inCard.id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};
export default InstalledApp;
