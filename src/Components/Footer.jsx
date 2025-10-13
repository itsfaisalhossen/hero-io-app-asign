import { Link } from "react-router";
import navImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="mt-10 md:mt-16 shadow-sm bg-primary-dark">
      <div className="w-full md:px-6 px-5 lg:px-20 mx-auto py-8 md:py-12">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={navImg} className="h-8" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap  text-white">
              Hiro.io
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-300 sm:mb-0">
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                About
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline me-4 md:me-6">
                Licensing
              </Link>
            </li>
            <li>
              <Link to="/" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-gray-800 lg:my-8" />
        <span className="block text-xs text-gray-300 sm:text-center dark:text-gray-300">
          © 2025 <a className="hover:underline">Hero-io</a>. All Rights
          Reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
