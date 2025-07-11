import { CiFilter, CiSearch } from "react-icons/ci";

export default function ProductShowcase({ title, products }) {
    return (
        <div className="flex flex-col items-center gap-10 w-[98%] mx-auto my-10 p-4">
            <div className="flex items-center justify-between w-full">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white rounded-lg shadow-md p-3 flex flex-col items-center text-center cursor-pointer"
                    >
                        <img
                            src={product.imagem}
                            alt={product.nome}
                            className="w-full h-[200px] object-cover rounded-md"
                        />
                        <p className="[font-family:'Jost',sans-serif] mt-3 font-extralight text-base">{product.nome}</p>
                        <p className="[font-family:'Inter',sans-serif] mt-3 text-sm font-extrabold text-black">R$ {product.valor}</p>
                    </div>
                ))}
            </div>

            <button className="bg-red-900 inline-block w-xxs px-4 py-2 rounded-xl [font-family:'Inter',sans-serif] text-white font-medium cursor-pointer hover:bg-red-800">
                Ver mais
            </button>
        </div>
    )
}