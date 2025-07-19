export default function SelectedProduct({ title, products }) {

    return (
        <section className="flex flex-col items-center gap-10 w-[98%] mx-auto my-10 p-4">
            
            <h2 className="[font-family:'Inter',sans-serif] text-xl font-bold text-center">
                {title}
            </h2>

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

            <button className="bg-red-900 inline-block w-xxs px-4 py-2 rounded-xl [font-family:'Inter',sans-serif] text-white font-medium cursor-pointer hover:bg-red-800">
                Ver mais
            </button>
        </section>
    );
}
