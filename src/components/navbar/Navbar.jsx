import { useState, useRef, useEffect } from "react";
import { CiSearch, CiShoppingCart, CiUser, CiLogout } from "react-icons/ci";
import { Link, useLocation } from "react-router";
import { navLinks } from "../../constants/navLinks";
import { perfilLinks } from "../../constants/perfilLinks";

export default function Navbar() {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openDropdownPerfil, setOpenDropdownPerfil] = useState(false);

    const dropdownRef = useRef(null);
    const dropdownPerfilRef = useRef(null);

    const toggleDropdown = (label) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    const togglePerfilDropdown = () => {
        setOpenDropdownPerfil((prev) => !prev);
    };

    // Fecha os dropdowns ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current && !dropdownRef.current.contains(event.target)
            ) {
                setOpenDropdown(null);
            }

            if (
                dropdownPerfilRef.current && !dropdownPerfilRef.current.contains(event.target)
            ) {
                setOpenDropdownPerfil(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fecha os dropdowns ao mudar de rota
    useEffect(() => {
        setOpenDropdown(null);
        setOpenDropdownPerfil(false);
    }, [location.pathname]);

    return (
        <nav>
            {/* Header */}
            <div className="relative h-16 flex items-center justify-center py-15">
                <h1 className="text-3xl font-medium text-black absolute left-1/2 transform -translate-x-1/2 [font-family:'Jost',sans-serif]">
                    SARAH BOLSAS
                </h1>

                <div className="absolute right-5 flex gap-4 items-center text-black">
                    <CiSearch size={30} className="cursor-pointer" />

                    {/* Ícone de usuário com dropdown */}
                    <div className="relative" ref={dropdownPerfilRef}>
                        <button onClick={togglePerfilDropdown}>
                            <CiUser size={30} className="cursor-pointer" />
                        </button>

                        {openDropdownPerfil && (
                            <ul className="absolute right-0 top-full mt-2 w-40 bg-white shadow-md border rounded-md z-50 overflow-hidden">
                                <li className="px-4 py-2 bg-red-900 text-white">Olá, Pedro Paulo</li>
                                {perfilLinks[0].submenu.map(({ label, path }) => (
                                    <li key={path} className="px-4 py-2 hover:bg-gray-100">
                                        <Link to={path}>{label}</Link>
                                    </li>
                                ))}
                                <li className="flex gap-2 justify-between items-center hover:bg-gray-100 px-4 py-2">
                                    <p className="cursor-pointer">Sair</p>
                                    <p className="cursor-pointer"><CiLogout /></p>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Carrinho */}
                    <div className="relative cursor-pointer">
                        <CiShoppingCart size={30} />
                        <div className="absolute -bottom-2 -right-2 flex justify-center items-center rounded-full bg-black text-white w-[20px] h-[20px] text-xs">
                            48
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-[1px] w-[90%] mx-auto bg-gray-300" />

            {/* Navegação principal */}
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

                                >
                                    {label}
                                </button>

                                {openDropdown === label && (
                                    <ul className="absolute top-full mt-2 w-40 bg-white shadow-md border rounded-md z-50">
                                        {submenu.map((item) => (
                                            <li key={item.path} className="px-4 py-2 hover:bg-gray-100 bg-">
                                                <Link to={item.path}>{item.label}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link to={path}>
                                <span
                                    className={`cursor-pointer border-b-2 ${location.pathname === path
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
