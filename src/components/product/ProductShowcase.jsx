import { CiFilter, CiSearch } from "react-icons/ci";

export default function ProductShowcase({ title, products }) {
    return (
        <div className="flex flex-col items-center gap-10 w-[98%] mx-auto my-10 p-4">
            {/* Cabeçalho */}
            <div className="flex items-center justify-between w-full px-2 sm:px-0">
                <div className="cursor-pointer">
                    <CiSearch size={28} />
                </div>
                <h2 className="[font-family:'Jost',sans-serif] text-2xl font-bold">
                    {title}
                </h2>
                <div className="cursor-pointer">
                    <CiFilter size={28} />
                </div>
            </div>

            {/* Cards responsivos centralizados */}
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl px-2 sm:px-0">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="w-[90%] sm:w-[35%] md:w-[30%] lg:w-[18%] bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center cursor-pointer"
                    >
                        <img
                            src={product.imagem}
                            alt={product.nome}
                            className="w-full h-[210px] object-cover rounded-md"
                        />
                        <p className="[font-family:'Jost',sans-serif] mt-3 font-extralight text-base">
                            {product.nome}
                        </p>
                        <p className="[font-family:'Inter',sans-serif] mt-3 text-sm font-extrabold text-black">
                            R$ {product.valor}
                        </p>
                    </div>
                ))}
            </div>

            {/* Botão Ver mais */}
            <button className="bg-red-900 px-4 py-2 rounded-xl [font-family:'Inter',sans-serif] text-white font-medium cursor-pointer hover:bg-red-800">
                Ver mais
            </button>
        </div>
    );
}
