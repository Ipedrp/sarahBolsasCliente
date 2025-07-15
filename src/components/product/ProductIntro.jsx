export default function ProductIntro() {
    return (
        <section className="flex flex-col lg:flex-row md:gap-8 bg-gray-100 w-full md:w-[75%] h-auto mx-auto rounded-2xl p-2 md:p-10">
            <figure className="flex-1">
                <img
                    src="../../../public/assets/images/Image.png"
                    alt="Homem com acessório em couro"
                    className="mx-auto h-[600px] object-cover rounded-xl"
                />
            </figure>

            <article className="flex flex-col flex-1 [font-family:'Jost',sans-serif] space-y-6">
                <header className="space-y-2">
                    <p className="text-gray-400">Sarah Bolsas | 2025</p>
                    <h2 className="font-extralight text-4xl leading-snug">
                        Onde o detalhe revela quem você é.
                    </h2>
                    <h3 className="text-lg font-medium text-gray-700">
                        Para o homem que entende que presença está nos acessórios.
                    </h3>
                </header>

                <section className="space-y-4 text-gray-500 text-md leading-relaxed">
                    <p>
                        Na Sarah, cada peça em couro é criada para ir além da função: 
                        é expressão de estilo, força e identidade. Formas atemporais, 
                        acabamento artesanal e matérias-primas nobres definem o que entregamos.
                    </p>
                    <p> 
                        Criamos para homens que valorizam presença e propósito em cada escolha. 
                        A atenção aos detalhes revela uma elegância discreta, mas impossível de ignorar.
                    </p>
                    <p>
                        Não oferecemos apenas produtos.  
                        Apresentamos uma maneira autêntica de marcar 
                        território sem dizer uma palavra. 
                    </p>
                </section>

                <footer>
                    <button className="bg-red-900 px-6 py-2 rounded-xl text-white font-medium cursor-pointer transition hover:bg-red-800">
                        Ver mais
                    </button>
                </footer>
            </article>
        </section>
    );
}
