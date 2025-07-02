import { Link } from "react-router";

export default function Navbar() {
    return (
        <nav>
            <ul className="flex gap-2 bg-black text-amber-100">
                <Link to="/">                
                    <li>Home</li>
                </Link>
                <Link to="/about">                
                    <li>Sobre</li>
                </Link>
            </ul>
        </nav>
    );
}
