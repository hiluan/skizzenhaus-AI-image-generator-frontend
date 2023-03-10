import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { logoSkizzenHaus } from "../assets";
const Navbar = () => {
  const isMobile = window.innerWidth < 600;
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, []);

  return (
    <nav
      id="nav"
      className={`fixed top-0 w-full z-10 transition-colors duration-300 ${
        scroll > 420 ? "bg-white" : "bg-transparent"
      }`}
    >
      {isMobile && scroll < 420 ? undefined : (
        <div
          className={`w-full flex justify-between items-center sm:px-8 px-4 py-3`}
        >
          <Link to="/">
            <img
              onClick={() => window.location.reload()}
              src={logoSkizzenHaus}
              alt="logo"
              className="w-10 object-contain"
            />
          </Link>
          {/* <Link
          to="/create"
          className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
        >
          Create
        </Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
