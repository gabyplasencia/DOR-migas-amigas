import { React, Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Principal from "../views/Principal.jsx";
import Panaderia from "../views/Panaderia.jsx";
import PasteleriaBolleria from "../views/PasteleriaBolleria.jsx";
import Empanadas from "../views/Empanadas.jsx";
import Error404 from "../views/Error404.jsx";
import Footer from "../components/layout/Footer.jsx";
import HeaderNav  from "../components/layout/HeaderNav.jsx";

const MisRutas = () => {
return (
    <Suspense fallback="loading">
        <BrowserRouter>
            <HeaderNav />
            <div role="main">
                <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/principal" element={<Principal />} />
                <Route path="/panaderia" element={<Panaderia />} />
                <Route path="/pasteleriabolleria"
                element={<PasteleriaBolleria />} />
                <Route path="/empanadas" element={<Empanadas />} />
                <Route path="*" element={<Error404 />} />
                </Routes>         
            </div>
            <Footer />
        </BrowserRouter>
    </Suspense>

);
}
export default MisRutas