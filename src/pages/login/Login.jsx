import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import { Link } from "react-router";
export default function Login() {
    return (
        <section className="flex flex-col gap-10 [font-family:'Jost',sans-serif] w-[90%] min-h-[calc(100vh-120px)] bg-white my-10 mx-auto">
            <Breadcrumb currentPage={"Entrar"} />
            <h2 className="text-center text-2xl mb-4">Entrar na Conta</h2>

            {/* Corrigido para usar max-w-sm ao invés de w-2xs */}
            <form className="border p-6 border-gray-400 rounded-lg max-w-sm w-full mx-auto">
                {/* Input Email */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="text"
                        name="email"
                        id="email"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="email"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Email
                    </label>
                </div>

                {/* Input Password */}
                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label
                        htmlFor="password"
                        className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                        Senha
                    </label>
                </div>

                {/* Botão com largura total */}
                <button
                    type="submit"
                    className="w-full text-white bg-red-900 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 cursor-pointer"
                >
                    Entrar
                </button>
                <p className="text-xs">
                    É novo aqui ?  
                    <Link to={"/register"}>
                        <span className="hover:text-blue-500 cursor-pointer"> Criar Conta</span>
                    </Link>
                </p>
            </form>
        </section >
    );
}
