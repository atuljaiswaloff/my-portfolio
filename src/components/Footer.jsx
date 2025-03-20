import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-6 bg-black  border-t border-gray-900">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-bold text-gray-300">Atul.dev</h2>
        <p className="text-sm text-gray-400 mt-1">
          Bringing the Future to the Web
        </p>

        <div className="flex space-x-6 mt-3">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-all duration-300 text-2xl"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-4">
          &copy; {new Date().getFullYear()} Atul.dev. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
