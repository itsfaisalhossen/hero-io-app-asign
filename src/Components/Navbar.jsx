import { NavLink } from "react-router";
import PrimaryBtn from "./PrimaryBtn";
import navImg from "../assets/logo.png";
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <div className="md:px-6 px-5 lg:px-20 py-4 border-b-1 bg-white border-[#E9E9E9] flex items-center justify-between">
      <NavLink to="/" className="flex items-center gap-2">
        <img className="w-10 h-10" src={navImg} alt="Nav_logo" />
        <p className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-bold text-[16px]">
          HERO.IO
        </p>
      </NavLink>
      <ul className="flex items-center gap-8 font-medium">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 [border-image:linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)_1] decoration-solid decoration-skip-ink-none capitalize bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                : "text-black"
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 [border-image:linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)_1] decoration-solid decoration-skip-ink-none capitalize bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                : "text-black"
            }
            to="/Apps"
          >
            Apps
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "border-b-2 [border-image:linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)_1] decoration-solid decoration-skip-ink-none capitalize bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent"
                : "text-black"
            }
            to="/Installed-Apps"
          >
            Installation
          </NavLink>
        </li>
      </ul>
      <div className="hidden md:flex ">
        <PrimaryBtn
          icon={Github}
          title="Contribute"
          link={"https://github.com/itsfaisalhossen"}
        />
      </div>
    </div>
  );
};
export default Navbar;
