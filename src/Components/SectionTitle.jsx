import Container from "./Container";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-12 md:mt-20">
      <Container>
        <div className="text-center ">
          <h2 className="text-3xl font-bold md:text-5xl text-[#001931]">
            {title}
          </h2>
          <p className="text-[#627382] max-sm:text-sm mt-3 md:mt-4">
            {subTitle}
          </p>
        </div>
      </Container>
    </div>
  );
};
export default SectionTitle;
