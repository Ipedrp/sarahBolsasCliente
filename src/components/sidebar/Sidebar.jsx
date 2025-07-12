import { useState, useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router";
import { navLinks } from "../../constants/navLinks";

export default function Sidebar({ onClose }) {
    const location = useLocation();
    const [openDropdown, setOpenDropdown] = useState(null); // controla dropdown

    const toggleDropdown = (label) => {
        setOpenDropdown((prev) => (prev === label ? null : label));
    };

    // Fecha dropdown ao trocar de rota
    useEffect(() => {
        setOpenDropdown(null);
    }, [location.pathname]);

    return (
        <aside className="fixed inset-0 z-50 bg-white p-6 flex flex-col overflow-y-auto">
            {/* Topo com botão de fechar */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium [font-family:'Jost',sans-serif]">SARAH BOLSAS</h2>
                <IoMdClose size={28} className="cursor-pointer" onClick={onClose} />
            </div>

            {/* Lista de Navegação */}
            <ul className="[font-family:'Jost',sans-serif] flex flex-col gap-4 text-lg">
                {navLinks.map(({ label, path, submenu }) => (
                    <li key={label} className="flex flex-col">
                        {submenu ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(label)}
                                    className={`text-left w-full pb-2 border-b ${
                                        openDropdown === label
                                            ? "border-red-900 text-red-900"
                                            : "border-gray-300 text-black"
                                    }`}
                                >
                                    {label}
                                </button>

                                {/* Submenu visível */}
                                {openDropdown === label && (
                                    <ul className="pl-4 mt-2 flex flex-col gap-2 border-l-2 border-red-900">
                                        {submenu.map(({ label: subLabel, path: subPath }) => (
                                            <Link key={subPath} to={subPath} onClick={onClose}>
                                                <li
                                                    className={`text-base py-1 pl-2 border-b border-gray-200 hover:text-red-900`}
                                                >
                                                    {subLabel}
                                                </li>
                                            </Link>
                                        ))}
                                    </ul>
                                )}
                            </>
                        ) : (
                            <Link to={path} onClick={onClose}>
                                <span
                                    className={`block cursor-pointer pb-2 border-b ${
                                        location.pathname === path
                                            ? "border-red-900 text-red-900"
                                            : "border-gray-300 text-black"
                                    }`}
                                >
                                    {label}
                                </span>
                            </Link>
                        )}
                    </li>
                ))}
            </ul>
        </aside>
    );
}
