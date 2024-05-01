import React from "react";
import logo from "../../assets/logo.png"
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HeaderNav = () => {
    const { t, i18n } = useTranslation();
    const lngs = {
      pt: {name: "Português"},
      es: {name: "Español"},
    }
    const onChangeLang = (e) => {
      const lang_code = e.target.value;
      i18n.changeLanguage(lang_code);
      };
    return (
    <header className="headerNav">
        <NavLink to="/" className="nav-link" aria-label={t("aria-home")}>
            <img src={logo} alt={t("alt-logo")} aria-hidden="true" className="logo navbar-brand"/>
        </NavLink>

        <nav role="navigation" className="navbar navbar-expand-lg">

            <div class="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <ul className="nav navbar-nav">
                            <li className="nav-item">
                            <NavLink to="/" className="nav-link" aria-label={t("aria-home")}>{t("navHome")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/panaderia" className="nav-link" aria-label={t("aria-panaderia")}>{t("navPanaderia")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/empanadas" className="nav-link" aria-label={t("aria-empanadas")}>{t("navEmpanadas")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/pasteleriabolleria" className="nav-link" aria-label={t("aria-pasteleria")}>{t("navPasteleria")}</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contacto" className="nav-link" aria-label={t("aria-contacto")}>{t("navContacto")}</NavLink>
                            </li>
                            <select className="lan-select" defaultValue={i18n.language} onChange={onChangeLang}>{
                            Object.keys(lngs).map((lng) => (
                            <option type="submit" key={lng} value={lng}>{lngs[lng].name}</option>
                            ))}
                            </select>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )}
export default HeaderNav
