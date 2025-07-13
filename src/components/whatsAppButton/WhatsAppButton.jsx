import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
    return (
        <a
            href="https://wa.me/5575992477349" 
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 z-50 w-[60px] h-[60px] bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-green-700 transition-all"
        >
            <FaWhatsapp size={30}/>
        </a>
    );
}
