import Container from "./Container";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="mt-16 md:mt-20">
      <Container>
        <div className="text-center ">
          <h2 className="text-4xl font-bold md:text-5xl text-[#001931]">
            {title}
          </h2>
          <p className="text-[#627382] mt-3 md:mt-4">{subTitle}</p>
        </div>
      </Container>
    </div>
  );
};
export default SectionTitle;
