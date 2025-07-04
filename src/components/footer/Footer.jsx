import { FaRegCopyright, FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-red-900 text-white">
            <div className="relative h-40 bg-[url('/assets/images/couro-footer.jpg')] bg-cover bg-center text-white [font-family:'Jost',sans-serif] text-3xl flex justify-around items-center">
                <div className="absolute inset-0 bg-black/50 z-0" />
                
                <div className="relative z-10 flex justify-around w-full items-center text-2xl">
                    <h2>Produtos 100% couro legítimo</h2>
                    <h2>SARAH BOLSAS</h2>
                </div>
            </div>

            <div className="flex justify-around items-center [font-family:'Jost',sans-serif] py-1">
                <div className="flex items-center gap-4">
                    <FaRegCopyright size={20} />
                    <h5>2025 SARAH BOLSAS - Todos os direitos reservados.</h5>
                </div>
                <div className="flex gap-4">
                    <FaFacebook size={20} />
                    <FaInstagram size={22} />
                    <FaYoutube size={23} />
                </div>
            </div>
        </footer>
    );
}
