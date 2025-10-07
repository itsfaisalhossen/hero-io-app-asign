import { HeaderBanner } from "../Components/HeaderBanner";
import SectionTitle from "../Components/SectionTitle";
import TrustedPepole from "../Components/TrustedPepole";
import AppCard from "../Components/AppCard";
import Container from "../Components/Container";
import PrimaryBtn from "../Components/PrimaryBtn";

const Home = () => {
  return (
    <div>
      <HeaderBanner />
      <TrustedPepole />
      <SectionTitle
        title=" Trending Apps"
        subTitle="Explore All Trending Apps on the Market developed by us"
      />
      <Container>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
          <AppCard />
        </div>
        <div className="w-[200px] mx-auto">
          <PrimaryBtn title="Show All" link={"/Apps"} />
        </div>
      </Container>
    </div>
  );
};
export default Home;
