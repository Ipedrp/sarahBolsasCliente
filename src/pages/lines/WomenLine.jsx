import Breadcrumb from "../../components/breadcrumb/Breadcrumb";
import ProductShowcase from "../../components/product/ProductShowcase";
import BannerProduct from "../../components/banner/BannerProduct";

const produtosLinhaFeminina = [
    {
        id: 1,
        nome: "Bolsa Couro Legítimo Branco",
        valor: "2025",
        imagem: "/assets/images/bolsaBranca.png",
    },
    {
        id: 2,
        nome: "Bolsa Couro Legítimo Vermelha",
        valor: "2025",
        imagem: "/assets/images/bolsaVermelha.png",
    },
    {
        id: 3,
        nome: "Bolsa Couro Legítimo Preta",
        valor: "2025",
        imagem: "/assets/images/bolsaPreta.png",
    },
    {
        id: 4,
        nome: "Bolsa Carteiro Couro Legítimo",
        valor: "2025",
        imagem: "/assets/images/Link.png",
    },
    {
        id: 5,
        nome: "Bolsa Couro Legítimo Caramelo ",
        valor: "2025",
        imagem: "/assets/images/bolsaCaramelo.png",
    },
    {
        id: 5,
        nome: "Bolsa Couro Legítimo Caramelo ",
        valor: "2025",
        imagem: "/assets/images/bolsaCaramelo.png",
    }
];

export default function WomenLine() {
    return (
        <section>
            <BannerProduct title={"L I N H A F E M I N I N A"}  />

            <div className="flex flex-col gap-10 [font-family:'Jost',sans-serif] w-[90%] min-h-[calc(100vh-120px)] my-10 mx-auto">
                <Breadcrumb currentPage={"Linha Feminina"} />
                <ProductShowcase title={"Linha Feminina"} products={produtosLinhaFeminina} />
            </div>
        </section>
    )
}