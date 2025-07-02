// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router';
import DefaultLayout from '../layouts/DefaultLayout';
import Home from '../pages/home/Home';
import About from '../pages/about/About';
// import ProtectedRouter from '../components/protected/ProtectedRouter';
// Depois fazer o ProtectedRouter para proteger rotas de compras e minha conta

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    );
}