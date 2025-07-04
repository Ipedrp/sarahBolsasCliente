import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import InfoStrip from "../components/infoStrip/InfoStrip";
export default function DefaultLayout() {
    return (
        <>
            <header>
                <InfoStrip />
                <Navbar />
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
}
