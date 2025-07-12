import { useState, useRef, useEffect } from "react";
import { CiShoppingCart, CiUser, CiLogout, CiMenuBurger  } from "react-icons/ci";
import Sidebar from "../sidebar/Sidebar";
import { perfilLinks } from "../../constants/perfilLinks";
import { Link } from "react-router";
export default function NavbarMobile() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [openDropdownPerfil, setOpenDropdownPerfil] = useState(false);
    const dropdownPerfilRef = useRef(null);

    const togglePerfilDropdown = () => {
        setOpenDropdownPerfil((prev) => !prev);
    };

    // Fecha os dropdowns ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {

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
        setOpenDropdownPerfil(false);
    }, [location.pathname]);

    return (
        <>
            <nav className="relative h-16 flex items-center bg-white z-10">
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-medium text-black [font-family:'Jost',sans-serif]">
                    SARAH BOLSAS
                </h1>

                <div className="flex justify-between items-center w-full px-6">
                    <CiMenuBurger  size={20} className="cursor-pointer" onClick={() => setSidebarOpen(true)} />

                    <ul className="flex gap-3 items-center">
                        <li className="relative" ref={dropdownPerfilRef}>
                            {/* Ícone de usuário com dropdown */}
                            <CiUser size={20} className="cursor-pointer" onClick={togglePerfilDropdown} />

                            {openDropdownPerfil && (
                                <ul className="absolute right-0 top-full mt-2 w-40 bg-white shadow-md border rounded-md z-50 overflow-hidden">
                                    <li className="px-4 py-2 bg-red-900 text-white">Olá, Pedro Paulo</li>
                                    {perfilLinks[0].submenu.map(({ label, path }) => (
                                        <li key={path} className="px-4 py-2 hover:bg-gray-100">
                                            <Link to={path}>{label}</Link>
                                        </li>
                                    ))}
                                    <li className="flex gap-2 justify-between items-center hover:bg-gray-100 px-4 py-2">
                                        <p>Sair</p>
                                        <p><CiLogout /></p>
                                    </li>
                                </ul>
                            )}

                        </li>
                        <li className="relative cursor-pointer">
                            <CiShoppingCart size={20} />
                            <div className="absolute -bottom-2 -right-2 flex justify-center items-center rounded-full bg-black text-white w-[15px] h-[15px] text-xs">
                                <p>48</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>

            {/* Overlay + Sidebar */}
            {sidebarOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black bg-opacity-40 z-40"
                        onClick={() => setSidebarOpen(false)}
                    />
                    <Sidebar onClose={() => setSidebarOpen(false)} />
                </>
            )}
        </>
    );
}
