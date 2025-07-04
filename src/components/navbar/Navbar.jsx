import { CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { Link, useLocation } from "react-router";

export default function Navbar() {
    const location = useLocation();

    const navLinks = [
        { label: "Início", path: "/" },
        { label: "Linha Feminina", path: "/womenLine" },
        { label: "Linha Masculina", path: "/menLine" },
        { label: "Promoção", path: "/promotion" },
        { label: "Sobre a Empresa", path: "/about" },
        { label: "Entrar em Contato", path: "/contact" },
        { label: "Rastrear Produto", path: "/track" },
    ];

    return (
        <nav>
            <div className="relative h-16 flex items-center justify-center py-15">
                <h1 className="[font-family:'Jost',sans-serif] text-3xl font-medium text-black absolute left-1/2 transform -translate-x-1/2">
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

            <div className="h-[1px] w-[90%] mx-auto bg-gray-300"></div>

            <ul className="[font-family:'Jost',sans-serif] flex gap-8 lg:gap-10 xl:gap-16 items-center justify-center text-base xl:text-lg py-2">
                {navLinks.map(({ label, path }) => (
                    <Link key={path} to={path}>
                        <li
                            className={`cursor-pointer border-b-2 border-solid ${location.pathname === path
                                ? "border-red-900"
                                : "border-transparent"
                                }`}
                        >
                            {label}
                        </li>
                    </Link>
                ))}
            </ul>
        </nav>
    );
}
