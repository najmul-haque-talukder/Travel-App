import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "../../index.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // Sticky header effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50); // header becomes sticky after 50px scroll
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full bg-black text-white transition-all duration-300 z-50 ${
        isSticky ? "fixed top-0 shadow-lg" : "relative"
      }`}
    >
      <div className="flex items-center justify-between px-4 sm:px-8 md:px-14 lg:px-20 py-4">

        {/* LOGO */}
        <Link to="/">
          <img
            src="/src/assets/icons/logo-white.png"
            alt="Logo"
            className="w-24 sm:w-28 md:w-32"
          />
        </Link>

        {/* NAV LINKS - Desktop only */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 lg:gap-10 text-sm lg:text-base font-light">
            <li className="hover:text-gray-300 duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-gray-300 duration-300">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-gray-300 duration-300">
              <Link to="/destination">Destination</Link>
            </li>
            <li className="hover:text-gray-300 duration-300">
              <Link to="/blog">Blog</Link>
            </li>
            <li className="hover:text-gray-300 duration-300">
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>

        {/* RIGHT SECTION */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Contact (Only large screens) */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="w-10 h-10 border border-white flex items-center justify-center rounded-full">
              <i className="fa-solid fa-phone"></i>
            </div>
            <div>
              <p className="text-xs text-gray-300">Call Us:</p>
              <p className="font-semibold text-sm">+123 456 789</p>
            </div>
          </div>

          {/* Language Selector */}
          <div className="hidden md:block border-l border-r px-4 lg:px-6">
            <select className="bg-transparent outline-none text-sm">
              <option>English</option>
              <option>Bangla</option>
              <option>Italiano</option>
              <option>Arabian</option>
              <option>Hindi</option>
            </select>
          </div>

          {/* Login button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 border rounded-full text-sm hover:bg-white hover:text-black duration-300">
              <i className="fa-solid fa-user mr-1"></i> Login
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-between w-6 h-6 relative"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-all duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE-DOWN MENU */}
      <div
        className={`md:hidden bg-black text-white w-full absolute left-0 top-full transition-max-height duration-500 ease-in-out overflow-hidden ${
          menuOpen ? "max-h-96 py-4" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 text-base">
          {["/", "/about", "/destination", "/blog", "/contacts"].map(
            (path, index) => (
              <li key={index}>
                <Link
                  to={path}
                  className="block hover:text-gray-300"
                  onClick={() => setMenuOpen(false)}
                >
                  {["Home", "About", "Destination", "Blog", "Contacts"][index]}
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
