import { HeaderBanner } from "../Components/HeaderBanner";
import SectionTitle from "../Components/SectionTitle";
import TrustedPepole from "../Components/TrustedPepole";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import PrimaryBtn from "../Components/PrimaryBtn";
import useApps from "../Hooks/useApps";
import SkeletonLoading from "../Components/SkeletonLoading";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const { apps, loading, error } = useApps();
  const trendingApps = apps.slice(0, 8);

  return (
    <div>
      <HeaderBanner />
      <TrustedPepole />
      <SectionTitle
        title=" Trending Apps"
        subTitle="Explore All Trending Apps on the Market developed by us"
      />
      <Container>
        {loading ? (
          <SkeletonLoading count={8} />
        ) : (
          <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {trendingApps.map((appItem) => (
              <AppCard key={appItem.id} appItem={appItem} />
            ))}
          </div>
        )}
        <div className="w-[200px] mx-auto">
          <PrimaryBtn title="Show All" link={"/All-Apps"} />
        </div>
      </Container>
    </div>
  );
};
export default Home;
