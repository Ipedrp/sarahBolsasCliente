import { FaRegTrashAlt, FaRegEdit, FaRegUser, FaMailBulk, FaLock } from "react-icons/fa";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

export default function MyAccount() {
    return (
        <main className="w-[90%] min-h-[calc(100vh-100px)]  my-10 mx-auto [font-family:'Jost',sans-serif] flex flex-col gap-10">
            <Breadcrumb currentPage={"Minha Conta"} />

            <header>
                <h2 className="text-center text-2xl mb-4">Minha Conta</h2>
            </header>

            <section className="grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-3 w-full md:w-[70%] min-h-[calc(100vh-10px)] mx-auto">
                {/* MEUS PEDIDOS */}
                <div className="p-4 min-h-[500px] md:min-h-0 md:col-span-4 md:row-span-1 border border-gray-400 rounded-lg">
                    <h3 className="font-medium">MEUS PEDIDOS</h3>
                </div>

                {/* MEUS DADOS E ALTERAR SENHA */}
                <section className="flex flex-col gap-6  min-h-[500px] md:min-h-0 md:col-span-2 md:row-span-2">
                    <div className="flex flex-col justify-between flex-1 p-4 border border-gray-400 rounded-lg">
                        <div>
                            <h3 className="font-medium">MEUS DADOS</h3>
                            <div className="text-sm">
                                <div className="flex gap-2 items-center">
                                    <FaRegUser />
                                    <p>Pedro Paulo Martins de Queiroz</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <FaMailBulk />
                                    <p>pedropaulo727@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <button className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-extralight text-white cursor-pointer">EDITAR</button>
                    </div>
                    <div className="flex flex-col justify-between flex-1 p-4 border border-gray-400 rounded-lg">
                            <div>
                                <h3 className="font-medium">ALTERAR SENHA</h3>
                                <div className="flex gap-2 text-sm">
                                    <FaLock />
                                    <FaLock />
                                    <FaLock />
                                    <FaLock />
                                    <FaLock />
                                </div>
                            </div>
                            <button className="bg-red-900 hover:bg-red-800 p-2 rounded-md font-extralight text-white cursor-pointer">ALTERAR SENHA</button>
                        </div>
                </section>

                {/* ENDEREÇO */}
                <div className="p-4 min-h-[500px] md:min-h-0 md:col-span-2 md:row-span-2 border border-gray-400 rounded-lg">
                    <h3 className="font-medium">MEUS ENDEREÇOS</h3>
                    <div className="border border-gray-400 rounded-lg p-4 mb-2">
                        <div className="flex justify-between">
                            <h4 className="font-medium">Endereço Padrão</h4>
                            <div className="flex gap-2">
                                <FaRegEdit className="cursor-pointer" />
                                <FaRegTrashAlt className="cursor-pointer" />
                            </div>

                        </div>
                        <div className="text-sm">
                            <p>PEDRO PAULO MARTINS DE QUEIROZ</p>
                            <p>PRAÇA NOSSA SENHORA DA CONCEIÇÃO - 85</p>
                            <p>TUCANO - BAHIA - 48790-000</p>
                            <p>(75) 9 9247-7349</p>
                        </div>
                    </div>
                </div>
            </section >
        </main >
    );
}
