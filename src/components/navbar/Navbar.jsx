import { useState, useRef, useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link, useLocation } from "react-router";
import {navLinks} from "../../constants/navLinks";
export default function Navbar() {
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const dropdownRef = useRef(null); 

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  // Fecha dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fecha dropdown ao mudar de rota
  useEffect(() => {
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <nav>
      <div className="relative h-16 flex items-center justify-center py-15">
        <h1 className="text-3xl font-medium text-black absolute left-1/2 transform -translate-x-1/2 [font-family:'Jost',sans-serif]">
          SARAH BOLSAS
        </h1>
        <div className="absolute right-5 flex gap-4 items-center text-black">
          <CiSearch size={30} className="cursor-pointer" />
          <CiUser size={30} className="cursor-pointer" />
          <div className="relative cursor-pointer">
            <CiShoppingCart size={30} />
            <div className="absolute -bottom-2 -right-2 flex justify-center items-center rounded-full bg-black text-white w-[20px] h-[20px] text-xs">
              48
            </div>
          </div>
        </div>
      </div>

      <div className="h-[1px] w-[90%] mx-auto bg-gray-300" />

      <ul
        ref={dropdownRef}
        className="[font-family:'Jost',sans-serif] flex gap-8 lg:gap-10 xl:gap-16 items-center justify-center text-base xl:text-lg py-2 relative"
      >
        {navLinks.map(({ label, path, submenu }) => (
          <li key={label} className="relative">
            {submenu ? (
              <>
                <button
                  onClick={() => toggleDropdown(label)}
                  className={`cursor-pointer border-b-2 ${
                    openDropdown === label
                      ? "border-red-900"
                      : "border-transparent"
                  }`}
                >
                  {label}
                </button>

                {openDropdown === label && (
                  <ul className="absolute top-full mt-2 w-40 bg-white shadow-md border rounded-md z-50">
                    {submenu.map((item) => (
                      <li key={item.path} className="px-4 py-2 hover:bg-gray-100">
                        <Link to={item.path}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={path}>
                <span
                  className={`cursor-pointer border-b-2 ${
                    location.pathname === path
                      ? "border-red-900"
                      : "border-transparent"
                  }`}
                >
                  {label}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
