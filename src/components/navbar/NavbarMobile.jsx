import { useState, useRef, useEffect } from "react";
import { CiShoppingCart, CiUser, CiLogout, CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

import Sidebar from "../sidebar/Sidebar";
import { perfilLinks } from "../../constants/pageNavigationLinks";
import { Link } from "react-router";

export default function NavbarMobile() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [openDropdownPerfil, setOpenDropdownPerfil] = useState(false);
    const [openModalShoppingCart, setOpenModalShoppingCart] = useState(null)

    const dropdownPerfilRef = useRef(null);
    const modalShoppingCartRef = useRef(null);

    const togglePerfilDropdown = () => {
        setOpenDropdownPerfil((prev) => !prev);
    };

    const toggleModalShoppingCart = () => {
        setOpenModalShoppingCart((prev) => !prev);
    };

    // Fecha os dropdowns ao clicar fora
    useEffect(() => {
        const handleClickOutside = (event) => {

            if (
                dropdownPerfilRef.current && !dropdownPerfilRef.current.contains(event.target)
            ) {
                setOpenDropdownPerfil(false);
            }

            if (
                modalShoppingCartRef.current && !modalShoppingCartRef.current.contains(event.target)
            ) {
                setOpenModalShoppingCart(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Fecha os dropdowns ao mudar de rota
    useEffect(() => {
        setOpenDropdownPerfil(false);
        setOpenModalShoppingCart(false);

    }, [location.pathname]);

    return (
        <>
            <nav className="relative h-16 flex items-center bg-white z-10">
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-xl font-medium text-black [font-family:'Jost',sans-serif]">
                    SARAH BOLSAS
                </h1>

                <div className="flex justify-between items-center w-full px-6">
                    <CiMenuBurger size={20} className="cursor-pointer" onClick={() => setSidebarOpen(true)} />

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

                        {/* Carrinho */}
                        <li className="relative cursor-pointer">
                            <div onClick={toggleModalShoppingCart}>
                                <CiShoppingCart size={20}  />
                                <div className="absolute -bottom-1 -right-1 flex justify-center items-center rounded-full bg-black text-white w-[15px] h-[15px] text-xs">
                                    48
                                </div>
                            </div>
                            {openModalShoppingCart && (
                                <ul className="[font-family:'Jost',sans-serif] absolute right-0 top-full mt-2 w-72 bg-white shadow-md border rounded-md z-50 overflow-hidden">

                                    {/* HEADER */}
                                    <li className="flex justify-between items-center bg-white  font-semibold px-4 py-3">
                                        <p> Itens Selecionados</p>
                                        <IoMdClose className="hover:bg-red-900 hover:text-white rounded-full" onClick={toggleModalShoppingCart} />
                                    </li>

                                    <div className="max-h-74 overflow-y-auto custom-scroll">
                                        {[...Array(3)].map((_, i) => (
                                            <li key={i} className="px-4 py-4 bg-white border-b">
                                                <div className="flex gap-4">
                                                    {/* Imagem */}
                                                    <img
                                                        className="rounded-xl w-24 h-24 object-cover"
                                                        src="../../../public/assets/images/bolsaPreta.png"
                                                        alt=""
                                                    />

                                                    {/* Conteúdo texto + botões */}
                                                    <div className="flex flex-col justify-between w-full">
                                                        {/* Texto com limite de linhas */}
                                                        <div className="text-sm text-gray-700 max-h-20 overflow-hidden">
                                                            <p className="line-clamp-2">Bolsa Feminina couro preta.</p>
                                                            <p className="line-clamp-1">Cor: Preto</p>
                                                            <p className="line-clamp-1 font-medium">R$: 923.32</p>
                                                        </div>

                                                        {/* Botões de quantidade */}
                                                        <div className="flex gap-2 justify-start mt-2">
                                                            <button className="bg-red-900 w-6 h-6 text-white rounded-full hover:bg-red-800 text-sm">+</button>
                                                            <span className="bg-red-900 w-6 h-6 text-white rounded-full text-center flex items-center justify-center text-sm">01</span>
                                                            <button className="bg-red-900 w-6 h-6 text-white rounded-full hover:bg-red-800 text-sm">-</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </div>

                                    {/* FOOTER */}
                                    <li className="px-4 py-3 bg-white font-semibold">
                                        <p className="text-sm">Total de Item(s): 10</p>
                                        <p>Valor Total: R$ 499.671,31</p>
                                        <button className="bg-red-900 text-white w-full p-2 rounded-md mt-2 hover:bg-red-800 hover:cursor-pointer">
                                            Finalizar Comprar
                                        </button>
                                    </li>
                                </ul>
                            )}

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
