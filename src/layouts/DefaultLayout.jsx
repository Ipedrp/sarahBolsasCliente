import { Outlet } from "react-router";
import Navbar from "../components/navbar/Navbar";
import NavbarMobile from "../components/navbar/NavbarMobile";
import Footer from "../components/footer/Footer";
import FooterMobile from "../components/footer/FooterMobile";
import InfoStrip from "../components/infoStrip/InfoStrip";
import BannerHome from "../components/banner/BannerHome";
import useWindowSize from "../hooks/useWindowSize";
export default function DefaultLayout() {

    const { width } = useWindowSize();

    const isDesktop = width >= 1024;

    return (
        <>
            <header>
                <InfoStrip />
                {
                    isDesktop ? <Navbar /> : <NavbarMobile />
                }
                <BannerHome />
            </header>

            <main className="flex w-[80%] mx-auto justify-center">
                <Outlet />
            </main>


            <footer>
                {
                    isDesktop ? <Footer /> : <FooterMobile />
                }
            </footer>
        </>
    );
}
