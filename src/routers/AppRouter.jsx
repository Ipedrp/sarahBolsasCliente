// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
import Contact from '../pages/contact/Contact';
import Login from '../pages/login/Login';
import Register from '../pages/register/Register';
import MyAcount from '../pages/myAcount/MyAcount';
import Promotion from '../pages/promotion/Promotion';
import WomenLine from '../pages/lines/WomenLine';
import MenLine from '../pages/lines/MenLine';
// import ProtectedRouter from '../components/protected/ProtectedRouter';
// Depois fazer o ProtectedRouter para proteger rotas de compras e minha conta

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/myAcount" element={<MyAcount/>}/>
                <Route path="/promotion" element={<Promotion/>}/>
                <Route path="/womenLine" element={<WomenLine/>}/>
                <Route path="/menLine" element={<MenLine/>}/>
            </Route>
        </Routes>
    );
}