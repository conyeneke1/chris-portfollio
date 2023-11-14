import React, { useState } from "react";
import logo from "../assets/portfolio-logo1.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <header>
      <nav className="fixed z-10 w-full h-[80px] flex items-center justify-between px-4 bg-[#0a192f] text-gray-300">
        <div className="flex items-center">
          <img src={logo} alt="Logo Image" style={{ width: "80px" }} />
          <h1 className="font-bold pl-3">CHRIS TECH</h1>
        </div>

        <ul className="hidden md:flex">
          <li>
            <Link to="home" smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={50} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} offset={50} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={50} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={50} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : `absolute left-0 top-0 w-full h-screen bg-[#0a192f] flex flex-col items-center justify-center`
          }
        >
          <li className="py-5 text-4xl">
            <Link
              onClick={handleClick}
              to="home"
              smooth={true}
              offset={50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-5 text-4xl">
            <Link
              onClick={handleClick}
              to="about"
              smooth={true}
              offset={50}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="py-5 text-4xl">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              offset={50}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-5 text-4xl">
            <Link
              onClick={handleClick}
              to="work"
              smooth={true}
              offset={50}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li className="py-5 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a
                className="flex w-full justify-between align-center text-gray-300"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/feed/"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
              <a
                className="flex w-full justify-between align-center text-gray-300"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/conyeneke1"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fb260]">
              <a
                className="flex w-full justify-between align-center text-gray-300"
                target="_blank"
                rel="noreferrer"
                href="https://mail.google.com/mail/u/0/#inbox"
              >
                Email <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
              <a
                className="flex w-full justify-between align-center text-gray-300"
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/document/d/e/2PACX-1vRiTdhNXq3Gd_H14sSWcN3mID6hpa6mYkTBzJVCjtJv5sWN3H97h38tCzZNSIE6LCDAI5bvFCBN-AfZ/pub"
              >
                Resume <BsFillPersonLinesFill size={30} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
