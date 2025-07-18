import BreadCrumb from "../../components/breadcrumb/Breadcrumb";

export default function About() {
    return (
        <section className="flex flex-col gap-10 [font-family:'Jost',sans-serif] w-[90%] min-h-[calc(100vh-120px)] my-10 mx-auto p-10">
            <BreadCrumb currentPage={"Sobre a Empresa"} />

            <h2 className="text-center text-2xl">BEM-VINDO À SARAH BOLSAS</h2>

            <div className="flex flex-col md:flex-row gap-6 text-justify text- uppercase">

                <div className="border-t-8 border-r-8 border-red-900">
                    <img
                        className="w-[700px] h-[500px] border-t-8 border-r-8 border-red-900"
                        src="../../../public/assets/images/interiorLoja.png" alt="Interior da loja" />
                </div>

                <div className="flex flex-col gap-8 md:gap-3  p-3">
                    <p className="indent-6">
                        Na SARAH BOLSAS, você encontra sofisticação, qualidade e tradição em produtos de couro legítimo.
                        Somos uma marca especializada na criação de peças elegantes, funcionais e duráveis,
                        pensadas para quem valoriza estilo e autenticidade em cada detalhe.
                    </p>
                    <div>
                        <h3 className="inline-block text-xl border-b-2 border-red-900">
                            Nossa História
                        </h3>
                    </div>

                    <p className="indent-6">
                        A SARAH BOLSAS nasceu da paixão pelo couro e do desejo de oferecer produtos exclusivos com acabamento impecável.
                        Com anos de experiência e dedicação, construímos uma marca sólida, que une design contemporâneo e excelência artesanal.
                    </p>
                    <div>
                        <h3 className="inline-block text-xl border-b-2 border-red-900">O que você encontra aqui?</h3>
                    </div>
                    <p>Oferecemos uma linha completa de produtos em couro:</p>
                    <ul className="list-disc">
                        <div className="mx-5">
                            <li><p>Bolsas femininas e masculinas</p></li>
                            <li><p>Cintos e carteiras</p></li>
                            <li><p>Mochilas e bags de viagem</p></li>
                            <li><p>Nécessaires e o rganizadores</p></li>
                            <li><p>Bolsas executivas e para notebook</p></li>
                            <li><p>Pastas e acessórios corporativos</p></li>
                            <li><p>Itens sob medida e personalizados</p></li>
                        </div>
                    </ul>
                </div>

            </div>


            <div className="flex flex-col md:flex-row gap-6 text-justify text- uppercase">


                <div className="flex flex-col gap-8 md:gap-3 p-3">
                    <p className="indent-6">
                        Cada item é desenvolvido com matéria-prima de alta qualidade, priorizando durabilidade, conforto e beleza.
                        Nossa produção respeita padrões sustentáveis, com fornecedores certificados e preocupação com o impacto ambiental.
                    </p>
                    <div>
                        <h3 className="inline-block text-xl border-b-2 border-red-900">
                            Por que escolher a SARAH BOLSAS?
                        </h3>
                    </div>

                    <ul className="list-disc">
                        <div className="mx-5">
                            <li><p>Couro legítimo e acabamento premium</p></li>
                            <li><p>Design atemporal e versátil</p></li>
                            <li><p>Atendimento personalizado</p></li>
                            <li><p>Garantia de qualidade e confiança</p></li>
                        </div>
                    </ul>

                    <div>
                        <h3 className="inline-block text-xl border-b-2 border-red-900">Conheça nossa loja física ou compre online</h3>
                    </div>
                    <p className="indent-6">Visite nossa loja e viva a experiência SARAH BOLSAS de perto, ou explore nossa vitrine virtual para receber sua peça com segurança e comodidade.</p>

                </div>

                <div className="border-t-8 border-l-8 border-red-900">
                    <img
                        className="w-[700px] h-[500px] border-t-8 border-l-8 border-red-900"
                        src="../../../public/assets/images/couroDetalhes.png" alt="Interior da loja" />
                </div>
            </div>


        </section>
    )
}