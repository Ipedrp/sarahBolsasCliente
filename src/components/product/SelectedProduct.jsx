// components/product/SelectedProduct.jsx

// const produtos = [
//     {
//         id: 1,
//         nome: "Bolsa Couro Legítimo Branco",
//         valor: "2025",
//         imagem: "/assets/images/bolsaBranca.png",
//     },
//     {
//         id: 2,
//         nome: "Bolsa Couro Legítimo Vermelha",
//         valor: "2025",
//         imagem: "/assets/images/bolsaVermelha.png",
//     },
//     {
//         id: 3,
//         nome: "Bolsa Couro Legítimo Preta",
//         valor: "2025",
//         imagem: "/assets/images/bolsaPreta.png",
//     },
//     {
//         id: 4,
//         nome: "Bolsa Couro Legítimo Caramelo",
//         valor: "2025",
//         imagem: "/assets/images/bolsaCaramelo.png",
//     }
// ];

export default function SelectedProduct({ title, products }) {

    return (
        <section className="flex flex-col items-center gap-10 my-10 p-4">
            <h2 className="[font-family:'Inter',sans-serif] text-xl font-bold text-center">
                {title}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

            <button className="bg-red-900 inline-block w-xxs px-4 py-2 rounded-xl [font-family:'Inter',sans-serif] text-white font-medium cursor-pointer">
                Ver mais
            </button>
        </section>
    );
}
