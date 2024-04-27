import React from 'react';
import bgFoto from "../assets/home-bg-photo.png"
import phone from "../assets/phone.png"
import map from "../assets/map.webp"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Principal = () => {
    const { t } = useTranslation();
    return (
        <section id="hero">
            <img src={bgFoto} alt={t("alt-img-bg-home")} aria-hidden="true" className='bg-home'/>
            <div className="wrapper-home">
            <h1 className="titulo">{t("titulo")}</h1>
            <div className="wrapper-llama">
                <p>{t("llama")}</p>
                <div className="wrapper-numero">
                    <img src={phone} alt="phone" className="llama-icon" aria-hidden="true"/>
                    <p>555-55-55-55</p>
                </div>
            </div>
            <div className="home-direccion">
                <p>{t("ubicanos")}<span>{t("calle")}</span></p>
                <img src={map} alt={t("alt-mapa")} className='mapa'/>
            </div>
            </div>
            <div className="cta-wrapper">
                <div className="cta">
                    <NavLink to="/panaderia" aria-label={t("aria-panaderia")}>{t("navPanaderia")}</NavLink>
                </div>
                <div className="cta">
                    <NavLink to="/pasteleriabolleria" aria-label={t("aria-pasteleria")}>{t("navPasteleria")}</NavLink>
                </div>
                <div className="cta">
                    <NavLink to="/empanadas" aria-label={t("aria-empanadas")}>{t("navEmpanadas")}</NavLink>
                </div>
            </div>
        </section>
    )
}

export default Principal

