import SelectedProduct from "../../components/product/SelectedProduct";
import Gallery from "../../components/gallery/Gallery";
import ProductIntro from "../../components/product/ProductIntro"
import BannerHome from "../../components/banner/BannerHome";
const produtosWomen = [
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
        nome: "Bolsa Couro Legítimo Caramelo",
        valor: "2025",
        imagem: "/assets/images/bolsaCaramelo.png",
    }
];

const produtosMen = [
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

export default function Home() {
    return (
        <section>
            <BannerHome />
            <div className="flex flex-col gap-10 [font-family:'Jost',sans-serif] w-[90%] min-h-[calc(100vh-120px)] my-10 mx-auto">
                <SelectedProduct title={"Nova Coleção | Verão 2025"} products={produtosWomen} />
                <Gallery />
                <SelectedProduct title={"Nova Coleção | Bolsa Carteiro"} products={produtosMen} />
                <ProductIntro />
            </div>
        </section>
    )
}