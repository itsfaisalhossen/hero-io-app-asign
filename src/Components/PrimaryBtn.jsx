import { Link } from "react-router";

const PrimaryBtn = ({ title, icon: Icon, link }) => {
  return (
    <Link
      to={link}
      // target="blank"
      className="cursor-pointer text-[16px] flex gap-2 items-center justify-center py-3 px-4 font-medium text-[#FFF] rounded-[4px] bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] hover:bg-[linear-gradient(305deg,#9F62F2_5.68%,#632EE3_88.38%)] transition-all duration-500"
    >
      {Icon && <Icon className="w-5 h-5" />}
      {title}
    </Link>
  );
};
export default PrimaryBtn;
