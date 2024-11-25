import { useState, useEffect } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";

const Navbar = () => {
  const [toggel, setToggel] = useState(false);

  useEffect(() => {
    const handleClick = (event) => {
      if (!event.target.closest(".sidebar") || !event.target.closest("img")) {
        setToggel(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <nav className="w-full flex justify-between items-center py-6">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white
             ${index === navLinks.length - 1 ? "mr-0 " : "mr-10"} `}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center ">
        <img
          className="w-[28px] h-[28px] object-contain"
          src={toggel ? close : menu}
          alt="menu"
          onClick={(e) => {
            e.stopPropagation();
            setToggel(!toggel);
          }}
        />
        <div
          className={`${
            toggel ? "flex" : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex justify-end items-center flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white
             ${index === navLinks.length - 1 ? "" : "pb-4"} `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
