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
        <img src={logo} alt={t("alt-logo")} aria-hidden="true" className="logo"/>
        <nav role="navigation">
            <ul className="nav">
                <li className="nav-item">
                <NavLink to="/" aria-label={t("aria-home")}>{t("navHome")}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/panaderia" aria-label={t("aria-panaderia")}>{t("navPanaderia")}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/empanadas" aria-label={t("aria-empanadas")}>{t("navEmpanadas")}</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/pasteleriabolleria" aria-label={t("aria-pasteleria")}>{t("navPasteleria")}</NavLink>
                </li>
            </ul>
        </nav>
        <select className="lan-select" defaultValue={i18n.language} onChange={onChangeLang}>{
            Object.keys(lngs).map((lng) => (
                <option type="submit" key={lng} value={lng}>{lngs[lng].name}</option>
            ))}
        </select>
    </header>
    )}
export default HeaderNav
