import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductShowcase from "../../components/product/ProductShowcase";
import BannerProduct from "../../components/banner/BannerProduct";

const produtosLinhaMasculina = [
    {
        id: 1,
        nome: "Bolsa Carteiro Legítimo Preta",
        valor: "2025",
        imagem: "/assets/images/Link.png",
    },
    {
        id: 2,
        nome: "Bolsa Couro Legítimo Vermelha",
        valor: "2025",
        imagem: "/assets/images/Link.png",
    },
    {
        id: 3,
        nome: "Bolsa Couro Legítimo Preta",
        valor: "2025",
        imagem: "/assets/images/Link.png",
    },
    {
        id: 4,
        nome: "Bolsa Couro Legítimo Caramelo",
        valor: "2025",
        imagem: "/assets/images/Link.png",
    }
];

export default function WomenLine() {
    return (
        <section>
            <BannerProduct title={"L I N H A M A S C U L I N A"}  />

            <div className="flex flex-col gap-10 [font-family:'Jost',sans-serif] w-[90%] min-h-[calc(100vh-120px)] my-10 mx-auto">
                <Breadcrumb currentPage={"Linha Masculina"} />
                <ProductShowcase title={"Linha Masculina"} products={produtosLinhaMasculina} />
            </div>
        </section>
    )
}