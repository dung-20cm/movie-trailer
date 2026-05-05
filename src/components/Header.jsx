import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const links = [
    { name: "Home", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const NavLinks = () => {
    return (
      <div className="flex items-center space-x-4">
        <h1 className="text-[30px] uppercase font-bold text-red-700">movie</h1>
        <nav className="flex items-center space-x-4">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-gray-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    );
  };

  //   const NavSearch = () => {
  //     return (
  //       <div className="flex items-center space-x-5">
  //         <input
  //           type="text"
  //           placeholder="Search"
  //           className="border border-gray-300 p-2 text-black"
  //           value={search}
  //           onChange={(e) => setSearch(e.target.value)}
  //         />
  //         <button
  //           className="bg-red-700 text-white px-3 py-1 rounded-lg"
  //           onClick={() => onSearch(search)}
  //         >
  //           Search
  //         </button>
  //       </div>
  //     );
  //   };

  return (
    <div className="p-4 bg-black flex items-center justify-between">
      <NavLinks />
      {/* <NavSearch /> */}
      <div className="flex items-center space-x-5">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 p-2 text-black"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          className="bg-red-700 text-white px-3 py-1 rounded-lg"
          onClick={() => onSearch(search)}
        >
          Search
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;
