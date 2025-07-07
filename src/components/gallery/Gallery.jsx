export default function Gallery() {
    return (
        <section className="flex flex-col items-center gap-10  my-10 p-4">
            <h2 className="[font-family:'Inter',sans-serif] text-xl font-bold text-center">
                Luxuoso e Elegante
            </h2>
            <div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 gap-2 md:gap-5 w-[80%] h-[500px] mx-auto p-2">
                <div className="md:row-span-2">
                    <img
                        src="../../../public/assets/images/mo.jpeg"
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div >
                    <img
                        src="../../../public/assets/images/ewe.png"
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
                <div >
                    <img
                        src="../../../public/assets/images/ewe.png"
                        alt=""
                        className="w-full h-full object-cover rounded-2xl"
                    />
                </div>
            </div>
        </section>
    );
}
