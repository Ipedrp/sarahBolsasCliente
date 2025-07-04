import { FaBars } from "react-icons/fa";
import { CiShoppingCart, CiUser } from "react-icons/ci";

export default function NavbarMobile() {
    return (
        <nav className="relative h-16 flex items-center bg-white">
            {/* Título centralizado */}
            <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-medium text-black [font-family:'Jost',sans-serif]">
                SARAH BOLSAS
            </h1>

            {/* Container dos ícones laterais */}
            <div className="flex justify-between items-center w-full px-6">
                {/* Ícone do menu */}
                <FaBars size={20} />

                {/* Ícones à direita */}
                <ul className="flex gap-3 items-center">
                    <li>
                        <CiUser size={20} className="cursor-pointer" />
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
    );
}
