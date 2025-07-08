import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

export default function Contact() {
  return (
    <section
      className="flex flex-col gap-10 [font-family:'Jost',sans-serif] w-[90%] min-h-[calc(100vh-120px)] bg-white my-10 mx-auto"
    >
      <Breadcrumb currentPage={"Entrar em Contato"} />

      <div>
        <p className="font-semibold">
          Horário de Atendimento:{" "}
          <span className="font-extralight">Segunda a sexta, das 9h às 17h</span>
        </p>
        <p className="font-semibold">
          Email <span className="font-extralight">sarabolsas@gmail.com</span>
        </p>
        <p className="font-semibold">
          Telefone <span className="font-extralight">(75) 9 9247-7350</span>
        </p>
        <p className="font-semibold">
          Endereço:{" "}
          <span className="font-extralight">
            Rua Floriano Peixoto - Tracupá - Tucano - BA - CEP: 48790-000
          </span>
        </p>
        <p className="font-semibold">
          CNPJ: <span className="font-extralight">59.727.078/0001-55</span>
        </p>
      </div>

      <div>
        <h2 className="text-center text-2xl mb-8">Precisa de Ajuda ?</h2>
        <form className="max-w-md md:max-w-lg mx-auto">
          {/* Input */}
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="input"
              id="input"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="input"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nome
            </label>
          </div>

          {/* Textarea */}
          <div className="relative z-0 w-full mb-5 group">
            <textarea
              name="textarea"
              id="textarea"
              rows="4"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none resize-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="textarea"
              className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Escreva sua pergunta aqui
            </label>
          </div>

          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 w-full mb-5 group">
              <input
                type="tel"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                name="phone"
                id="phone"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Telefone
              </label>
            </div>

            <div className="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="email"
                id="email"
                className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="text-white bg-red-900 hover:bg-red-800 focus:ring-4 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center cursor-pointer"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
