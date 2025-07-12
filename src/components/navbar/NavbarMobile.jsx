import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import Sidebar from "../sidebar/Sidebar";

export default function NavbarMobile() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            <nav className="relative h-16 flex items-center bg-white z-10">
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-medium text-black [font-family:'Jost',sans-serif]">
                    SARAH BOLSAS
                </h1>

                <div className="flex justify-between items-center w-full px-6">
                    <FaBars size={20} className="cursor-pointer" onClick={() => setSidebarOpen(true)} />

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
