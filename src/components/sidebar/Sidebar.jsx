// Sidebar.jsx
import { IoMdClose } from "react-icons/io";
import { Link, useLocation } from "react-router";
import { navLinks } from "../../constants/NavLinks";

export default function Sidebar({ onClose }) {
    const location = useLocation();

    return (
        <aside className="fixed inset-0 z-50 bg-white p-6 flex flex-col">
            {/* Topo com botão de fechar */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-medium [font-family:'Jost',sans-serif]">SARAH BOLSAS</h2>
                <IoMdClose size={28} className="cursor-pointer" onClick={onClose} />
            </div>

            {/* Lista de Navegação */}
            <ul className="[font-family:'Jost',sans-serif] flex flex-col gap-6 text-lg">
                {navLinks.map(({ label, path }) => (
                    <Link key={path} to={path} onClick={onClose}>
                        <li
                            className={`cursor-pointer border-b pb-2 ${
                                location.pathname === path
                                    ? "border-red-900"
                                    : "border-gray-300"
                            }`}
                        >
                            {label}
                        </li>
                    </Link>
                ))}
            </ul>

          
        </aside>
    );
}
